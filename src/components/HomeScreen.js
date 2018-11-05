import React from 'react';
import { View, Text } from 'react-native';

export default class Homescreen extends React.Component {
  render() {
    const { homeInfo } = this.props;
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderColor: 'black',
            alignSelf: 'stretch',
          }}
        >
          <Text>{homeInfo.address}</Text>
        </View>
        <View>
          <Text>{homeInfo.email}</Text>
        </View>
        <View>
          <Text>{homeInfo.phone_number}</Text>
        </View>
      </View>
    );
  }
}
