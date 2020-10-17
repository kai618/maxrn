import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import { ScreenNames } from '../commons/Route'

import {
    NavigationState,
    NavigationProp,
    NavigationRouteContext,
    ParamListBase,
} from '@react-navigation/native'

import { MEALS, CATEGORIES } from '../repos/data'
import Meal from '../models/Meal'
import MealItem from '../components/MealItem'

/**
 *
 * @param {object} object
 * @param {NavigationProp<ParamListBase, NavigationState>} object.navigation
 * @param {NavigationRouteContext} object.route
 */
const CategoryMealScreen = ({ navigation, route }) => {
    const catId = route.params.id
    const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId))

    /**
     *
     * @param {object} param
     * @param {Meal} param.item
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
