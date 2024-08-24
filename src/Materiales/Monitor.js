import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Monitor({ color }) { // Recibir el color como prop
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Materiales/Monitor.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        {/* Asignar color personalizado al Plano usando la prop `color` */}
        <mesh
          name="Plano"
          castShadow
          receiveShadow
          geometry={nodes.Plano.geometry}
          position={[0, 1.662, 0]}
          scale={[1.96, 1, 1.153]}
        >
          <meshStandardMaterial attach="material" color={color} />
        </mesh>

        {/* Asignar color personalizado al Cubo usando la prop `color` */}
        <mesh
          name="Cubo"
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          position={[0, 1.092, 0.264]}
          scale={[0.189, 0.122, 0.298]}
        >
          <meshStandardMaterial attach="material" color={color} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/Materiales/Monitor.glb');
