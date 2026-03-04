import {
    AbsoluteFill,
    useCurrentFrame,
    interpolate,
    spring,
    useVideoConfig,
} from "remotion";

interface TechItem {
    name: string;
    color: string;
    // SVG path for simple recognizable icons
    icon: "react" | "tailwind" | "typescript";
}

const techs: TechItem[] = [
    { name: "React", color: "#61dafb", icon: "react" },
    { name: "Tailwind CSS", color: "#06b6d4", icon: "tailwind" },
    { name: "TypeScript", color: "#3178c6", icon: "typescript" },
];

const ReactIcon = ({ color, size }: { color: string; size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.5" fill={color} />
        <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
        />
        <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            transform="rotate(60 12 12)"
        />
        <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            transform="rotate(120 12 12)"
        />
    </svg>
);

const TailwindIcon = ({ color, size }: { color: string; size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
);

const TypeScriptIcon = ({ color, size }: { color: string; size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);

const getIcon = (icon: string, color: string, size: number) => {
    switch (icon) {
        case "react":
            return <ReactIcon color={color} size={size} />;
        case "tailwind":
            return <TailwindIcon color={color} size={size} />;
        case "typescript":
            return <TypeScriptIcon color={color} size={size} />;
        default:
            return null;
    }
};

export const BuiltWith: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entry
    const entryOpacity = interpolate(frame, [0, 10], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Exit
    const exitOpacity = interpolate(frame, [72, 90], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // "Built with" label
    const labelSpring = spring({
        frame: frame - 5,
        fps,
        config: { damping: 14, stiffness: 100, mass: 0.5 },
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
                gap: 50,
                opacity: entryOpacity * exitOpacity,
            }}
        >
            {/* Label */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 5,
                    textTransform: "uppercase",
                    color: "#a3a3a3",
                    opacity: labelSpring,
                    transform: `translateY(${(1 - labelSpring) * 15}px)`,
                }}
            >
                Built With
            </div>

            {/* Tech logos row */}
            <div
                style={{
                    display: "flex",
                    gap: 60,
                    alignItems: "center",
                }}
            >
                {techs.map((tech, i) => {
                    const delay = 10 + i * 10;
                    const iconSpring = spring({
                        frame: frame - delay,
                        fps,
                        config: { damping: 12, stiffness: 90, mass: 0.5 },
                    });

                    const iconOpacity = interpolate(
                        frame,
                        [delay, delay + 10],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                    );

                    // Subtle pulse scale
                    const pulsePhase = (frame - delay - 20) * 0.08;
                    const pulse =
                        frame > delay + 20
                            ? 1 + Math.sin(pulsePhase) * 0.03
                            : 1;

                    return (
                        <div
                            key={tech.name}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 20,
                                opacity: iconOpacity,
                                transform: `scale(${(0.7 + iconSpring * 0.3) * pulse
                                    }) translateY(${(1 - iconSpring) * 25}px)`,
                            }}
                        >
                            {/* Icon container */}
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 28,
                                    background: "#fff",
                                    border: `2px solid ${tech.color}20`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: `0 8px 30px ${tech.color}15`,
                                }}
                            >
                                {getIcon(tech.icon, tech.color, 48)}
                            </div>

                            {/* Name */}
                            <span
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: "#525252",
                                    letterSpacing: 0.5,
                                }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Connector line */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    opacity: interpolate(frame, [40, 55], [0, 0.4], {
                        extrapolateRight: "clamp",
                    }),
                }}
            >
                <div
                    style={{
                        width: 60,
                        height: 1,
                        background: "#d4d4d4",
                    }}
                />
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "#a3a3a3",
                        letterSpacing: 2,
                    }}
                >
                    MODERN STACK
                </span>
                <div
                    style={{
                        width: 60,
                        height: 1,
                        background: "#d4d4d4",
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};
