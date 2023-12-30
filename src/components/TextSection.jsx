import React from 'react'
import { Text } from '@react-three/drei'
import { fadeOnBeforeCompileFlat } from './utils/fadeMaterial'


const TextSection = ({ title, subtitle, title2, ...props }) => {
  return (
    <>
      <group {...props}>
        {!!title && (
          <Text
            color="white"
            anchorX={"left"}
            anchorY="bottom" //middle
            fontSize={0.52}
            maxWidth={3}
            lineHeight={1}
            font={"./fonts/DMSerifDisplay-Regular.ttf"}
          >
            {title}
            <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat}/>
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
          <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat}/>
        </Text>
        <Text
            color="white"
            anchorX={"right"}
            anchorY="top" //middle
            fontSize={0.52}
            maxWidth={3.5}
            lineHeight={1}
            font={"./fonts/DMSerifDisplay-Regular.ttf"}
          >
            {title2}
            <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat}/>
          </Text>
      </group>
    </>
  )
}

export default TextSection
