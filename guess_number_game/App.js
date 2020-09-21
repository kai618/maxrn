import React, { Component } from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen'

export default class App extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <Header title="Guess a Number" />
                    <StartGameScreen />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
