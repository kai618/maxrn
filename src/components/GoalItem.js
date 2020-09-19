import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

export default function GoadItem({ content }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,

    },
    content: {
        fontSize: 18,
    }
})