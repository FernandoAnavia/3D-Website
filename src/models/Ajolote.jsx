import {useEffect, useRef} from 'react'

import ajoloteScene from '../assets/3d/Quetzalcoatl1'
import { useAnimations, useGLTF } from '@react-three/drei'

const Ajolote = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(ajoloteScene);
  const { actions } =useAnimations (animations, ref);

  useEffect (() => {
    if(isRotating) {
        actions['Basic'].play();
    } else {
        actions['Standing'].play();
    }
  })

  return (
    <mesh ref={ref} position ={[-13.5,-1.0,-10.5]} scale = {[.6, .6, .6]} rotation = {[0.1,0.3, 0]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Ajolote