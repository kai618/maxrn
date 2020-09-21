import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    StatusBar,
} from 'react-native'
import { statusBarHeight, headerHeight } from '../commons/Constants'
import Colors from '../commons/Colors'

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
                <StatusBar backgroundColor={Colors.primary_dark} />
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
