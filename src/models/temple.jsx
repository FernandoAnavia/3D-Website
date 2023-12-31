import { useRef, useEffect, Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import templeScene from '../assets/3d/pyramid.glb';
import { a } from '@react-spring/three'


export function Temple ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const templeRef = useRef();
  const {gl, viewport} = useThree();

  const { nodes, materials } = useGLTF(templeScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      
      const delta = (clientX - lastX.current) / viewport.width;
      templeRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating (true);
      templeRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.007;      
    } else if (e.key ==='ArrowRight') {
      if (!isRotating) setIsRotating (true);
      templeRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating (false);
    }
  }

  useEffect (() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  useFrame (() => {
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      templeRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = templeRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }

    }
  }) 

  return (
    <a.group ref={templeRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Land.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stones.geometry}
        material={materials.Stones}
        position={[-14.278, 0.409, -21.474]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.007"]}
        position={[0, 0, 18.465]}
        scale={[2.075, 3.499, 3.499]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Material}
        position={[15.301, -0.704, -27.502]}
        scale={[6.061, 2.212, 2.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo.geometry}
        material={materials["Material.004"]}
        position={[7.274, 6.882, 0.083]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ornament_l3.geometry}
        material={materials["Material.004"]}
        position={[-6.423, 8.995, 1.265]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.527}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ornaments_l0.geometry}
        material={materials["Material.004"]}
        position={[-10.2, -4.728, 6.016]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ornaments_l1.geometry}
        material={materials["Material.004"]}
        position={[-5.892, -2.051, 8.7]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ornaments_l2.geometry}
        material={materials["Material.004"]}
        position={[0.237, -0.317, -6.633]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={materials["Material.007"]}
        position={[-18.291, 0, 5.789]}
        scale={1.214}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves.geometry}
          material={materials["Material.006"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001.geometry}
        material={materials["Material.007"]}
        position={[23.119, 0.405, 18.808]}
        scale={0.523}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree002.geometry}
        material={materials["Material.007"]}
        position={[-9.68, 0, -16.863]}
        scale={1.214}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree003.geometry}
        material={materials["Material.007"]}
        position={[-8.089, 0, 22.133]}
        scale={0.576}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree004.geometry}
        material={materials["Material.007"]}
        position={[-9.68, 0, -16.863]}
        scale={1.214}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves003.geometry}
          material={materials["Material.006"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree005.geometry}
        material={materials["Material.007"]}
        position={[23.121, 0, -17.454]}
        scale={1.214}
      />
    </a.group>
  );
}


export default Temple;