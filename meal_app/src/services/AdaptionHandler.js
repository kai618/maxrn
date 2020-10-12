import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

class AdaptionHanlder {
    constructor() {
        this.isAndroid = Platform.OS == 'android'
    }

    get AppTouchable() {
        return this.isAndroid ? TouchableNativeFeedback : TouchableOpacity
    }
}

const adaptionHanlder = new AdaptionHanlder()
export default adaptionHanlder
