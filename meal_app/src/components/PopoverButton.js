import React, { createRef } from 'react'
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

export class PopoverButton extends React.Component {
    static defaultProps = {
        /**
         * @param {Function} showPopover
         */
        setButton: (showPopover) => <View />,
        /**
         * @param {Function} hidePopover
         */
        setPopover: (hidePopover) => <View />,
    }

    popoverRef = createRef()

    state = {
        position: null,
    }

    /**
     *
     * @param {Function} onDidGetPosition
     */
    getPosition = (onDidGetPosition = () => {}) => {
        this.buttonRef.measure((x, y, width, height, pageX, pageY) => {
            this.setState({ position: { width, height, pageX, pageY } }, onDidGetPosition)
        })
    }

    showPopover = () => {
        this.getPosition(this.popoverRef.current.show)
    }

    hidePopover = () => this.popoverRef.current.hide()

    render() {
        return (
            <View>
                <View
                    style={[{ alignItems: 'flex-start' }, this.props.style]}
                    ref={(ref) => (this.buttonRef = ref)}
                    onLayout={() => this.getPosition()}
                >
                    {this.props.setButton(this.showPopover)}
                </View>
                {this.state.position && (
                    <Popover ref={this.popoverRef} position={this.state.position}>
                        {this.props.setPopover(this.hidePopover)}
                    </Popover>
                )}
            </View>
        )
    }
}

export class Popover extends React.Component {
    static defaultProps = {
        offsetX: 0,
        offsetY: 5,
    }

    constructor(props) {
        super(props)

        this.calculateOffset(this.props.position)
    }

    state = {
        visible: this.props.visible || false,
    }

    componentDidUpdate(prevProps) {
        if (this.comparePosition(prevProps.position, this.props.position))
            this.calculateOffset(this.props.position)
    }

    /**
     *
     * @param {object} position
     */
    calculateOffset = (position) => {
        this.offset = {
            x: position.pageX + this.props.offsetX,
            y: position.pageY + position.height + this.props.offsetY,
        }
    }

    /**
     *
     * @param {object} prev
     * @param {object} current
     */
    comparePosition = (prev, current) => {
        return prev.pageX !== current.pageX || prev.pageY !== current.pageY
    }

    /**
     *
     * @param {boolean} visible
     */
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
                <View style={[styles.wrapper, { top: this.offset.y, left: this.offset.x }]}>
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
    wrapper: {
        alignItems: 'flex-start',
    },
})
