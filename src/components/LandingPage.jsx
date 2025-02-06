// /src/components/LandingPage.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';  // Ensure OrbitControls is imported here
import FloatingShape from './FloatingSphere';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Amazing Website</h1>
      <p>Your description goes here</p>
      <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <FloatingShape />
        <OrbitControls enableZoom={false} />  {/* OrbitControls will work now */}
      </Canvas>
    </div>
  );
};

export default LandingPage;
