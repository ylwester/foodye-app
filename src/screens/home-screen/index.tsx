import React from 'react'
import DefaultText from '../../components/common/custom-text/index'
import {
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue
} from 'native-base'

const HomeScreen = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      bg={useColorModeValue('custom.0', 'custom.100')}
      flex={1}
      justify="center"
      align="center">
      <DefaultText fontSize={40}>Hello again</DefaultText>
      <DefaultText>{colorMode}</DefaultText>
      <Text>base text</Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Flex>
  )
}

export default HomeScreen
