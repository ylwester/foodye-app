import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home-screen/index'
import RecipesScreen from '../../screens/recipes-screen/index'
import Icon from 'react-native-vector-icons/Ionicons'
import AddRecipeNavButton from './add-recipe-nav-button'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarLabelStyle: {
            fontFamily: 'Poppins_400Regular'
          }
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="ios-home-outline" size={24} />
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{
            tabBarIcon: () => <Icon name="restaurant-outline" size={24} />
          }}
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
          options={{
            tabBarIcon: () => <Icon name="ios-search" size={24} />
          }}
          name="Browse"
          component={RecipesScreen}
        />
        <Tab.Screen
          name="Profile"
          component={RecipesScreen}
          options={{
            tabBarIcon: () => <Icon name="person-outline" size={24} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation
