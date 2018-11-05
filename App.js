import React from 'react';
import {
  StyleSheet, Button, Text, View, Image,
} from 'react-native';
import { Constants } from 'expo';

import data from './data';
import Homescreen from './src/components/HomeScreen';
import Workscreen from './src/components/WorkScreen';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f09',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  avatarImg: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
  imgStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  nameSpace: {
    flexDirection: 'row',
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  items: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  itemContainer: {
    alignItems: 'center',
  },
});

const currentPerson = data[0];

const name = {
  firstname: currentPerson.name.first_name,
  lastname: currentPerson.name.last_name,
};

const pic = {
  uri: currentPerson.avatar,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHomeScreen: true,
    };
  }

  render() {
    const { onHomeScreen } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.imgStyle}>
          <Image style={styles.avatarImg} source={pic} />
        </View>

        <View style={styles.nameSpace}>
          <Text style={styles.text}>
            {name.firstname}
            {' '}
            {name.lastname}
          </Text>
        </View>

        <View>
          <Button
            title={onHomeScreen ? 'Show work info' : 'Show home info'}
            onPress={() => this.setState({ onHomeScreen: !onHomeScreen })}
          />
        </View>

        <View>
          {onHomeScreen ? (
            <Homescreen homeInfo={currentPerson.home} />
          ) : (
            <Workscreen workInfo={currentPerson.work} />
          )}
        </View>
      </View>
    );
  }
}
