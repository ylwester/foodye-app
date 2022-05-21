import React from 'react'
import { ITextProps, Text } from 'native-base'

type Props = {
  children: React.ReactChild
} & ITextProps

const DefaultText: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Text fontFamily="body" {...props}>
      {children}
    </Text>
  )
}

export default DefaultText
