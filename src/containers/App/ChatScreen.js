import React, { PropTypes } from 'react'
import { Text } from 'react-native'

class ChatScreen extends React.Component {
  static propTypes = {
    aProp: PropTypes.string,
  }

  render() {
    return (
      <Text>
        ChatScreen
      </Text>
    )
  }
}

export default ChatScreen
