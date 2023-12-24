/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/model/cloud.gltf 
*/

// import React from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Cloud({opacity,...props}) {
//   const { nodes } = useGLTF('/models/model/cloud.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Node.geometry}>
//         <meshStandardMaterial envMapIntensity={2} transparent opacity={opacity}/>
//         </mesh>
//     </group>
//   )
// }

// useGLTF.preload('/models/model/cloud.glb')

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud({opacity,...props}) {
  const { nodes, materials } = useGLTF('/models/model/cloud1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial envMapIntensity={2} transparent opacity={props.opacity}/>
        </mesh>
    </group>
  )
}

useGLTF.preload('/models/model/cloud.gltf')