import React, { createRef } from 'react'
import { Modal, StyleSheet, TouchableWithoutFeedback, View, Dimensions } from 'react-native'

export class PopoverButton extends React.Component {
    /** @type {{setButton: Function, setPopover: Function}} */
    static defaultProps = {
        setButton: (showPopover) => <View />,
        setPopover: (hidePopover) => <View />,
    }

    /** @type {{position: {width: number, height: number, pageX: number, pageY: number}}} */
    state = {
        position: null,
    }

    popoverRef = createRef()

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
    /**
     * Render the transparent Popover first to get its dimensions via measure()
     * Then determine whether the Popover exceeds the screen frame
     * If yes, calculate new offset values
     * Then set the Popover to the new position and make it visible
     */

    static defaultProps = {
        offsetX: 0,
        offsetY: 5,
    }

    constructor(props) {
        super(props)

        this.calculateInitialOffset(this.props.position)
    }

    state = {
        visible: this.props.visible || false,
        hidden: false,
    }

    /**
     *
     * @param {{width: number, height: number, pageX: number, pageY: number}} position
     */
    calculateInitialOffset = (position) => {
        this.state.offset = {
            x: position.pageX + this.props.offsetX,
            y: position.pageY + position.height + this.props.offsetY,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.comparePosition(prevProps.position, this.props.position))
            this.calculateInitialOffset(this.props.position)
    }

    getPosition = () => {
        this.popoverRef.measure((x, y, width, height) => {
            // TODO: find a way to get status bar height
            const totalHeight = height + this.state.offset.y + 20
            const screenHeight = Dimensions.get('window').height
            let diffOffsetY = screenHeight - totalHeight
            if (diffOffsetY > 0) diffOffsetY = 0

            this.setState((prevState) => ({
                offset: {
                    x: prevState.offset.x,
                    y: prevState.offset.y + diffOffsetY,
                },
                hidden: false,
            }))
        })
    }

    /**
     *
     * @param {Object} prev
     * @param {Object} current
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
                <View
                    style={[
                        styles.wrapper,
                        {
                            top: this.state.offset.y,
                            left: this.state.offset.x,
                            opacity: this.state.hidden ? 0 : 1,
                        },
                    ]}
                    ref={(ref) => (this.popoverRef = ref)}
                    onLayout={() => this.getPosition()}
                >
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
