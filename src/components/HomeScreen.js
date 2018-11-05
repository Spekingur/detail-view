import React from 'react';
import { View, Text, Animated } from 'react-native';

export default class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.infoAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.infoAnimation, { duration: 500, toValue: 1 }).start();
  }

  render() {
    const { homeInfo } = this.props;
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
      </Animated.View>
    );
  }
}
