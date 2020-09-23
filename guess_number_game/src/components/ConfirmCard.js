import React, { Component } from 'react'
import { Text, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'

export default class ConfirmCard extends Component {
    render() {
        return (
            <Card style={styles.card}>
                <Text>You selected</Text>
                <Text style={styles.text}>{this.props.number}</Text>
                <Button title="LET'S GUESS" />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        alignItems: 'center',
        paddingTop: 15,
    },
    text: {
        fontSize: 25,
        borderWidth: 3,
        color: '#d000a7',
        borderColor: '#d000a7',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        marginTop: 10,
    },
})
