import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default class CategoryMealScreen extends Component {
    constructor(props) {
        super(props)
        this.catId = this.props.route.params.id
    }

    render() {
        return (
            <View>
                <SafeAreaView>
                    <Text> {this.catId} </Text>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
