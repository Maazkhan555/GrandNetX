import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={4} color={"#ffffff"} />
      <directionalLight position={[5, -2, -5]} intensity={1} color={"#aaaaaa"} />
      <group rotation={[0, -0.5, 0]}>
        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
