import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

interface Stat {
    value: number;
    suffix: string;
    label: string;
    color: string;
}

const stats: Stat[] = [
    { value: 80, suffix: "+", label: "Fonts", color: "#2563eb" },
    { value: 20, suffix: "+", label: "Components", color: "#7c3aed" },
    { value: 1, suffix: "", label: "CLI Install", color: "#0d9488" },
];

export const StatsBanner: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry
    const entryOpacity = interpolate(frame, [0, 10], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Exit
    const exitOpacity = interpolate(frame, [60, 75], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Heading spring
    const headSpring = spring({
        frame: frame - 3,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.5 },
    });

    // Gradient background shift
    const gradAngle = interpolate(frame, [0, 75], [135, 200]);

    return (
        <AbsoluteFill
            style={{
                background: `linear-gradient(${gradAngle}deg, #0a0a0a 0%, #111118 50%, #08080f 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 60,
                opacity: entryOpacity * exitOpacity,
            }}
        >
            {/* Decorative glow */}
            <div
                style={{
                    position: "absolute",
                    width: 800,
                    height: 800,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.03) 40%, transparent 70%)",
                    filter: "blur(80px)",
                    opacity: entryOpacity,
                }}
            />

            {/* Heading */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 5,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    opacity: headSpring,
                    transform: `translateY(${(1 - headSpring) * 15}px)`,
                }}
            >
                Kern by the Numbers
            </div>

            {/* Stats Row */}
            <div
                style={{
                    display: "flex",
                    gap: 80,
                    alignItems: "center",
                }}
            >
                {stats.map((stat, i) => {
                    const delay = 8 + i * 8;
                    const statSpring = spring({
                        frame: frame - delay,
                        fps,
                        config: { damping: 12, stiffness: 90, mass: 0.5 },
                    });

                    const statOpacity = interpolate(
                        frame,
                        [delay, delay + 12],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                    );

                    // Counter animation
                    const counterEnd = delay + 25;
                    const displayValue =
                        stat.value === 1
                            ? "⚡"
                            : Math.floor(
                                interpolate(
                                    frame,
                                    [delay, counterEnd],
                                    [0, stat.value],
                                    {
                                        extrapolateLeft: "clamp",
                                        extrapolateRight: "clamp",
                                    }
                                )
                            );

                    return (
                        <div
                            key={stat.label}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 12,
                                opacity: statOpacity,
                                transform: `scale(${0.8 + statSpring * 0.2}) translateY(${(1 - statSpring) * 20
                                    }px)`,
                            }}
                        >
                            {/* Number */}
                            <div
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 80,
                                    fontWeight: 700,
                                    color: "#fff",
                                    lineHeight: 1,
                                    letterSpacing: -2,
                                }}
                            >
                                {displayValue}
                                <span style={{ color: stat.color }}>
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <div
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 13,
                                    fontWeight: 500,
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.35)",
                                }}
                            >
                                {stat.label}
                            </div>

                            {/* Accent dot */}
                            <div
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: stat.color,
                                    opacity: 0.6,
                                    marginTop: 4,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Divider dots */}
            <div
                style={{
                    display: "flex",
                    gap: 8,
                    opacity: interpolate(frame, [30, 42], [0, 0.3], {
                        extrapolateRight: "clamp",
                    }),
                }}
            >
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#fff",
                        }}
                    />
                ))}
            </div>
        </AbsoluteFill>
    );
};
