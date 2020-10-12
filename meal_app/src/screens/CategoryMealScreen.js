import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

export default class CategoryMealScreen extends Component {
    constructor(props) {
        super(props)
        this.catId = this.props.route.params.id
    }

    render() {
        return (
            <SafeAreaView>
                <Text> {this.catId} </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})