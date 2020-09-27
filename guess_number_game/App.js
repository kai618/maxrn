import React, { Component } from 'react'
import { View, Keyboard, Text, Button, SafeAreaView } from 'react-native'
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen'
import { ScrollView } from 'react-native-gesture-handler'

export default class App extends Component {
    // render() {
    //     return (
    //         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //             <View style={{ flex: 1 }}>
    //                 <Header title="Guess a Number" />
    //                 <StartGameScreen />
    //             </View>
    //         </TouchableWithoutFeedback>
    //     )
    // }

    state = { num: 7 }

    render() {
        return (
            <SafeAreaView style={{ flexGrow: 1, flexShrink: 1 }}>
                <Button title="Add" onPress={() => this.setState((state) => ({ num: state.num + 1 }))} />
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        flexShrink: 0,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        backgroundColor: 'skyblue',
                    }}
                >
                    {this.renderBox()}
                </ScrollView>
                <Button title="Reset" onPress={() => this.setState({ num: 0 })} />
            </SafeAreaView>
        )
    }

    renderBox() {
        const box = []
        for (let i = 0; i < this.state.num; i++) {
            box.push(<Box key={i} id={i} />)
        }

        return box
    }
}

const Box = ({ color = 'black', id = 1 }) => {
    return (
        <View
            style={{
                height: 100,
                width: 100,
                backgroundColor: color,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
            }}
        >
            <Text style={{ fontSize: 30, color: 'white' }}>{id}</Text>
        </View>
    )
}
