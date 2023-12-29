import React from 'react'
import { Text } from '@react-three/drei'
<<<<<<< HEAD
import { fadeOnBeforeCompileFlat } from './utils/fadeMaterial'

=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5

const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <>
      <group {...props}>
        {!!title && (
          <Text
            color="white"
            anchorX={"left"}
            anchorY="bottom" //middle
            fontSize={0.52}
            maxWidth={2.5}
            lineHeight={1}
          >
            {title}
<<<<<<< HEAD
            <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat}/>
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
          </Text>
        )}
        <Text
          color="white"
          fontSize={0.2}
          anchorX={"left"}
          anchorY="top"
          maxWidth={2.5}
        >
          {subtitle}
<<<<<<< HEAD
          <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat}/>
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
        </Text>
      </group>
    </>
  )
}

export default TextSection
