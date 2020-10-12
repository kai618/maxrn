import React, { createRef } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Button,
    Modal,
    UIManager,
    findNodeHandle,
    TouchableOpacity,
} from 'react-native'

export default class FilterScreen extends React.Component {
    state = {
        position: null,
    }

    getPosition = () => {
        this.button.measure((x, y, width, height) => {
            console.log('x: ', x)
            console.log('y: ', y)
            console.log('width: ', width)
            console.log('height: ', height)

            this.state.position = { x, y, width, height }
        })
    }

    showPopover = () => {
        this.popover.current.show()
    }

    render() {
        return (
            <SafeAreaView>
                <View ref={(ref) => (this.button = ref)} onLayout={this.getPosition}>
                    <TouchableOpacity onPress={this.showPopover}>
                        <View style={{ height: 50, width: 150, backgroundColor: 'skyblue' }} />
                    </TouchableOpacity>
                </View>
                {this.position && (
                    <Popover ref={(ref) => (this.popover = ref)} position={this.state.position}>
                        <View style={{ height: 150, width: 150, backgroundColor: 'red' }} />
                    </Popover>
                )}
            </SafeAreaView>
        )
    }
}

class Popover extends React.Component {
    state = {
        visible: this.props.visible || false,
    }

    setVisible = (visible) => this.setState({ visible })

    show = () => {
        console.log('show')
        setVisible(true)
    }
    hide = () => {
        setVisible(false)
    }

    render() {
        console.log(this.popover)
        return (
            <Modal
                visible={this.state.visible}
                animationType="fade"
                onRequestClose={this.hide}
                transparent={true}
            >
                <View>{this.props.children}</View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({})
