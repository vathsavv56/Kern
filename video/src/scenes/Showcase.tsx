import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

interface ComponentCard {
    name: string;
    description: string;
    color: string;
    span?: number;
    dark?: boolean;
}

const components: ComponentCard[] = [
    {
        name: "Navbars",
        description: "5 responsive variants",
        color: "#171717",
        span: 2,
        dark: true,
    },
    {
        name: "Buttons",
        description: "Basic · Icon · Animated",
        color: "#2563eb",
    },
    {
        name: "Cards",
        description: "Profile · Content · Interactive",
        color: "#7c3aed",
    },
    {
        name: "Avatars",
        description: "Image · Initials · Status",
        color: "#0d9488",
    },
    {
        name: "Forms",
        description: "SearchBar · TextArea",
        color: "#F97316",
    },
    {
        name: "Spinners",
        description: "Pure CSS Animations",
        color: "#e11d48",
    },
    {
        name: "Heatmap",
        description: "GitHub Contributions",
        color: "#84cc16",
    },
];

export const Showcase: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry
    const entryOpacity = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Exit
    const exitOpacity = interpolate(frame, [100, 120], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Section heading
    const headingSpring = spring({
        frame: frame - 5,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.5 },
    });

    return (
        <AbsoluteFill
            style={{
                background: "#fafafa",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 100px",
                opacity: entryOpacity * exitOpacity,
            }}
        >
            {/* Section Label */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                    opacity: headingSpring,
                    transform: `translateY(${(1 - headingSpring) * 20}px)`,
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
                    Components
                </span>
            </div>

            {/* Heading */}
            <h2
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: -1.5,
                    color: "#171717",
                    margin: 0,
                    marginBottom: 50,
                    opacity: headingSpring,
                    transform: `translateY(${(1 - headingSpring) * 15}px)`,
                }}
            >
                Everything You Need
            </h2>

            {/* Bento Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16,
                    width: "100%",
                    maxWidth: 1200,
                }}
            >
                {components.map((comp, i) => {
                    const delay = 15 + i * 5;
                    const cardSpring = spring({
                        frame: frame - delay,
                        fps,
                        config: { damping: 13, stiffness: 110, mass: 0.4 },
                    });

                    const cardOpacity = interpolate(
                        frame,
                        [delay, delay + 10],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                    );

                    return (
                        <div
                            key={comp.name}
                            style={{
                                gridColumn: comp.span ? `span ${comp.span}` : "span 1",
                                background: comp.dark ? "#171717" : "#ffffff",
                                borderRadius: 24,
                                padding: "32px 28px",
                                border: comp.dark ? "none" : "1px solid #e5e5e5",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                minHeight: 140,
                                opacity: cardOpacity,
                                transform: `scale(${0.9 + cardSpring * 0.1}) translateY(${(1 - cardSpring) * 15
                                    }px)`,
                                boxShadow: comp.dark
                                    ? "0 8px 30px rgba(0,0,0,0.3)"
                                    : "0 2px 12px rgba(0,0,0,0.04)",
                            }}
                        >
                            {/* Color accent dot */}
                            <div
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: comp.dark ? "#fff" : comp.color,
                                    marginBottom: 20,
                                    opacity: 0.8,
                                }}
                            />

                            <div>
                                <div
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: comp.dark ? "#fff" : "#171717",
                                        marginBottom: 4,
                                    }}
                                >
                                    {comp.name}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: 11,
                                        color: comp.dark ? "rgba(255,255,255,0.4)" : "#a3a3a3",
                                        letterSpacing: 0.3,
                                    }}
                                >
                                    {comp.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};
