import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import AdaptionHandler from '../services/AdaptionHandler'
import Meal from '../models/Meal'

/**
 *
 * @param {{meal: Meal, onPress: Function}} param
 */
const MealItem = ({ meal, onPress }) => {
    return (
        <AdaptionHandler.AppTouchable onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.mealItem}>
                    <View style={styles.headerWrapper}>
                        <ImageBackground
                            source={{ uri: meal.imageUrl }}
                            style={styles.imageBackground}
                        >
                            <View style={styles.header}>
                                <Text style={styles.headerText} numberOfLines={1}>
                                    {meal.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.infoRow}>
                        <Text>{meal.duration}</Text>
                        <Text>{meal.complexity}</Text>
                        <Text>{meal.affordability}</Text>
                    </View>
                </View>
            </View>
        </AdaptionHandler.AppTouchable>
    )
}

export default MealItem

const styles = StyleSheet.create({
    card: {
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { height: 2, width: 2 },
    },
    mealItem: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    headerWrapper: {
        height: '85%',
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    header: {
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        padding: 5,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoRow: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
})
