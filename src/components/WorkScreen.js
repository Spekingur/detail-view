import React from 'react';
import { View, Text, Animated } from 'react-native';

export default class Workscreen extends React.Component {
  constructor(props) {
    super(props);
    this.infoAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.infoAnimation, { duration: 500, toValue: 1 }).start();
  }

  render() {
    const { workInfo } = this.props;
    return (
      <Animated.View
        style={[
          {
            marginRight: this.infoAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 'center'],
            }),
          },
          { opacity: this.infoAnimation },
        ]}
      >
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
      </Animated.View>
    );
  }
}
