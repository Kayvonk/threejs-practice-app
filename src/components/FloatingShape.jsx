// /src/components/FloatingShape.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/* eslint-disable */
{/* eslint-disable-next-line react/prop-types */}
const FloatingShape = () => {
  const shapeRef = useRef(null);

  // Simple rotation and subtle vertical movement
  useFrame(({ clock }) => {
    if (shapeRef.current) {
      // Slight up-and-down movement
      shapeRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;  // Subtle movement
      shapeRef.current.rotation.x = clock.getElapsedTime() * 0.2;  // Rotation
      shapeRef.current.rotation.y = clock.getElapsedTime() * 0.2;  // Rotation
    }
  });

  return (
    <mesh ref={shapeRef}>
      {/* More segments for better detail */}
      <torusKnotGeometry args={[1.5, 0.4, 200, 32]} />  {/* Increased detail */}
      {/* Enhanced material for a glossy, shiny look */}
      <meshPhysicalMaterial 
        color="hotpink" 
        metalness={0.8} 
        roughness={0.1} 
        emissive="white"   // Glowing effect
        emissiveIntensity={0.2} 
        clearcoat={1}      // Glossy finish
        clearcoatRoughness={0.1}  // Glossiness adjustment
      />
    </mesh>
  );
};

export default FloatingShape;
