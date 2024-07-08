import React, { useState } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Sphere } from "@react-three/drei"; // 'drei' provides abstractions like <Box> etc.
import GroundPlane from "../Plane";
import * as THREE from "three";

function RotatingBox() {
  const ref = React.useRef();
  const [color, setColor] = useState(new THREE.Color(0x0000ff)); // Initial color blue

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;

    // Change color over time
    const hue = (color.getHSL({}).h + delta * 0.1) % 1; // Increment hue based on time
    const newColor = new THREE.Color().setHSL(hue, 0.5, 0.5); // Set saturation and lightness
    setColor(newColor);
  });
  return (
    <Box ref={ref} position={[0, 0, 0]} scale={0.5} castShadow receiveShadow>
      <meshStandardMaterial
        attach="material"
        metalness={2}
        color={color}
        roughness={0}
      />
    </Box>
  );
}

function Cube() {
  return (
    <Canvas className="canvas" shadows>
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Physics>
        <RotatingBox />
      </Physics>
      <GroundPlane />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
}

export default Cube;
