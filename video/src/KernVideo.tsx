import { AbsoluteFill, Sequence } from "remotion";
import { LogoReveal } from "./scenes/LogoReveal";
import { Tagline } from "./scenes/Tagline";
import { Showcase } from "./scenes/Showcase";
import { CodeSnippet } from "./scenes/CodeSnippet";
import { CallToAction } from "./scenes/CallToAction";
import "./styles.css";

export const KernVideo: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: "#000" }}>
            {/* Scene 1: Logo Reveal (0–90, 3s) */}
            <Sequence from={0} durationInFrames={90}>
                <LogoReveal />
            </Sequence>

            {/* Scene 2: Tagline + Features (90–180, 3s) */}
            <Sequence from={90} durationInFrames={90}>
                <Tagline />
            </Sequence>

            {/* Scene 3: Component Showcase (180–300, 4s) */}
            <Sequence from={180} durationInFrames={120}>
                <Showcase />
            </Sequence>

            {/* Scene 4: Code Snippet (300–390, 3s) */}
            <Sequence from={300} durationInFrames={90}>
                <CodeSnippet />
            </Sequence>

            {/* Scene 5: CTA (390–450, 2s) */}
            <Sequence from={390} durationInFrames={60}>
                <CallToAction />
            </Sequence>
        </AbsoluteFill>
    );
};
