import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

export const LogoReveal: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Background fade from pure black
    const bgOpacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Logo scale spring
    const logoScale = spring({
        frame: frame - 10,
        fps,
        config: { damping: 12, stiffness: 80, mass: 0.8 },
    });

    // Logo opacity
    const logoOpacity = interpolate(frame, [8, 25], [0, 1], {
        extrapolateRight: "clamp",
    });

    // SVG stroke draw-on
    const strokeProgress = interpolate(frame, [10, 55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Glow pulse
    const glowOpacity = interpolate(
        frame,
        [50, 60, 70, 80],
        [0, 0.6, 0.3, 0.5],
        { extrapolateRight: "clamp" }
    );

    // Subtle gradient background shift
    const gradientAngle = interpolate(frame, [0, 105], [120, 200]);

    // Exit fade (extended for 105 frame duration)
    const exitOpacity = interpolate(frame, [85, 105], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Floating particles
    const particles = Array.from({ length: 12 }, (_, i) => {
        const speed = 0.3 + (i % 4) * 0.15;
        const xBase = 150 + (i * 147) % 1620;
        const yBase = 100 + (i * 89) % 880;
        const size = 2 + (i % 3) * 1.5;
        const particleOpacity = interpolate(
            frame,
            [10 + i * 3, 30 + i * 3],
            [0, 0.15 + (i % 3) * 0.1],
            { extrapolateRight: "clamp" }
        );
        return { xBase, yBase, speed, size, particleOpacity };
    });

    // Total stroke length for each path (approximate)
    const pathLengths = [160, 210, 100, 110];

    return (
        <AbsoluteFill
            style={{
                background: `linear-gradient(${gradientAngle}deg, #000000 0%, #0a0a1a 50%, #050510 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: exitOpacity,
            }}
        >
            {/* Floating particles */}
            {particles.map((p, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        left: p.xBase,
                        top: p.yBase - frame * p.speed,
                        width: p.size,
                        height: p.size,
                        borderRadius: "50%",
                        background: i % 2 === 0 ? "rgba(37,99,235,0.6)" : "rgba(124,58,237,0.6)",
                        opacity: p.particleOpacity * exitOpacity,
                        filter: `blur(${p.size > 3 ? 1 : 0}px)`,
                    }}
                />
            ))}

            {/* Radial glow behind logo */}
            <div
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
                    opacity: bgOpacity * glowOpacity,
                    filter: "blur(60px)",
                }}
            />

            {/* Logo SVG Container */}
            <div
                style={{
                    transform: `scale(${logoScale * 1.8})`,
                    opacity: logoOpacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <svg
                    viewBox="0 0 200 100"
                    width={500}
                    height={250}
                    style={{
                        filter: `drop-shadow(0 0 ${20 * glowOpacity}px rgba(37,99,235,0.4))`,
                    }}
                >
                    <defs>
                        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>

                    {/* K */}
                    <path
                        d="M30 30 L30 70 L50 50 L60 70"
                        stroke="url(#logoGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={pathLengths[0]}
                        strokeDashoffset={pathLengths[0] * (1 - strokeProgress)}
                    />
                    {/* e */}
                    <path
                        d="M60 70 C 70 70, 70 50, 80 50 H 95 C 105 50, 105 70, 95 70 H 80"
                        stroke="url(#logoGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={pathLengths[1]}
                        strokeDashoffset={pathLengths[1] * (1 - strokeProgress)}
                    />
                    {/* r */}
                    <path
                        d="M115 70 V 50 C 115 40, 135 40, 135 50"
                        stroke="url(#logoGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={pathLengths[2]}
                        strokeDashoffset={pathLengths[2] * (1 - strokeProgress)}
                    />
                    {/* n */}
                    <path
                        d="M150 70 V 50 C 150 40, 170 40, 170 50 V 70"
                        stroke="url(#logoGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={pathLengths[3]}
                        strokeDashoffset={pathLengths[3] * (1 - strokeProgress)}
                    />
                </svg>
            </div>

            {/* Subtle tagline under logo */}
            <div
                style={{
                    position: "absolute",
                    bottom: 340,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    letterSpacing: 6,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    opacity: interpolate(frame, [50, 65], [0, 1], {
                        extrapolateRight: "clamp",
                    }),
                    transform: `translateY(${interpolate(frame, [50, 65], [10, 0], {
                        extrapolateRight: "clamp",
                    })}px)`,
                }}
            >
                UI Component Library
            </div>
        </AbsoluteFill>
    );
};
