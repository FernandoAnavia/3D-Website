import {useEffect, useRef} from 'react'

import ajoloteScene from '../assets/3d/QuetzalcoatlFinal1.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Ajolote = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(ajoloteScene);
  const { actions } =useAnimations (animations, ref);

  useEffect (() => {
    const actionPlayed = actions['ArmatureAction'];

    if(isRotating) {
        actionPlayed.setDuration(12.5).play();
    } else {
        actionPlayed.setDuration(25).play(); 
    }
  })

  return (
    <mesh ref={ref} position ={[-2,-1.5,0]} scale = {[.65, .65, .65]} rotation = {[.7, -.15, -0.1]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Ajolote