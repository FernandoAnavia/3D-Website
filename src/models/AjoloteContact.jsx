import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3d/Ajolote.glb'

const AjoloteContact = ({currentAnimation, ...props}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect (() => {
    Object.values(actions).forEach((action) => action.stop());

    if(actions[currentAnimation]) {
        actions[currentAnimation].play();
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="GPencil" />
        <group
          name="Armature"
          position={[-0.19, -2.434, -2.143]}
          rotation={[-0.465, 0, 0]}
        >
          <group name="Circle">
            <skinnedMesh
              name="Circle001"
              geometry={nodes.Circle001.geometry}
              material={materials.Body}
              skeleton={nodes.Circle001.skeleton}
            />
            <skinnedMesh
              name="Circle001_1"
              geometry={nodes.Circle001_1.geometry}
              material={materials.Mouth}
              skeleton={nodes.Circle001_1.skeleton}
            />
            <skinnedMesh
              name="Circle001_2"
              geometry={nodes.Circle001_2.geometry}
              material={materials.Gills}
              skeleton={nodes.Circle001_2.skeleton}
            />
            <skinnedMesh
              name="Circle001_3"
              geometry={nodes.Circle001_3.geometry}
              material={materials.Fin}
              skeleton={nodes.Circle001_3.skeleton}
            />
            <skinnedMesh
              name="Circle001_4"
              geometry={nodes.Circle001_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Circle001_4.skeleton}
            />
          </group>
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  );
}

export default AjoloteContact
