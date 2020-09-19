import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
} from 'react-native'

export default class GoalInputModal extends React.Component {

    state = {
        value: '',
        valid: false,
        visible: false,
    }

    changeText = (value) => {
        this.setState({ value })
        this.setState({ valid: this.verifyText(value) })
    }

    /** TEST */
    verifyText = (text) => {
        if (text.trim() == '') return false
        return true
    }

    addGoal = () => {
        this.props.onAddGoal(this.state.value)
        this.changeText('')
        this.close()
    }

    open = () => {
        this.setState({ visible: true })
    }

    close = () => {
        this.setState({ visible: false })
    }

    render() {
        return (
            <Modal
                animationType='fade'
                visible={this.state.visible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.wrapper}>
                        <TextInput style={styles.inputField}
                            value={this.state.value}
                            onChangeText={this.changeText}
                        />
                        <Button
                            title='ADD'
                            onPress={this.addGoal}
                            disabled={!this.state.valid}
                            color='white'
                        />
                    </View>
                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#55555555',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        backgroundColor: 'grey',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        borderRadius: 10,
    },
    inputField: {
        flex: 1,
        fontSize: 20,
        backgroundColor: 'white',
        padding: 15,
        marginRight: 15,
        borderRadius: 10,
    },
})