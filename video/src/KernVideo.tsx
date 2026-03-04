import { AbsoluteFill, Sequence } from "remotion";
import { LogoReveal } from "./scenes/LogoReveal";
import { Tagline } from "./scenes/Tagline";
import { TypographyShowcase } from "./scenes/TypographyShowcase";
import { Showcase } from "./scenes/Showcase";
import { StatsBanner } from "./scenes/StatsBanner";
import { CodeSnippet } from "./scenes/CodeSnippet";
import { BuiltWith } from "./scenes/BuiltWith";
import { CallToAction } from "./scenes/CallToAction";
import "./styles.css";

export const KernVideo: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: "#000" }}>
            {/* Scene 1: Logo Reveal (0–105, 3.5s) */}
            <Sequence from={0} durationInFrames={105}>
                <LogoReveal />
            </Sequence>

            {/* Scene 2: Tagline + Features (105–195, 3s) */}
            <Sequence from={105} durationInFrames={90}>
                <Tagline />
            </Sequence>

            {/* Scene 3: Typography Showcase (195–315, 4s) */}
            <Sequence from={195} durationInFrames={120}>
                <TypographyShowcase />
            </Sequence>

            {/* Scene 4: Component Showcase (315–435, 4s) */}
            <Sequence from={315} durationInFrames={120}>
                <Showcase />
            </Sequence>

            {/* Scene 5: Stats Banner (435–510, 2.5s) */}
            <Sequence from={435} durationInFrames={75}>
                <StatsBanner />
            </Sequence>

            {/* Scene 6: Code Snippet (510–615, 3.5s) */}
            <Sequence from={510} durationInFrames={105}>
                <CodeSnippet />
            </Sequence>

            {/* Scene 7: Built With (615–705, 3s) */}
            <Sequence from={615} durationInFrames={90}>
                <BuiltWith />
            </Sequence>

            {/* Scene 8: CTA (705–780, 2.5s) */}
            <Sequence from={705} durationInFrames={75}>
                <CallToAction />
            </Sequence>
        </AbsoluteFill>
    );
};
