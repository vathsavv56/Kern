import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { MdContentCopy, MdCheck } from "react-icons/md";

const weights = [
    { value: 100, label: "Thin" },
    { value: 200, label: "Extra Light" },
    { value: 300, label: "Light" },
    { value: 400, label: "Regular" },
    { value: 500, label: "Medium" },
    { value: 600, label: "Semi Bold" },
    { value: 700, label: "Bold" },
    { value: 800, label: "Extra Bold" },
    { value: 900, label: "Black" },
];

const sampleSizes = [
    { px: 48, label: "Display" },
    { px: 32, label: "Heading" },
    { px: 20, label: "Body" },
    { px: 14, label: "Caption" },
];

function getCssSnippet(fontName: string, weight: number, italic: boolean) {
    const familyParam = fontName.replace(/ /g, "+");
    const italicFlag = italic ? "1," : "0,";
    return `@import url('https://fonts.googleapis.com/css2?family=${familyParam}:ital,wght@${italicFlag}${weight}&display=swap');

font-family: '${fontName}', sans-serif;
font-weight: ${weight};${italic ? "\nfont-style: italic;" : ""}`;
}

const FontDetailPage = () => {
    const { fontName } = useParams<{ fontName: string }>();
    const navigate = useNavigate();
    const decodedName = decodeURIComponent(fontName || "");

    const [loaded, setLoaded] = useState(false);
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [previewText, setPreviewText] = useState(
        "The quick brown fox jumps over the lazy dog"
    );

    useEffect(() => {
        if (!decodedName) return;
        const familyParam = decodedName.replace(/ /g, "+");
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${familyParam}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link.onload = () => setLoaded(true);
        return () => {
            document.head.removeChild(link);
        };
    }, [decodedName]);

    const handleCopy = (key: string, text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    if (!decodedName) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 py-20 text-center text-gray-400">
                Font not found.
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
            {/* Header */}
            <button
                onClick={() => navigate("/fonts")}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-6 cursor-pointer group"
            >
                <IoIosArrowBack className="text-base group-hover:-translate-x-0.5 transition-transform" />
                Back to fonts
            </button>

            <div className="mb-10">
                <h1
                    className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-2 transition-opacity duration-500"
                    style={{
                        fontFamily: loaded ? `'${decodedName}', sans-serif` : "inherit",
                        opacity: loaded ? 1 : 0.3,
                    }}
                >
                    {decodedName}
                </h1>
                <p className="text-sm text-gray-400">
                    {weights.length} weights · normal & italic · Google Fonts
                </p>
            </div>

            {/* Custom preview text */}
            <div className="mb-10 sticky top-0 z-20 pt-2 pb-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <input
                        type="text"
                        placeholder="Type to preview..."
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-lg text-gray-900 placeholder:text-gray-300"
                    />
                </div>
            </div>

            {/* Size showcase */}
            <section className="mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                    Size Scale
                </h2>
                <div className="flex flex-col gap-4">
                    {sampleSizes.map(({ px, label }) => (
                        <div key={px} className="flex items-baseline gap-4">
                            <span className="text-[10px] text-gray-300 w-14 shrink-0 tabular-nums text-right">
                                {px}px · {label}
                            </span>
                            <p
                                className="text-gray-800 truncate transition-opacity duration-500"
                                style={{
                                    fontFamily: loaded
                                        ? `'${decodedName}', sans-serif`
                                        : "inherit",
                                    fontSize: `${px}px`,
                                    opacity: loaded ? 1 : 0.15,
                                }}
                            >
                                {previewText || "The quick brown fox"}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Weight variations */}
            <section>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                    Weight Variations
                </h2>
                <div className="flex flex-col gap-3">
                    {weights.map(({ value, label }) =>
                        [false, true].map((italic) => {
                            const key = `${value}-${italic ? "italic" : "normal"}`;
                            const snippet = getCssSnippet(decodedName, value, italic);
                            const isCopied = copiedKey === key;

                            return (
                                <div
                                    key={key}
                                    className="group relative border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all"
                                >
                                    {/* Copy button */}
                                    <button
                                        onClick={() => handleCopy(key, snippet)}
                                        className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${isCopied
                                                ? "bg-green-50 text-green-600 border border-green-200"
                                                : "bg-gray-50 text-gray-400 border border-gray-100 opacity-0 group-hover:opacity-100 hover:bg-gray-100 hover:text-gray-700"
                                            }`}
                                    >
                                        {isCopied ? (
                                            <>
                                                <MdCheck className="text-sm" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <MdContentCopy className="text-sm" />
                                                Copy CSS
                                            </>
                                        )}
                                    </button>

                                    {/* Labels */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[11px] font-semibold text-gray-900">
                                            {label} {value}
                                        </span>
                                        {italic && (
                                            <span className="text-[10px] text-gray-400 italic">
                                                Italic
                                            </span>
                                        )}
                                    </div>

                                    {/* Preview */}
                                    <p
                                        className="text-2xl text-gray-800 leading-relaxed truncate transition-opacity duration-500"
                                        style={{
                                            fontFamily: loaded
                                                ? `'${decodedName}', sans-serif`
                                                : "inherit",
                                            fontWeight: value,
                                            fontStyle: italic ? "italic" : "normal",
                                            opacity: loaded ? 1 : 0.15,
                                        }}
                                    >
                                        {previewText || "The quick brown fox"}
                                    </p>

                                    {/* Snippet preview */}
                                    <pre className="mt-3 text-[10px] text-gray-300 font-mono leading-relaxed overflow-x-auto hidden group-hover:block">
                                        {snippet}
                                    </pre>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
        </div>
    );
};

export default FontDetailPage;
