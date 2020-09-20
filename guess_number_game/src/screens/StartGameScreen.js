import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class StartGameScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    },
})
