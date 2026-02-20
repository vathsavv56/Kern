# Kern UI

**Kern UI** is a modern, responsive, and beautifully designed component library built for React. It features a curated set of components with rich aesthetics, smooth animations, and zero JavaScript-heavy overhead—relying instead on pure CSS and Tailwind utility classes for interactions.

Kern UI is fully integrated with a **Custom Shadcn Registry**, allowing you to seamlessly install its components directly into your own projects using the powerful Shadcn CLI.

![Kern UI Preview](https://kern-sigma.vercel.app/vite.svg)

##  Features

- **Beautiful Design:** Built with modern aesthetics, glassmorphism, smooth gradients, and elegant typography.
- **Zero Configuration:** No complex setups. Components are copy-paste ready or instantly installable via CLI.
- **Tailwind Native:** 100% built on Tailwind CSS (v4+) utilities. Easily readable, highly customizable.
- **Micro-Animations:** Fluid CSS-powered transitions, hover states, and animations out-of-the-box.
- **Shadcn CLI Support:** Install individual components like `npx shadcn@latest add ...` directly into your source code.
- **Accessible:** Semantic structure ready for ARIA additions.

---

##  Getting Started

There are two primary ways to add Kern UI components to your project.

### Option 1: CLI Installation (Recommended)

Kern UI components are hosted on our custom registry at `https://kern-sigma.vercel.app`. You can install them exactly how you install standard Shadcn components.

```bash
# Example: Installing the Animated Button component
npx shadcn@latest add https://kern-sigma.vercel.app/r/button5.json
```

*Note: You must have a `components.json` initialized in your project (`npx shadcn@latest init`) before running the add commands.*

### Option 2: Manual Installation

1. Install the required peer dependencies in your React project:
```bash
npm install tailwindcss react-icons lucide-react
```
2. Navigate to our [documentation](https://kern-sigma.vercel.app/docs) or component showcases.
3. Simply copy the `.tsx` code block and paste it into your `src/components` folder.

---

##  Available Components

Kern UI provides over 20 tailored web components:

- **Navbars:** 5 variants including Classic, Dashboard, Glassmorphism, Monochromatic, and Centered-Logo.
- **Buttons:** 5 variants ranging from basic, icon-based, social logins, and fully animated interactive buttons.
- **Cards:** Profile cards, content cards, and interactive hover cards.
- **Avatars:** Image, Initial, and Status indicator avatars in multiple sizes.
- **Forms & Inputs:** Interactive `SearchBar` with live-filtering dropdowns, and robust `TextArea` with character limits.
- **Data Display:** Github Contribution HeatMap component fetching live data.
- **Feedback:** 4 purely CSS animated Loading Spinners (pulse, bounce, spin, dual ring).

---

## 🛠️ Development & Local Setup

If you want to contribute to the UI library or preview the components locally:

1. **Clone the repository:**
```bash
git clone https://github.com/vathsavv56/Kern
cd Kern-Frontend
```

2. **Install dependencies:**
```bash
npm install
# or
bun install
```

3. **Run the local preview server:**
```bash
npm run dev
# or
bun run dev
```

### Building the Registry

If you modify or create new components in `src/client/components/kernC/`, you need to rebuild the internal Shadcn registry so it can be consumed publicly. 
We provide an automated node script that traverses the directory, extracts the code, finds module dependencies, and exports the JSON files.

```bash
npm run build:registry
# or
bun run build:registry
```
*This generates registry files into the `public/r/` directory.*

---

##  Requirements

- **React:** v19+
- **Tailwind CSS:** v4.1+
- **Icons:** `react-icons` and `lucide-react`
- **Build Tool:** Vite (recommended)

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
