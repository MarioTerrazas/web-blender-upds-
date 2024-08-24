import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Panel(props) {
  const { nodes, materials } = useGLTF('/Materiales/Panel.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          scale={[1, 1, 8.712]}
        />
      </group>
    </group>
  )
}



useGLTF.preload('/Materiales/Panel.glb')
