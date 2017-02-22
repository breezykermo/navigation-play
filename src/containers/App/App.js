import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat/user:'
  }
}, {
  containerOptions: {
    // on Android, the URI prefix typically contains a host in addition to the scheme
    URIPrefix: Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://'
  }
})

export default App
