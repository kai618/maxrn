import React, { Component } from 'react'
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { ScreenNames } from '../commons/Route'
import Category from '../models/Category'
import { CATEGORIES } from '../repos/data'
import AdaptionHandler from '../services/AdaptionHandler'

export default class CategoriesScreen extends Component {
    /**
     * @param {Category} item
     */
    toCategoryMealScreen = (item) => {
        this.props.navigation.navigate(ScreenNames.CategoryMealScreen, { ...item })
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    data={CATEGORIES}
                    renderItem={this.renderGridItem}
                    numColumns={2}
                />
            </SafeAreaView>
        )
    }

    renderGridItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <AdaptionHandler.AppTouchable
                    onPress={() => this.toCategoryMealScreen(item)}
                    style={{ flex: 1 }}
                >
                    <View style={[styles.gridItem, { backgroundColor: item.color }]}>
                        <Text>{item.title}</Text>
                    </View>
                </AdaptionHandler.AppTouchable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
