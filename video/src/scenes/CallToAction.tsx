import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

export const CallToAction: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry
    const entryOpacity = interpolate(frame, [0, 10], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Logo spring
    const logoSpring = spring({
        frame: frame - 3,
        fps,
        config: { damping: 12, stiffness: 100, mass: 0.5 },
    });

    // URL spring
    const urlSpring = spring({
        frame: frame - 12,
        fps,
        config: { damping: 14, stiffness: 120, mass: 0.4 },
    });

    // GitHub spring
    const githubSpring = spring({
        frame: frame - 20,
        fps,
        config: { damping: 14, stiffness: 120, mass: 0.4 },
    });

    // Open source tagline spring
    const taglineSpring = spring({
        frame: frame - 28,
        fps,
        config: { damping: 14, stiffness: 120, mass: 0.4 },
    });

    // Final fade out (extended for 75 frame duration)
    const exitOpacity = interpolate(frame, [58, 75], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 40,
                opacity: entryOpacity * exitOpacity,
            }}
        >
            {/* Small Kern logo */}
            <div
                style={{
                    opacity: logoSpring,
                    transform: `scale(${logoSpring})`,
                }}
            >
                <svg viewBox="0 0 200 100" width={180} height={90}>
                    <defs>
                        <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M30 30 L30 70 L50 50 L60 70"
                        stroke="url(#ctaGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M60 70 C 70 70, 70 50, 80 50 H 95 C 105 50, 105 70, 95 70 H 80"
                        stroke="url(#ctaGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M115 70 V 50 C 115 40, 135 40, 135 50"
                        stroke="url(#ctaGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M150 70 V 50 C 150 40, 170 40, 170 50 V 70"
                        stroke="url(#ctaGrad)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Website URL */}
            <div
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 36,
                    fontWeight: 600,
                    letterSpacing: -0.5,
                    color: "#fff",
                    opacity: urlSpring,
                    transform: `translateY(${(1 - urlSpring) * 20}px)`,
                }}
            >
                kern-sigma.vercel.app
            </div>

            {/* GitHub link */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                    opacity: githubSpring,
                    transform: `translateY(${(1 - githubSpring) * 15}px)`,
                }}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,0.4)"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>github.com/vathsavv56/Kern</span>
            </div>

            {/* Open Source tagline */}
            <div
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: 3,
                    color: "rgba(255,255,255,0.2)",
                    opacity: taglineSpring,
                    transform: `translateY(${(1 - taglineSpring) * 12}px)`,
                }}
            >
                Open Source · Free Forever
            </div>

            {/* Subtle bottom gradient line */}
            <div
                style={{
                    position: "absolute",
                    bottom: 80,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 200,
                    height: 1,
                    background:
                        "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(124,58,237,0.4), transparent)",
                    opacity: githubSpring * 0.6,
                }}
            />
        </AbsoluteFill>
    );
};
