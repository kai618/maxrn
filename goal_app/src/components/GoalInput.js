import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
} from 'react-native'

export default function GoalInput({ onAddGoal }) {
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)

    const changeText = (text) => {
        setValue(text)
        setValid(verifyText(text))
    }

    // testable
    const verifyText = (text) => {
        if (text.trim() == '') return false
        return true
    }

    const addGoal = () => {
        onAddGoal(value)
        changeText('')
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inputField}
                value={value}
                onChangeText={changeText}
                selectionColor='white'
            />
            <Button title='ADD' onPress={addGoal} disabled={!valid} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        flex: 1,
        fontSize: 20,
        backgroundColor: 'steelblue',
        color: 'white',
        padding: 15,
        marginRight: 15,
        borderRadius: 10,
    },
})