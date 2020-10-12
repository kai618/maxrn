<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FilterScreen from '../screens/FilterScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
=======
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import React from 'react'
import { ScreenNames } from '../commons/Route'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
>>>>>>> c1b70f5ac7f076231c584e2ad5863f8d93e8eccb

const Stack = createStackNavigator()

const AppStack = () => (
    <NavigationContainer>
<<<<<<< HEAD
        <Stack.Navigator>
            <Stack.Screen
                name="Categories Screen"
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="CategoryMeal Screen"
                component={CategoryMealScreen}
            />
            <Stack.Screen name="Filter Screen" component={FilterScreen} />
            <Stack.Screen
                name="MealDetail Screen"
                component={MealDetailScreen}
            />
            <Stack.Screen name="Favorites Screen" component={FavoritesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
=======
        <Stack.Navigator
            initialRouteName={ScreenNames.FilterScreen}
            screenOptions={{
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name={ScreenNames.CategoriesScreen}
                component={CategoriesScreen}
                options={{
                    title: 'Meal Categories',
                }}
            />
            <Stack.Screen
                name={ScreenNames.CategoryMealScreen}
                component={CategoryMealScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: { backgroundColor: route.params.color },
                })}
            />
            <Stack.Screen name={ScreenNames.FilterScreen} component={FilterScreen} />
            <Stack.Screen name={ScreenNames.MealDetailScreen} component={MealDetailScreen} />
            <Stack.Screen name={ScreenNames.FavoritesScreen} component={FavoritesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack

const AppHeaderBackButton = () => {
    return <HeaderBackButton style={{ color: 'red' }} />
}
>>>>>>> c1b70f5ac7f076231c584e2ad5863f8d93e8eccb
