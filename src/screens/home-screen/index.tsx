import React from 'react'
import DefaultText from '../../components/common/custom-text/index'
import { Flex } from 'native-base'

const HomeScreen = () => {
  return (
    <Flex flex={1} justify="center" align="center">
      <DefaultText fontSize={40}>Hello again</DefaultText>
    </Flex>
  )
}

export default HomeScreen
