import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default class NumberInput extends Component {
    changeText = (text) => {
        console.log(text)
        const formattedText = text.replace(/[^0-9]/g, '')
        this.props.onChange(formattedText)
    }

    render() {
        return (
            <TextInput
                keyboardType="number-pad"
                maxLength={2}
                value={this.props.value}
                onChangeText={this.changeText}
                autoCapitalize="none"
                autoCorrect={false}
                {...this.props}
                style={[styles.input, this.props.style]}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 50,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#efefef',
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        margin: 10,
        padding: 5,
        borderBottomWidth: 1,
    },
})
