import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENT_DIR = path.resolve(__dirname, '../src/client/components/kernC');
const OUTPUT_DIR = path.resolve(__dirname, '../public/r');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const EXCLUDE_FILES = [
    'ItemShowCase.tsx',
    'Menu.tsx',
    'MenuRouter.tsx',
    'ButtonMenu.tsx',
    'ButtonShowCase.tsx',
    'NavBars.tsx',
    'Buttons.tsx'
];
const EXCLUDE_DIRS = ['Docs'];

function getComponentFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!EXCLUDE_DIRS.includes(file)) {
                getComponentFiles(filePath, fileList);
            }
        } else if (filePath.endsWith('.tsx') && !EXCLUDE_FILES.includes(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

function extractDependencies(content) {
    const deps = [];
    const regex = /from\s+['"]([^'".\\]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const dep = match[1];
        if (dep.startsWith('.')) continue; // skip relative imports
        if (['react', 'react-dom'].includes(dep)) continue; // skip core react
        deps.push(dep);
    }
    return [...new Set(deps)];
}

const componentFiles = getComponentFiles(COMPONENT_DIR);

const registryIndex = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "kern-ui",
    homepage: "https://kern-ui.com", // You can update this later
    items: []
};

for (const filePath of componentFiles) {
    const fileName = path.basename(filePath, '.tsx');
    const registryName = fileName.toLowerCase();
    const content = fs.readFileSync(filePath, 'utf-8');
    const dependencies = extractDependencies(content);

    const registryItem = {
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        name: registryName,
        type: "registry:component",
        title: fileName,
        description: `Kern UI ${fileName} component`,
        dependencies: dependencies,
        files: [
            {
                path: `${registryName}.tsx`,
                content: content,
                type: "registry:component",
                target: `components/kern/${fileName}.tsx`
            }
        ]
    };

    const outPath = path.join(OUTPUT_DIR, `${registryName}.json`);
    fs.writeFileSync(outPath, JSON.stringify(registryItem, null, 2));
    console.log(`Generated ${registryName}.json`);

    registryIndex.items.push({
        name: registryName,
        type: "registry:component",
        description: registryItem.description,
        dependencies: registryItem.dependencies,
        files: [`${registryName}.tsx`]
    });
}

// Write index.json
fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.json'),
    JSON.stringify(registryIndex, null, 2)
);
console.log('Generated index.json');
console.log('Registry build complete.');
