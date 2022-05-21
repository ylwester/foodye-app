import { TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import React from 'react'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'

const AddRecipeNavButton = ({ onPress }: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        mx={2}
        w={60}
        h={60}
        bgColor="#86BF3E"
        display="flex"
        alignItems="center"
        justifyContent="center"
        top={-15}
        borderRadius={10}
        style={{
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 3,
          shadowColor: '#000',
          shadowOpacity: 0.4
        }}>
        <Entypo color="#F4F5F5" size={42} name="plus" />
      </View>
    </TouchableOpacity>
  )
}

export default AddRecipeNavButton
