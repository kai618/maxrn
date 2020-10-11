import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Button } from 'react-native'

import { CATEGORIES } from '../repos/data'
import { FlatList } from 'react-native-gesture-handler'

export default class CategoriesScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <FlatList data={CATEGORIES} renderItem={this.renderGridItem} numColumns={2} />
            </SafeAreaView>
        )
    }

    renderGridItem = ({ item }) => {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
