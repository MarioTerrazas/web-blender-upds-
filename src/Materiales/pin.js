import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import { Color } from 'three';

export function Pin({ color, ...props }) {
  const { nodes, materials } = useGLTF('/Materiales/MESA DE PI9NG PONG.glb');

  useEffect(() => {
    if (materials['Material.013']) {
      materials['Material.013'].color = new Color(color);
    }
  }, [materials, color]);

  return (
    <group {...props} dispose={null}>
      <group position={[0.886, 0.496, 1.442]} scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_1.geometry}
          material={materials['Material #26']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_2.geometry}
          material={materials['Material #36']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Paletti}
        position={[0.892, 0.53, 0.702]}
        scale={[0.025, 0.078, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Paletti}
        position={[0.892, 0.53, 2.182]}
        scale={[0.025, 0.074, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box002.geometry}
        material={nodes.Box002.material}
        position={[-0.371, -0.23, 0.79]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box003.geometry}
        material={nodes.Box003.material}
        position={[2.153, -0.23, 0.79]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box004.geometry}
        material={nodes.Box004.material}
        position={[2.153, -0.23, 2.093]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box005.geometry}
        material={nodes.Box005.material}
        position={[-0.371, -0.23, 2.093]}
        scale={0.025}
      />
      <group position={[-1.107, 0.768, 0.252]} rotation={[Math.PI, 0, 3.113]} scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line004.geometry}
          material={nodes.Line004.material}
          position={[-82.365, -10.775, -99.451]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GeoSphere001.geometry}
        material={nodes.GeoSphere001.material}
        position={[0.744, 0.535, 2.73]}
        scale={[0.027, 0.025, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fileu.geometry}
        material={nodes.fileu.material}
        position={[0.905, 0.666, 1.971]}
        rotation={[1.563, 0, -1.569]}
        scale={[0.265, 1.007, 0.101]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.012']}
          position={[1.998, 0, -0.947]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3.009, 0.08, 0.022]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[1.998, 0, 0.94]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3.009, 0.08, 0.022]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.010']}
          position={[-0.79, 0, -0.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.327, 0.135, 0.014]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Materiales/MESA DE PI9NG PONG.glb');
