import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button, StatusBar } from 'react-native'

class Config {
    constructor(color = 'red', lang = languages.en) {
        this.color = color
        this.lang = lang
    }
}

const languages = { en: 'en', fr: 'fr' }
const initialTheme = { config: new Config(), switchColor: () => {} }
const { Provider: AppProvider, Consumer: AppConsumer } = React.createContext(initialTheme)

const FavoritesScreen = () => {
    // const setLanguage = (lang) => {
    //     setTheme({ ...theme, lang })
    // }

    // const [theme, setTheme] = useState(initialTheme)

    const [color, setColor] = useState('red')

    const switchColor = () => {
        setColor(color == 'red' ? 'blue' : 'red')
    }

    return (
        <AppProvider
            value={{
                config: new Config(color),
                switchColor,
            }}
        >
            <LanguagePicker />
            <Menu />
        </AppProvider>
    )
}

const Menu = () => <MenuItem />

const LanguagePicker = () => (
    <AppConsumer>
        {(context) => (
            <View>
                <Button
                    title="Change Color"
                    color={context.config.color}
                    onPress={context.switchColor}
                />
            </View>
        )}
    </AppConsumer>
)

const MenuItem = () => (
    <AppConsumer>
        {(context) => {
            return (
                <View>
                    <Text>Theme colour: {context.config.colour}</Text>
                    <Text>Locale: {context.config.lang}</Text>
                </View>
            )
        }}
    </AppConsumer>
)

export default FavoritesScreen
