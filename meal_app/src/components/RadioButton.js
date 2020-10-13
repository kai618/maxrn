import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export class RadioButtonGroup extends Component {
    static defaultProps = {
        initialValue: undefined,
        children: [], // an array of JSX.Element
        onSelect: (index) => {},
        selectedIcon: <Text>+</Text>,
        unSelectedIcon: <Text>-</Text>,
        divider: null, // JSX.Element
        radioButtonStyle: {},
    }

    constructor(props) {
        super(props)

        this.state = {
            selections: this.props.children.map((c, i) => {
                if (i == this.props.initialValue) return true
                return false
            }),
        }
    }

    /**
     * @param {number} index
     */
    onSelect = (index) => {
        const selections = this.state.selections.map((s, i) => i == index)

        this.setState({ selections })
        this.props.onSelect(index)
    }

    render() {
        return (
            <>
                {this.props.children.map((child, index) => {
                    const divider =
                        index !== this.props.children.length - 1 ? this.props.divider : null

                    return (
                        <View style={styles.row} key={index}>
                            <RadioButton
                                value={index}
                                selected={this.state.selections[index]}
                                selectedIcon={this.props.selectedIcon}
                                unSelectedIcon={this.props.unSelectedIcon}
                                onSelect={this.onSelect}
                                style={this.props.radioButtonStyle}
                                divider={divider}
                            >
                                {child}
                            </RadioButton>
                        </View>
                    )
                })}
            </>
        )
    }
}

export class RadioButton extends Component {
    static defaultProps = {
        value: undefined,
        selected: false,
        selectedIcon: <View />,
        unSelectedIcon: <View />,
        divider: null, // JSX.Element
        onSelect: () => {},
        style: {},
    }

    select = () => {
        // a selected buton is able to be pressed again
        this.props.onSelect(this.props.value)
    }

    render() {
        return (
            <>
                <TouchableOpacity onPress={this.select}>
                    <View style={[styles.button, this.props.style]}>
                        <View>
                            {this.props.selected
                                ? this.props.selectedIcon
                                : this.props.unSelectedIcon}
                        </View>
                        {this.props.children}
                    </View>
                </TouchableOpacity>
                {this.props.divider}
            </>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
