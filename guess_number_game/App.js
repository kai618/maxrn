import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen'

export default class App extends Component {
    render() {
        return (
            <View>
                <Header title="Guess a Number" />
                <StartGameScreen />
            </View>
        )
    }
}
