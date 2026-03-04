import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

const CODE_LINE_1 = `npx shadcn@latest add \\`;
const CODE_LINE_2 = `  https://kern-sigma.vercel.app/r/button5.json`;

export const CodeSnippet: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Terminal window spring
    const windowSpring = spring({
        frame: frame - 3,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.5 },
    });

    const windowOpacity = interpolate(frame, [3, 15], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Typing effect for line 1 — starts at frame 15
    const line1Chars = Math.floor(
        interpolate(frame, [15, 45], [0, CODE_LINE_1.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );

    // Typing effect for line 2 — starts at frame 48
    const line2Chars = Math.floor(
        interpolate(frame, [48, 75], [0, CODE_LINE_2.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );

    // Cursor blink
    const cursorVisible = Math.floor(frame / 8) % 2 === 0;

    // Success checkmark appears at frame 78
    const checkOpacity = interpolate(frame, [78, 85], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Exit fade
    const exitOpacity = interpolate(frame, [80, 90], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Determine which line the cursor is on
    const showLine2 = frame >= 48;
    const typingDone = frame >= 75;

    return (
        <AbsoluteFill
            style={{
                background:
                    "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
                opacity: exitOpacity,
            }}
        >
            {/* Label */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    opacity: windowOpacity,
                    transform: `translateY(${(1 - windowSpring) * 15}px)`,
                }}
            >
                One Command Install
            </div>

            {/* Terminal Window */}
            <div
                style={{
                    width: 900,
                    background: "#1a1a1a",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid #2a2a2a",
                    boxShadow:
                        "0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.05)",
                    opacity: windowOpacity,
                    transform: `scale(${0.92 + windowSpring * 0.08}) translateY(${(1 - windowSpring) * 20
                        }px)`,
                }}
            >
                {/* Title bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "16px 20px",
                        borderBottom: "1px solid #222",
                    }}
                >
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: "#3b3b3b",
                        }}
                    />
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: "#3b3b3b",
                        }}
                    />
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: "#3b3b3b",
                        }}
                    />
                    <span
                        style={{
                            marginLeft: 12,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            color: "#555",
                        }}
                    >
                        terminal
                    </span>
                </div>

                {/* Terminal body */}
                <div
                    style={{
                        padding: "28px 30px",
                        minHeight: 120,
                    }}
                >
                    {/* Prompt + Line 1 */}
                    <div
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 16,
                            lineHeight: 1.8,
                            display: "flex",
                        }}
                    >
                        <span style={{ color: "#2563eb", marginRight: 10 }}>❯</span>
                        <span style={{ color: "#e5e5e5" }}>
                            {CODE_LINE_1.slice(0, line1Chars)}
                        </span>
                        {!showLine2 && cursorVisible && (
                            <span
                                style={{
                                    display: "inline-block",
                                    width: 10,
                                    height: 20,
                                    background: "#2563eb",
                                    marginLeft: 2,
                                    borderRadius: 2,
                                }}
                            />
                        )}
                    </div>

                    {/* Line 2 */}
                    {showLine2 && (
                        <div
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 16,
                                lineHeight: 1.8,
                                display: "flex",
                            }}
                        >
                            <span style={{ color: "transparent", marginRight: 10 }}>❯</span>
                            <span style={{ color: "#7c3aed" }}>
                                {CODE_LINE_2.slice(0, line2Chars)}
                            </span>
                            {!typingDone && cursorVisible && (
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: 10,
                                        height: 20,
                                        background: "#7c3aed",
                                        marginLeft: 2,
                                        borderRadius: 2,
                                    }}
                                />
                            )}
                        </div>
                    )}

                    {/* Success message */}
                    {typingDone && (
                        <div
                            style={{
                                marginTop: 16,
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 14,
                                color: "#22c55e",
                                opacity: checkOpacity,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <span>✓</span>
                            <span>Component installed successfully</span>
                        </div>
                    )}
                </div>
            </div>
        </AbsoluteFill>
    );
};
