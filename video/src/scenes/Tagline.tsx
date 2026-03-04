import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

const features = [
    { label: "20+ Components", color: "#2563eb" },
    { label: "Tailwind Native", color: "#0d9488" },
    { label: "Shadcn CLI", color: "#7c3aed" },
];

export const Tagline: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry fade
    const entryOpacity = interpolate(frame, [0, 12], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Main heading spring
    const headingY = spring({
        frame: frame - 5,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.6 },
    });

    const headingOpacity = interpolate(frame, [5, 20], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Subheading
    const subOpacity = interpolate(frame, [18, 32], [0, 1], {
        extrapolateRight: "clamp",
    });
    const subY = interpolate(frame, [18, 32], [20, 0], {
        extrapolateRight: "clamp",
    });

    // Exit fade
    const exitOpacity = interpolate(frame, [75, 90], [1, 0], {
        extrapolateLeft: "clamp",
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
            {/* Decorative dots */}
            <div
                style={{
                    position: "absolute",
                    top: 60,
                    left: 80,
                    display: "flex",
                    gap: 8,
                }}
            >
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: i === 0 ? "#e5e5e5" : "transparent",
                            border: "1.5px solid #d4d4d4",
                        }}
                    />
                ))}
            </div>

            {/* Main Heading */}
            <div
                style={{
                    textAlign: "center",
                    transform: `translateY(${(1 - headingY) * 40}px)`,
                    opacity: headingOpacity,
                }}
            >
                <h1
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 72,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: -2,
                        background:
                            "linear-gradient(135deg, #171717 0%, #404040 50%, #525252 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        margin: 0,
                        padding: "0 120px",
                    }}
                >
                    Craft Beautiful
                    <br />
                    React Experiences
                </h1>
            </div>

            {/* Subtitle */}
            <p
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#737373",
                    maxWidth: 600,
                    textAlign: "center",
                    lineHeight: 1.6,
                    opacity: subOpacity,
                    transform: `translateY(${subY}px)`,
                    margin: 0,
                }}
            >
                Elegantly designed components and hand-picked fonts for your next
                project
            </p>

            {/* Feature pills */}
            <div
                style={{
                    display: "flex",
                    gap: 16,
                    marginTop: 10,
                }}
            >
                {features.map((feat, i) => {
                    const pillSpring = spring({
                        frame: frame - 30 - i * 6,
                        fps,
                        config: { damping: 12, stiffness: 120, mass: 0.5 },
                    });

                    const pillOpacity = interpolate(
                        frame,
                        [30 + i * 6, 38 + i * 6],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                    );

                    return (
                        <div
                            key={feat.label}
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 13,
                                fontWeight: 500,
                                letterSpacing: 0.5,
                                padding: "10px 22px",
                                borderRadius: 50,
                                background: "#fff",
                                border: `1.5px solid ${feat.color}22`,
                                color: feat.color,
                                boxShadow: `0 2px 12px ${feat.color}10`,
                                opacity: pillOpacity,
                                transform: `translateY(${(1 - pillSpring) * 25}px)`,
                            }}
                        >
                            {feat.label}
                        </div>
                    );
                })}
            </div>

            {/* Bottom accent line */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
                    opacity: interpolate(frame, [40, 55], [0, 0.5], {
                        extrapolateRight: "clamp",
                    }),
                }}
            />
        </AbsoluteFill>
    );
};
