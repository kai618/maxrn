import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'

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
    const renderItem = ({ item }) => <MealItem meal={item} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={meals} renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default CategoryMealScreen

const styles = StyleSheet.create({})
