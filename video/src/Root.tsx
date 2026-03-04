import { Composition } from "remotion";
import { KernVideo } from "./KernVideo";

export const Root: React.FC = () => {
    return (
        <>
            <Composition
                id="KernVideo"
                component={KernVideo}
                durationInFrames={780}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
