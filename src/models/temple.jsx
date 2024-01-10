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

      switch (true) {
        case normalizedRotation >= 0.5 && normalizedRotation <= 1.1: //5.45 & 5.85
          setCurrentStage(4);
          break;
        case normalizedRotation >= 2.5 && normalizedRotation <= 3.1:  //.85 & 1.3
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.1 && normalizedRotation <= 4.7:  //2.4 & 2.6
          setCurrentStage(2);
          break;
        case normalizedRotation >= 5.2 && normalizedRotation <= 5.8: //4.25 & 4.75
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }

    }
  }) 

  return (
    <a.group ref={templeRef} {...props}>
      <mesh>
        <directionalLight position={[-5,10,0]} intensity={7.5} color={'#46b87b '}/>
          <mesh
          castShadow
          receiveShadow
          geometry={nodes.Puente.geometry}
          material={materials["Material.007"]}
          position={[0, -7.141, 18.465]}
          scale={[2.075, 3.499, 3.499]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Terrain.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Water.geometry}
          material={materials["Material.002"]}
          position={[0, -1.659, 0]}
          scale={0.965}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stones.geometry}
          material={materials["Material.009"]}
          position={[-29.558, 3.51, 19.164]}
          rotation={[0.188, -0.259, -0.626]}
          scale={[0.662, 0.365, 0.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves005.geometry}
          material={materials["Material.012"]}
          position={[9.557, 0, 10.563]}
          rotation={[0.392, 0.138, 0.034]}
          scale={[0.311, 0.181, 0.311]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves006.geometry}
          material={materials["Material.012"]}
          position={[19.542, 0, -56.999]}
          scale={[0.885, 0.514, 0.885]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves007.geometry}
          material={materials["Material.012"]}
          position={[23.594, 0, 1.688]}
          scale={[0.387, 0.225, 0.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves008.geometry}
          material={materials["Material.012"]}
          position={[11.242, 0.875, 39.482]}
          scale={[0.387, 0.225, 0.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves009.geometry}
          material={materials["Material.012"]}
          position={[7.823, 0, -11.97]}
          scale={[0.494, 0.287, 0.494]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves010.geometry}
          material={materials["Material.012"]}
          position={[-30.758, 1.489, 16.916]}
          rotation={[0.135, 0.01, -0.168]}
          scale={[0.387, 0.225, 0.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves011.geometry}
          material={materials["Material.012"]}
          position={[-5.196, 8.696, 5.012]}
          rotation={[0.803, -0.208, 0.067]}
          scale={[0.387, 0.225, 0.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves012.geometry}
          material={materials["Material.012"]}
          position={[-4.202, -0.848, 34.075]}
          scale={[0.387, 0.225, 0.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves013.geometry}
          material={materials["Material.012"]}
          position={[3.36, 17.55, 1.549]}
          scale={[0.727, 0.422, 0.727]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ceiling.geometry}
          material={materials["Material.003"]}
          position={[0, 0.376, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={materials["Material.004"]}
          position={[7.274, 7.258, 0.083]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ornament_l3.geometry}
          material={materials["Material.004"]}
          position={[-6.423, 9.371, 1.265]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.527}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ornaments_l0.geometry}
          material={materials["Material.004"]}
          position={[-10.2, -4.352, 6.016]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ornaments_l1.geometry}
          material={materials["Material.004"]}
          position={[-5.892, -1.675, 8.7]}
          scale={0.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ornaments_l2.geometry}
          material={materials["Material.004"]}
          position={[0.237, 0.059, -6.633]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.056}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid.geometry}
          material={materials["Material.003"]}
          position={[0, 0.376, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stairs.geometry}
          material={materials["Material.003"]}
          position={[0, 0.376, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.005"]}
          position={[-1.172, 1.666, 25.007]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.801, -2.378, -2.378]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials["Material.008"]}
          position={[-23.803, 1.914, 28.226]}
          scale={[0.149, 0.174, 0.174]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.005"]}
          position={[-26.822, 0.648, 28.227]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.598, -1.774, -1.774]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.008"]}
          position={[2.874, 3.363, 25.005]}
          scale={[0.2, 0.233, 0.233]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.008"]}
          position={[8.152, 3.795, 40.871]}
          rotation={[Math.PI, -0.58, Math.PI]}
          scale={[0.121, 0.141, 0.141]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.005"]}
          position={[10.202, 2.767, 39.528]}
          rotation={[0, 0.58, -Math.PI]}
          scale={[-0.485, -1.441, -1.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials["Material.008"]}
          position={[33.933, 2.522, 23.44]}
          rotation={[0, -1.097, 0]}
          scale={[0.121, 0.141, 0.141]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.005"]}
          position={[32.817, 1.497, 21.265]}
          rotation={[-Math.PI, 1.097, 0]}
          scale={[-0.484, -1.437, -1.437]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials["Material.008"]}
          position={[-23.12, 2.952, 17.255]}
          rotation={[0, -0.558, 0]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.005"]}
          position={[-24.564, 2.238, 16.354]}
          rotation={[-Math.PI, 0.558, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials["Material.008"]}
          position={[-50.607, 2.569, 27.095]}
          scale={[0.115, 0.134, 0.134]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.005"]}
          position={[-52.94, 1.591, 27.096]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.462, -1.371, -1.371]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials["Material.008"]}
          position={[-30.81, 4.167, 48.942]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.005"]}
          position={[-32.512, 3.453, 48.942]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["Material.008"]}
          position={[39.024, 1.956, 22.82]}
          scale={[0.071, 0.083, 0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.005"]}
          position={[37.585, 1.353, 22.821]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.285, -0.846, -0.846]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials["Material.008"]}
          position={[-27.084, 4.969, -6.931]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.005"]}
          position={[-28.786, 4.255, -6.93]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials["Material.008"]}
          position={[-14.842, 4.983, -27.452]}
          rotation={[-0.004, -0.797, 0.166]}
          scale={[0.158, 0.184, 0.184]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.005"]}
          position={[-16.887, 3.127, -29.536]}
          rotation={[3.137, 0.797, -0.166]}
          scale={[-0.632, -1.875, -1.875]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials["Material.008"]}
          position={[-25.658, 4.969, -10.394]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Material.005"]}
          position={[-27.36, 4.255, -10.394]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere012.geometry}
          material={materials["Material.008"]}
          position={[22.625, 4.596, -32.258]}
          scale={[0.225, 0.262, 0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Material.005"]}
          position={[18.081, 2.69, -32.257]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.9, -2.671, -2.671]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013.geometry}
          material={materials["Material.008"]}
          position={[21.319, 2.129, -28.406]}
          rotation={[-Math.PI, 0.367, -Math.PI]}
          scale={[0.135, 0.157, 0.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Material.005"]}
          position={[23.87, 0.983, -27.427]}
          rotation={[0, -0.367, -Math.PI]}
          scale={[-0.541, -1.606, -1.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere014.geometry}
          material={materials["Material.008"]}
          position={[47.123, 1.264, -4.552]}
          scale={[0.107, 0.125, 0.125]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.005"]}
          position={[44.96, 0.357, -4.552]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.428, -1.271, -1.271]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere015.geometry}
          material={materials["Material.008"]}
          position={[41.078, 1.8, -29.329]}
          rotation={[-Math.PI, 1.483, -Math.PI]}
          scale={[0.166, 0.193, 0.193]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["Material.005"]}
          position={[41.373, 0.396, -25.992]}
          rotation={[0, -1.483, -Math.PI]}
          scale={[-0.663, -1.968, -1.968]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere016.geometry}
          material={materials["Material.008"]}
          position={[33.493, 1.798, 41.485]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Material.005"]}
          position={[31.791, 1.085, 41.486]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere017.geometry}
          material={materials["Material.008"]}
          position={[33.493, 1.798, 41.485]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.005"]}
          position={[31.791, 1.085, 41.486]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere018.geometry}
          material={materials["Material.008"]}
          position={[-38.294, 6.25, -14.323]}
          rotation={[-0.083, 0, 0]}
          scale={[0.155, 0.18, 0.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Material.005"]}
          position={[-41.428, 4.94, -14.212]}
          rotation={[3.058, 0, 0]}
          scale={[-0.621, -1.842, -1.842]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere019.geometry}
          material={materials["Material.008"]}
          position={[-26.209, 1.798, -43.722]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Material.005"]}
          position={[-27.91, 1.085, -43.721]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere020.geometry}
          material={materials["Material.008"]}
          position={[-46.235, 5.268, -17.65]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["Material.005"]}
          position={[-38.6, 5.558, 13.891]}
          rotation={[-2.99, -1.028, 0.082]}
          scale={[-0.517, -1.536, -1.536]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021.geometry}
          material={materials["Material.008"]}
          position={[-37.209, 6.775, 11.744]}
          rotation={[0.152, 1.028, -0.082]}
          scale={[0.129, 0.15, 0.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["Material.005"]}
          position={[-40.052, 3.808, -8.922]}
          rotation={[2.834, 1.293, 0.297]}
          scale={[-0.472, -1.401, -1.401]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere022.geometry}
          material={materials["Material.008"]}
          position={[-39.345, 4.805, -6.644]}
          rotation={[-0.308, -1.293, -0.297]}
          scale={[0.118, 0.137, 0.137]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials["Material.005"]}
          position={[-47.937, 4.555, -17.649]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere023.geometry}
          material={materials["Material.008"]}
          position={[-40.632, 4.183, -4.414]}
          rotation={[-0.083, 0, 0]}
          scale={[0.084, 0.098, 0.098]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Material.005"]}
          position={[-42.334, 3.472, -4.354]}
          rotation={[3.058, 0, 0]}
          scale={[-0.337, -1, -1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere024.geometry}
          material={materials["Material.008"]}
          position={[-35.404, 3.166, -10.675]}
          rotation={[-0.083, 0, 0]}
          scale={[0.078, 0.091, 0.091]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.005"]}
          position={[-9.048, 1.212, -12.698]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.203, -0.602, -0.602]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Material.005"]}
          position={[-36.98, 2.508, -10.62]}
          rotation={[3.058, 0, 0]}
          scale={[-0.312, -0.926, -0.926]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere026.geometry}
          material={materials["Material.008"]}
          position={[-33.704, 4.835, -24.546]}
          rotation={[1.997, 0.886, -2.146]}
          scale={[0.113, 0.132, 0.132]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["Material.005"]}
          position={[-12.352, 2.069, -10.838]}
          rotation={[Math.PI, -0.322, 0]}
          scale={[-0.475, -1.408, -1.408]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere027.geometry}
          material={materials["Material.008"]}
          position={[-10.079, 3.074, -11.597]}
          rotation={[0, 0.322, 0]}
          scale={[0.119, 0.138, 0.138]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials["Material.005"]}
          position={[-33.426, 4.135, -22.186]}
          rotation={[-1.145, -0.886, 2.146]}
          scale={[-0.453, -1.343, -1.343]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree.geometry}
          material={materials["Material.007"]}
          position={[-30.792, 0, -58.985]}
          scale={1.587}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves001.geometry}
            material={materials["Material.011"]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree001.geometry}
          material={materials["Material.007"]}
          position={[11.413, -0.902, -9.458]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree002.geometry}
          material={materials["Material.007"]}
          position={[5.401, -0.902, -11.757]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree003.geometry}
          material={materials["Material.007"]}
          position={[-15.743, -0.902, 10.851]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004.geometry}
          material={materials["Material.007"]}
          position={[-32.56, 3.107, -13.008]}
          scale={0.395}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree005.geometry}
          material={materials["Material.007"]}
          position={[0.729, -0.436, -29.962]}
          scale={0.531}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree006.geometry}
          material={materials["Material.007"]}
          position={[21.094, -0.306, -1.205]}
          scale={0.282}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree007.geometry}
          material={materials["Material.007"]}
          position={[-27.822, -0.902, 16.891]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree008.geometry}
          material={materials["Material.007"]}
          position={[-43.013, 1.758, 16.159]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree009.geometry}
          material={materials["Material.007"]}
          position={[-4.762, -0.902, 33.362]}
          scale={0.503}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree010.geometry}
          material={materials["Material.007"]}
          position={[-28.392, 3.107, -16.17]}
          scale={0.395}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree011.geometry}
          material={materials["Material.007"]}
          position={[51.242, -0.902, 18.538]}
          scale={0.741}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree012.geometry}
          material={materials["Material.007"]}
          position={[57.238, -0.443, 2.541]}
          scale={2.282}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves002.geometry}
            material={materials["Material.011"]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree013.geometry}
          material={materials["Material.007"]}
          position={[-50.178, 2.855, 5.656]}
          scale={0.943}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves003.geometry}
            material={materials["Material.011"]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree014.geometry}
          material={materials["Material.007"]}
          position={[-17.804, -0.625, 53.274]}
          rotation={[-0.373, 0.007, -0.109]}
          scale={1.024}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves004.geometry}
            material={materials["Material.011"]}
          />
        </mesh>
      </mesh>
    </a.group>
  );
}


export default Temple;