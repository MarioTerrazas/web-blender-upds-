import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Aire(props) {
  const { nodes, materials } = useGLTF('/Materiales/Aire Acondicionado.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[3.55, 1, 1]}
      />
    </group>
  )
}
