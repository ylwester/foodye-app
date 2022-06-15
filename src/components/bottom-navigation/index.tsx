import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home-screen/index'
import RecipesScreen from '../../screens/recipes-screen/index'
import Icon from 'react-native-vector-icons/Ionicons'
import AddRecipeNavButton from './add-recipe-nav-button'
import { useColorMode, useToken } from 'native-base'
import DefaultText from '../common/custom-text/index'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  const { colorMode } = useColorMode()
  const [custom0, custom100, custom20, custom50, gray300] = useToken('colors', [
    'custom.0',
    'custom.100',
    'custom.20',
    'custom.50',
    'gray.300'
  ])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarLabelStyle: {
            fontFamily: 'Poppins_400Regular',
            color: colorMode === 'dark' ? custom20 : custom100
          },
          tabBarStyle: {
            borderTopColor: colorMode === 'dark' ? custom50 : gray300,
            backgroundColor: colorMode === 'dark' ? custom100 : custom0
          }
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <DefaultText
                fontWeight={focused ? 'semibold' : 'normal'}
                fontSize={11}>
                {route.name}
              </DefaultText>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                color={colorMode === 'dark' ? custom20 : custom100}
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={24}
              />
            )
          })}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <DefaultText
                fontWeight={focused ? 'semibold' : 'normal'}
                fontSize={11}>
                {route.name}
              </DefaultText>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                color={colorMode === 'dark' ? custom20 : custom100}
                name={focused ? 'restaurant' : 'restaurant-outline'}
                size={24}
              />
            )
          })}
        />
        <Tab.Screen
          name="Add"
          component={RecipesScreen}
          options={{
            tabBarLabel: '',
            tabBarButton: (props) => <AddRecipeNavButton {...props} />
          }}
        />
        <Tab.Screen
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <DefaultText
                fontWeight={focused ? 'semibold' : 'normal'}
                fontSize={11}>
                {route.name}
              </DefaultText>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                color={colorMode === 'dark' ? custom20 : custom100}
                name={focused ? 'ios-search' : 'ios-search-outline'}
                size={24}
              />
            )
          })}
          name="Browse"
          component={RecipesScreen}
        />
        <Tab.Screen
          name="Profile"
          component={RecipesScreen}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <DefaultText
                fontWeight={focused ? 'semibold' : 'normal'}
                fontSize={11}>
                {route.name}
              </DefaultText>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                color={colorMode === 'dark' ? custom20 : custom100}
                name={focused ? 'ios-person' : 'person-outline'}
                size={24}
              />
            )
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation
