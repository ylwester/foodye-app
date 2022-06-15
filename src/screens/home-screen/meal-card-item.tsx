import { Flex, Image } from 'native-base'
import { ImageSourcePropType } from 'react-native'
import DefaultText from '../../components/common/custom-text/index'
import React from 'react'

type Props = {
  name: string
  pictureUrl: string
}

const MealCardItem = ({ name, pictureUrl }: Props) => {
  return (
    <Flex
      flex={1}
      margin={2}
      borderStyle={'solid'}
      borderRadius={10}
      borderWidth={1}
      shadow={4}
      borderColor={'gray.300'}
      backgroundColor="white"
      align="center">
      <Image
        height="80px"
        borderTopRadius={10}
        width="full"
        source={pictureUrl as ImageSourcePropType}
        alt="Breakfast"
      />
      <DefaultText paddingY={1}>{name}</DefaultText>
    </Flex>
  )
}

export default MealCardItem
