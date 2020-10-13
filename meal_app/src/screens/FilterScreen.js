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
import { ScrollView } from 'react-native-gesture-handler'
import { CartPopoverButton } from '../components/CartPopoverButton'

export default class FilterScreen extends React.Component {
    renderButton = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ paddingLeft: 16 }}>Add new address</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{ height: 300 }} />
                <CartPopoverButton
                    data={[
                        { id: 0, name: 'Home' },
                        { id: 1, name: 'Work' },
                        { id: 2, name: 'Apartment' },
                    ]}
                    renderButtonText={(item) => item.name}
                    renderPopoverItemText={(item) => item.name}
                    bottomComponent={this.renderButton()}
                />
                <View style={{ height: 300 }} />
                <CartPopoverButton
                    data={[
                        { id: 0, name: 'Home' },
                        { id: 1, name: 'Work' },
                        { id: 2, name: 'Apartment' },
                    ]}
                    renderButtonText={(item) => item.name}
                    renderPopoverItemText={(item) => item.name}
                />
                <View style={{ height: 300 }} />
                <CartPopoverButton
                    data={[
                        { id: 0, name: 'Home' },
                        { id: 1, name: 'Work' },
                        { id: 2, name: 'Apartment' },
                    ]}
                    renderButtonText={(item) => item.name}
                    renderPopoverItemText={(item) => item.name}
                />
            </ScrollView>
        )
    }
}
