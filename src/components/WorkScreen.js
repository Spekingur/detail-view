import React from 'react';
import { View, Text } from 'react-native';

export default class Workscreen extends React.Component {
  render() {
    const { workInfo } = this.props;
    return (
      <View>
        <View>
          <Text>{workInfo.address}</Text>
        </View>
        <View>
          <Text>{workInfo.email}</Text>
        </View>
        <View>
          <Text>{workInfo.phone_number}</Text>
        </View>
        <View>
          <Text>{workInfo.company}</Text>
        </View>
        <View>
          <Text>
            {workInfo.department}
            {', '}
            {workInfo.job_title}
          </Text>
        </View>
      </View>
    );
  }
}
