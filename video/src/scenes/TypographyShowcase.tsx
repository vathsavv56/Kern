import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

const fonts = [
    { name: "Poppins", family: "'Poppins', sans-serif", weight: 700 },
    { name: "Playfair Display", family: "Georgia, 'Times New Roman', serif", weight: 400, italic: true },
    { name: "JetBrains Mono", family: "'JetBrains Mono', monospace", weight: 500 },
];

export const TypographyShowcase: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry
    const entryOpacity = interpolate(frame, [0, 12], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Exit
    const exitOpacity = interpolate(frame, [100, 120], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Section label spring
    const labelSpring = spring({
        frame: frame - 3,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.5 },
    });

    // Big "Aa" spring
    const aaSpring = spring({
        frame: frame - 8,
        fps,
        config: { damping: 12, stiffness: 80, mass: 0.6 },
    });

    // Font cycling — each font gets ~33 frames of display
    const cycleDuration = 33;
    const cycleStart = 20;
    const activeFontIndex = Math.min(
        Math.floor(
            interpolate(frame, [cycleStart, cycleStart + cycleDuration * 3], [0, 3], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
            })
        ),
        2
    );

    // Pill badge spring
    const pillSpring = spring({
        frame: frame - 15,
        fps,
        config: { damping: 12, stiffness: 120, mass: 0.4 },
    });

    // Decorative line width
    const lineWidth = interpolate(frame, [5, 40], [0, 400], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background:
                    "linear-gradient(180deg, #fafafa 0%, #f5f5f5 50%, #efefef 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 40,
                opacity: entryOpacity * exitOpacity,
            }}
        >
            {/* Section Label */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    opacity: labelSpring,
                    transform: `translateY(${(1 - labelSpring) * 20}px)`,
                }}
            >
                <div
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#171717",
                    }}
                />
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#171717",
                    }}
                >
                    Typography
                </span>
            </div>

            {/* Big Aa specimen */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 20,
                    opacity: aaSpring,
                    transform: `scale(${0.85 + aaSpring * 0.15})`,
                }}
            >
                <div
                    style={{
                        fontSize: 180,
                        fontWeight: fonts[activeFontIndex].weight,
                        fontFamily: fonts[activeFontIndex].family,
                        fontStyle: fonts[activeFontIndex].italic
                            ? "italic"
                            : "normal",
                        color: "#171717",
                        lineHeight: 1,
                        letterSpacing: -4,
                    }}
                >
                    Aa
                </div>

                {/* Decorative line */}
                <div
                    style={{
                        width: lineWidth,
                        height: 2,
                        background:
                            "linear-gradient(90deg, transparent, #d4d4d4, transparent)",
                    }}
                />
            </div>

            {/* Font name pills */}
            <div
                style={{
                    display: "flex",
                    gap: 16,
                    opacity: pillSpring,
                    transform: `translateY(${(1 - pillSpring) * 20}px)`,
                }}
            >
                {fonts.map((font, i) => {
                    const isActive = i === activeFontIndex;
                    return (
                        <div
                            key={font.name}
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 13,
                                fontWeight: 500,
                                letterSpacing: 0.5,
                                padding: "10px 24px",
                                borderRadius: 50,
                                background: isActive ? "#171717" : "#fff",
                                color: isActive ? "#fff" : "#a3a3a3",
                                border: isActive
                                    ? "1.5px solid #171717"
                                    : "1.5px solid #e5e5e5",
                                transition: "all 0.3s",
                                boxShadow: isActive
                                    ? "0 4px 20px rgba(0,0,0,0.15)"
                                    : "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        >
                            {font.name}
                        </div>
                    );
                })}
            </div>

            {/* 80+ Fonts badge */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1,
                    color: "#737373",
                    padding: "8px 20px",
                    borderRadius: 50,
                    background: "#fff",
                    border: "1px solid #e5e5e5",
                    opacity: interpolate(frame, [35, 48], [0, 1], {
                        extrapolateRight: "clamp",
                    }),
                    transform: `translateY(${interpolate(
                        frame,
                        [35, 48],
                        [12, 0],
                        { extrapolateRight: "clamp" }
                    )}px)`,
                }}
            >
                80+ Hand-Picked Fonts
            </div>

            {/* Bottom accent line */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                        "linear-gradient(90deg, #171717, #525252, #171717)",
                    opacity: interpolate(frame, [40, 55], [0, 0.3], {
                        extrapolateRight: "clamp",
                    }),
                }}
            />
        </AbsoluteFill>
    );
};
