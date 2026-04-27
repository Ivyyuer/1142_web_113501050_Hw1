"use client"
import Grainient from "../components/Grainient";
    export default function FullBackground() {
        return (
            <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden">
          <Grainient
            color1="#f5a045"
            color2="#eeff6c"
            color3="#3bf2e2"
            timeSpeed={0.3}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2.5}
            warpAmplitude={47}
            blendAngle={0}
            blendSoftness={0.61}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        );
    }