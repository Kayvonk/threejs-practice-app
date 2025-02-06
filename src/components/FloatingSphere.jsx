// /src/components/FloatingShape.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const FloatingShape = () => {
  const shapeRef = useRef(null);

  useFrame(({ clock }) => {
    if (shapeRef.current) {
      // Simple floating animation with sin
      shapeRef.current.position.y = Math.sin(clock.getElapsedTime()) * 2;
    }
  });

  return (
    <mesh ref={shapeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default FloatingShape;
