import React, { useState, createRef } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    FlatList,
    Button,
} from 'react-native'
import GoalInputModal from './src/components/GoalInputModal'
import GoalItem from './src/components/GoalItem'

export default function App() {
    const addModal = createRef()
    const [goalList, setgoalList] = useState([])

    const addGoal = (goal) => {
        setgoalList((currentList) => [
            ...currentList,
            { id: Date.now().toString(), content: goal },
        ])
    }

    const deleteGoal = (id) => {
        setgoalList((currentList) => {
            return currentList.filter((e) => e.id !== id)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="ADD" onPress={() => addModal.current.open()} />
            <GoalInputModal ref={addModal} onAddGoal={addGoal} />

            <FlatList
                data={goalList}
                renderItem={({ item }) => (
                    <GoalItem
                        id={item.id}
                        content={item.content}
                        onDelete={deleteGoal}
                    />
                )}
                keyExtractor={(item, index) => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
