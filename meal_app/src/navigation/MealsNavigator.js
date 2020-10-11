import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import React from 'react'
import { ScreenNames } from '../commons/Route'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const Stack = createStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Categories Screen"
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
