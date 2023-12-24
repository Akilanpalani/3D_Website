import React from 'react'
import { Text } from '@react-three/drei'

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
        </Text>
      </group>
    </>
  )
}

export default TextSection
