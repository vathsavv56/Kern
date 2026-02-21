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
            <div className="w-full max-w-5xl mx-auto px-4 py-20 text-center">
                <p className="text-gray-400 text-lg font-poppins">Font not found.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
            {/* Back button */}
            <button
                onClick={() => navigate("/fonts")}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8 cursor-pointer group"
            >
                <IoIosArrowBack className="text-base group-hover:-translate-x-0.5 transition-transform" />
                Back to fonts
            </button>

            {/* Hero */}
            <div className="mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5">
                    <span className="w-2 h-2 rounded-full bg-gray-900" />
                    <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono">
                        Font Preview
                    </span>
                </div>
                <h1
                    className="text-4xl sm:text-6xl font-bold font-poppins tracking-tight text-gray-900 mb-3 transition-opacity duration-500"
                    style={{
                        fontFamily: loaded ? `'${decodedName}', sans-serif` : "inherit",
                        opacity: loaded ? 1 : 0.2,
                    }}
                >
                    {decodedName}
                </h1>
                <p className="text-gray-400 text-sm font-jetMono">
                    {weights.length} weights · normal & italic · Google Fonts
                </p>
            </div>

            {/* Preview input */}
            <div className="mb-10 sm:mb-14 sticky top-0 z-20 pt-2 pb-4">
                <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm">
                    <input
                        type="text"
                        placeholder="Type anything to preview…"
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-lg text-gray-900 placeholder:text-gray-300 font-poppins"
                    />
                </div>
            </div>

            {/* Size scale */}
            <section className="mb-14">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">
                    <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono">
                        Size Scale
                    </span>
                    <div className="flex flex-col gap-6 mt-6">
                        {sampleSizes.map(({ px, label }) => (
                            <div key={px} className="flex items-baseline gap-5">
                                <span className="text-[10px] text-gray-300 w-16 shrink-0 tabular-nums text-right font-jetMono">
                                    {px}px · {label}
                                </span>
                                <p
                                    className="text-gray-800 truncate transition-opacity duration-500"
                                    style={{
                                        fontFamily: loaded
                                            ? `'${decodedName}', sans-serif`
                                            : "inherit",
                                        fontSize: `${px}px`,
                                        opacity: loaded ? 1 : 0.12,
                                    }}
                                >
                                    {previewText || "The quick brown fox"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Weight variations */}
            <section>
                <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
                    Weight Variations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {weights.map(({ value, label }) =>
                        [false, true].map((italic) => {
                            const key = `${value}-${italic ? "italic" : "normal"}`;
                            const snippet = getCssSnippet(decodedName, value, italic);
                            const isCopied = copiedKey === key;

                            return (
                                <div
                                    key={key}
                                    className="group bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 relative"
                                >
                                    {/* Copy button */}
                                    <button
                                        onClick={() => handleCopy(key, snippet)}
                                        className={`absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[10px] font-semibold transition-all cursor-pointer ${isCopied
                                                ? "bg-green-50 text-green-600 border border-green-200"
                                                : "bg-gray-50 text-gray-400 border border-gray-100 opacity-0 group-hover:opacity-100 hover:bg-gray-100 hover:text-gray-700"
                                            }`}
                                    >
                                        {isCopied ? (
                                            <>
                                                <MdCheck className="text-xs" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <MdContentCopy className="text-xs" />
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
                                            <span className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500 italic">
                                                Italic
                                            </span>
                                        )}
                                    </div>

                                    {/* Preview */}
                                    <p
                                        className="text-xl sm:text-2xl text-gray-800 leading-relaxed truncate transition-opacity duration-500"
                                        style={{
                                            fontFamily: loaded
                                                ? `'${decodedName}', sans-serif`
                                                : "inherit",
                                            fontWeight: value,
                                            fontStyle: italic ? "italic" : "normal",
                                            opacity: loaded ? 1 : 0.12,
                                        }}
                                    >
                                        {previewText || "The quick brown fox"}
                                    </p>

                                    {/* Snippet — visible on hover */}
                                    <pre className="mt-3 text-[9px] text-gray-300 font-jetMono leading-relaxed overflow-x-auto hidden group-hover:block">
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
