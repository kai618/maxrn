import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
import Card from '../components/Card'

export default class StartGameScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.card}>
                    <Text style={styles.text}>Select a Number</Text>
                    <TextInput style={styles.input} />
                    <View style={styles.buttons}>
                        <Button title="Reset" />
                        <Button title="Confirm" />
                    </View>
                </Card>
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
    input: {
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#eee',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
