import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import { ScreenNames } from '../commons/Route'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const BottomTab = createBottomTabNavigator()
const AppBottomTab = () => (
    <NavigationContainer>
        <BottomTab.Navigator
            screenOptions={{
                tabBarIcon: (info) => <Text style={{ color: info.color }}>H</Text>,
            }}
        >
            <BottomTab.Screen
                name={ScreenNames.MealStack}
                component={MealStack}
                options={{
                    tabBarLabel: 'Meals',
                }}
            />
            <BottomTab.Screen
                name={ScreenNames.FavoritesScreen}
                component={FavoritesScreen}
                options={{
                    tabBarLabel: 'Favourites',
                }}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
)

export default AppBottomTab

const Stack = createStackNavigator()
const MealStack = () => (
    <Stack.Navigator
        initialRouteName={ScreenNames.CategoriesScreen}
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
        <Stack.Screen
            name={ScreenNames.MealDetailScreen}
            component={MealDetailScreen}
            options={({ route }) => ({
                title: route.params.meal.title,
            })}
        />
        <Stack.Screen name={ScreenNames.FilterScreen} component={FilterScreen} />
        <Stack.Screen name={ScreenNames.FavoritesScreen} component={FavoritesScreen} />
    </Stack.Navigator>
)

// const AppHeaderBackButton = () => {
//     return <HeaderBackButton style={{ color: 'red' }} />
// }
