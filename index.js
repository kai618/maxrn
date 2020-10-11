/**
 * @format
 */
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native'
import App from './meal_app/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
