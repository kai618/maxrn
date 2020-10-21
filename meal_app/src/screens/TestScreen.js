import Card from '../components/Card'
import React, { Component } from 'react'
import { Text, Animated, StyleSheet, View } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default class TestScreen extends Component {
    render() {
        return (
            <View style={{ padding: 16 }}>
                <SwipeableTile>
                    <Card>
                        <TouchableOpacity onPress={() => console.log('pressed')}>
                            <View style={{ height: 80, padding: 12 }}>
                                <Text> textInComponent </Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </SwipeableTile>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

class SwipeableTile extends Component {
    render() {
        return (
            <Swipeable
                containerStyle={{ overflow: 'visible', backgroundColor: 'red', borderRadius: 12 }}
                rightThreshold={40}
                overshootRight={false}
                renderRightActions={(prog, drag) => {
                    return (
                        <TouchableOpacity
                            onPress={() => console.log('Deleted')}
                            style={{
                                height: '100%',
                                width: 100,
                                borderBottomRightRadius: 12,
                                borderTopRightRadius: 12,
                            }}
                        ></TouchableOpacity>
                    )
                }}
            >
                {this.props.children}
            </Swipeable>
        )
    }
}
