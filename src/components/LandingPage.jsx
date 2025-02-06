// /src/components/LandingPage.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";  // Ensure OrbitControls is imported here
import FloatingShape from "./FloatingShape";
/* eslint-disable */
{/* eslint-disable-next-line react/prop-types */}
const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Wooow ^^</h1>

      <Canvas style={{ height: "100vh" }} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        {/* Additional lighting for better definition */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
        />
        <spotLight 
          position={[0, 5, 5]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow
        />
        <FloatingShape />
        <OrbitControls enableZoom={false} /> {/* OrbitControls will work now */}
      </Canvas>
    </div>
  );
};

export default LandingPage;
