import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
import Card from '../components/Card'
import Colors from '../commons/Colors'
import NumberInput from '../components/NumberInput'

export default class StartGameScreen extends Component {
    state = {
        input: '',
        confirmed: false,
        number: NaN,
    }

    setInput = (input) => {
        this.setState({ input })
    }

    reset = () => {
        this.setInput('')
        this.setState({ confirmed: false })
    }

    confirm = () => {
        const number = parseInt(this.state.input)
        if (isNaN(number)) return

        this.setState({ confirmed: true })
        this.setState({ number })
        this.setInput('')
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.card}>
                    <Text style={styles.text}>Select a Number</Text>
                    <NumberInput
                        value={this.state.input}
                        onChange={this.setInput}
                    />
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                color={Colors.primary}
                                onPress={this.reset}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={this.confirm} />
                        </View>
                    </View>
                </Card>
                {this.state.confirmed && <Text>Chosen Number: {this.state.number}</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
    },
    card: {
        width: 300,
        maxWidth: '80%',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 90,
    },
})
