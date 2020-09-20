import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card({ children, style }) {
    return <View style={[styles.card, style]}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        shadowColor: '#555',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowOffset: { height: 2, width: 1 },
        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
})
