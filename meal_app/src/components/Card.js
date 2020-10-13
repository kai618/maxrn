import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import * as Constants from '../commons/Constants'

const Card = ({ children, style }) => {
    return <View style={[styles.card, style]}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 10,
        overflow: 'hidden',
    },
})
