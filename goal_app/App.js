import React, { useState } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native'
import GoalInput from './src/components/GoalInput'
import GoalItem from './src/components/GoalItem'

export default function App() {
    const [goalList, setgoalList] = useState([])

    const addGoal = (goal) => {
        setgoalList((currentList) => [...currentList, goal])
    }

    return (
        <SafeAreaView style={styles.container}>
            <GoalInput onAddGoal={addGoal} />

            <FlatList
                data={goalList}
                renderItem={({ item }) => (<GoalItem content={item} />)}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


