import React from 'react';
import { View, Text, Button } from 'react-native';

import data from '../../data';

const home = {
  buttonText: 'Show work info',
  address: data[0].home.address,
  email: data[0].home.email,
  phone_number: data[0].home.phone_number,
};

export default class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    return (
      <View>
        <View>
          <Button title={home.buttonText} onPress={() => !this.state} />
        </View>
        <View>
          <Text>{home.address}</Text>
        </View>
        <View>
          <Text>{home.email}</Text>
        </View>
        <View>
          <Text>{home.phone_number}</Text>
        </View>
      </View>
    );
  }
}
