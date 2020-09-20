import React from 'react'
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import { statusBarHeight, headerHeight } from '../commons/Constants'

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPortrait: true,
        }

        Dimensions.addEventListener('change', this._onChangeOrientation)
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this._onChangeOrientation)
    }

    _onChangeOrientation = ({ window }) => {
        const { height, width } = window
        this.setState({ isPortrait: height > width })
    }

    render() {
        return (
            <View
                style={[
                    styles.header,
                    {
                        height:
                            Platform.OS === 'ios' && this.state.isPortrait
                                ? headerHeight + statusBarHeight
                                : headerHeight,
                        paddingTop:
                            Platform.OS === 'ios' && this.state.isPortrait
                                ? statusBarHeight
                                : 0,
                    },
                ]}
            >
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7287b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
