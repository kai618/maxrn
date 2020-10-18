import {
    NavigationProp,
    NavigationState,
    ParamListBase,
    NavigationRouteContext,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { ScreenNames } from '../commons/Route'
import MealItem from '../components/MealItem'
import Meal from '../models/Meal'
import { MEALS } from '../repos/data'

/**
 *
 * @param {Object} object
 * @param {NavigationProp<ParamListBase, NavigationState>} object.navigation
 * @param {NavigationRouteContext} object.route
 */
const CategoryMealScreen = ({ navigation, route }) => {
    const catId = route.params.id
    const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId))

    /**
     *
     * @param {{item: Meal}} param
     */
    const renderItem = ({ item }) => (
        <MealItem meal={item} onPress={() => toMealDetailScreen(item)} />
    )

    /**
     *
     * @param {Meal} meal
     */
    const toMealDetailScreen = (meal) => {
        navigation.navigate(ScreenNames.MealDetailScreen, { meal })
    }

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList data={meals} renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default CategoryMealScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
})
