import React, { Component } from 'react'
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScreenNames } from '../commons/Route'
import Category from '../models/Category'
import { CATEGORIES } from '../repos/data'
import AdaptionHandler from '../services/AdaptionHandler'
import { NavigationProp, ParamListBase, NavigationState } from '@react-navigation/native'

/**
 *
 * @param {object} object
 * @param {NavigationProp<ParamListBase, NavigationState>} object.navigation
 */
const CategoriesScreen = ({ navigation }) => {
    /**
     *
     * @param {Category} item
     */
    toCategoryMealScreen = (item) => {
        navigation.navigate(ScreenNames.CategoryMealScreen, { ...item })
    }

    /**
     *
     * @param {object} object
     * @param {Category} object.item
     */
    renderGridItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <AdaptionHandler.AppTouchable onPress={() => toCategoryMealScreen(item)}>
                    <View style={[styles.gridItem, { backgroundColor: item.color }]}>
                        <Text>{item.title}</Text>
                    </View>
                </AdaptionHandler.AppTouchable>
            </View>
        )
    }

    return (
        <View style={styles.outScreen}>
            <SafeAreaView style={styles.screen}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    data={CATEGORIES}
                    renderItem={renderGridItem}
                    numColumns={2}
                />
            </SafeAreaView>
            <BottomWedgeIPhoneX />
        </View>
    )
}

export default CategoriesScreen

const BottomWedgeIPhoneX = () => <View style={{ height: 35 }}></View>

const styles = StyleSheet.create({
    outScreen: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    grid: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        padding: 10,
    },
    gridItem: {
        height: 0.5 * (Dimensions.get('window').width - 60),
        margin: 10,
        padding: 10,
        borderRadius: 10,

        elevation: 1,

        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { height: 1, width: 1 },
    },
})
