import React, { createRef } from 'react'
import {
    Text,
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Touchable,
} from 'react-native'

export default class FilterScreen extends React.Component {
    render() {
        return (
            <PopoverButton
                setButton={(showPopover) => (
                    <TouchableOpacity onPress={showPopover}>
                        <View style={{ height: 50, width: 150, backgroundColor: 'skyblue' }} />
                    </TouchableOpacity>
                )}
                setPopover={<Text>Hi</Text>}
            />
        )
    }
}

class PopoverButton extends React.Component {
    static defaultProps = {
        setPopover: <View />,
        /**
         * @param {Function} showPopover
         */
        setButton: (showPopover) => <View />,
    }

    popoverRef = createRef()

    state = {
        position: null,
    }

    getPosition = () => {
        this.buttonRef.measure((x, y, width, height, pageX, pageY) => {
            this.setState({ position: { width, height, pageX, pageY } })
        })
    }

    showPopover = () => this.popoverRef.current.show()

    render() {
        return (
            <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View ref={(ref) => (this.buttonRef = ref)} onLayout={this.getPosition}>
                    {this.props.setButton(this.showPopover)}
                </View>
                {this.state.position && (
                    <Popover ref={this.popoverRef} position={this.state.position}>
                        {this.props.setPopover}
                    </Popover>
                )}
            </SafeAreaView>
        )
    }
}

class Popover extends React.Component {
    constructor(props) {
        super(props)

        const position = this.props.position
        this.offset = { x: position.pageX, y: position.pageY + position.height }
    }

    state = {
        visible: this.props.visible || false,
    }

    setVisible = (visible) => this.setState({ visible })

    show = () => this.setVisible(true)

    hide = () => this.setVisible(false)

    render() {
        return (
            <Modal
                visible={this.state.visible}
                animationType="fade"
                onRequestClose={this.hide}
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={this.hide}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
                <View style={{ top: this.offset.y, left: this.offset.x }}>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
})
