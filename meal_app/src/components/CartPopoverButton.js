import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image, Button } from 'react-native'
import Card from './Card'
import { RadioButtonGroup } from './RadioButton'
import { PopoverButton } from './PopoverButton'

export class CartPopoverButton extends React.Component {
    static defaultProps = {
        data: [{ id: '0', name: 'Item 1' }],
        renderButtonText: (item) => {}, // return string
        renderPopoverItemText: (item) => {}, //return string
        onSelect: (index) => {},
        bottomComponent: <View />,
    }

    state = {
        chosenIndex: 0,
    }

    onSelect = (index) => {
        this.setState({ chosenIndex: index })
        this.props.onSelect(index)
    }

    render() {
        return (
            <PopoverButton
                style={styles.popoverButton}
                setButton={(showPopover) => this.renderButton(showPopover)}
                setPopover={(hidePopover) => this.renderPopover(hidePopover)}
            />
        )
    }

    renderButton = (showPopover) => (
        <TouchableOpacity onPress={showPopover} style={styles.cartPopoverButton}>
            <Text style={styles.cartPopoverButtonText} numberOfLines={1}>
                {this.props.renderButtonText(this.props.data[this.state.chosenIndex])}
            </Text>
        </TouchableOpacity>
    )

    renderPopover = (hidePopover) => (
        <Card>
            <RadioButtonGroup
                initialValue={this.state.chosenIndex}
                selectedIcon={<SelectedIcon />}
                unSelectedIcon={<UnSelectedIcon />}
                divider={<Divider />}
                radioButtonStyle={styles.radioButton}
                onSelect={(index) => {
                    this.onSelect(index)
                    hidePopover()
                }}
            >
                {this.props.data.map((item, index) => this.renderPopoverItem(item, index))}
            </RadioButtonGroup>
            {this.props.bottomComponent}
        </Card>
    )

    renderPopoverItem = (item, index) => (
        <View key={index} style={{ marginLeft: 16 }}>
            <Text>{this.props.renderPopoverItemText(item)}</Text>
        </View>
    )
}

const Divider = () => <View style={styles.divider} />

const SelectedIcon = () => <Text>x</Text>

const UnSelectedIcon = () => <Text>-</Text>

const PlusIcon = () => <Text>+</Text>

const styles = StyleSheet.create({
    popoverButton: {
        maxWidth: 100,
    },
    cartPopoverButton: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50 * (3 / 4),
        borderRadius: 50 * (3 / 4) * 0.5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 8,
    },
    cartPopoverButtonText: {
        fontSize: 14,
        color: 'red',
        paddingHorizontal: 4,
    },
    radioButton: {
        padding: 16,
    },
    divider: {
        height: 0.5,
        backgroundColor: 'grey',
        marginHorizontal: 16,
    },
    icon: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
})
