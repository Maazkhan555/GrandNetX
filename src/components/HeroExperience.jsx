import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Boy } from "./models/Boy";

const HeroExperience = () => {
  return (
    <div style={{ width: "100%", height: "100%", willChange: "transform" }}>
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight />
        <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
        <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />
        <Suspense fallback={null}>
          <group>
            <Boy scale={9} position={[0, -15, 0]} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
