import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FilterScreen from '../screens/FilterScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

const Stack = createStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Categories Screen"
            // screenOptions={{
            //     headerShown: false,
            // }}
        >
            <Stack.Screen name="Categories Screen" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeal Screen" component={CategoryMealScreen} />
            <Stack.Screen name="Filter Screen" component={FilterScreen} />
            <Stack.Screen name="MealDetail Screen" component={MealDetailScreen} />
            <Stack.Screen name="Favorites Screen" component={FavoritesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack
