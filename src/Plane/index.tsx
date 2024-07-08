import { Plane } from "@react-three/drei";

function GroundPlane() {
  return (
    <Plane
      rotation={[-Math.PI / 2, 0, 0]} // Rotate the plane to be horizontal
      position={[0, -1, 0]}
      receiveShadow // This plane should receive shadows
      args={[100, 100]} // Arguments are width and height of the plane
    >
      <meshStandardMaterial attach="material" color="white" />
    </Plane>
  );
}

export default GroundPlane;
