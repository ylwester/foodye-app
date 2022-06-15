import React from 'react'
import DefaultText from '../../components/common/custom-text/index'
import { Box, Flex, useColorModeValue } from 'native-base'
import HomeHeader from '../../components/home-screen-header/index'
import { FlatList } from 'react-native'
import MealCardItem from './meal-card-item'

const meals = [
  {
    name: 'Śniadanie',
    pictureUrl: require('@assets/meals/breakfast.jpeg')
  },
  { name: 'Obiad', pictureUrl: require('@assets/meals/dinner.jpeg') },
  { name: 'Lunch', pictureUrl: require('@assets/meals/lunch.jpeg') },
  { name: 'Kolacja', pictureUrl: require('@assets/meals/latedinner.jpeg') }
]

const HomeScreen = () => {
  return (
    <Box
      safeArea
      display="flex"
      flex={1}
      px={3}
      width="full"
      bg={useColorModeValue('custom.0', 'custom.100')}>
      <Box>
        <HomeHeader title="Cześć, Sylwo" />
      </Box>
      <Box pt={2}>
        <DefaultText fontSize={18} fontWeight="semibold">
          Wybierz posiłek
        </DefaultText>
        <Flex flexDir="row" w="100%" px={1}>
          <FlatList
            numColumns={2}
            data={meals}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <MealCardItem name={item.name} pictureUrl={item.pictureUrl} />
            )}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default HomeScreen
