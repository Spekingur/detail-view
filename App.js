import React from "react";
import { StyleSheet, Button, Text, View, Image } from "react-native";
import { Constants } from "expo";

// const data = require('./data');
import data from "./data";
import Homescreen from "./src/components/HomeScreen";
import Workscreen from "./src/components/WorkScreen";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f09",
    alignItems: "center",
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
  text: {
    color: "white"
  },
  avatarImg: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "black"
  },
  imgStyle: {
    marginTop: 20,
    backgroundColor: "#fff"
  },
  nameSpace: {
    marginTop: 20,
    flexDirection: "row"
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  items: {
    borderBottomWidth: 1,
    borderColor: "black"
  }
});

const name = {
  firstname: data[0].name.first_name,
  lastname: data[0].name.last_name
};

const pic = {
  uri: data[0].avatar
};

/*
  const home = {
  buttonText: 'Show work info',
  address: data[0].home.address,
  email: data[0].home.email,
  phone_number: data[0].home.phone_number,
}; */

/*
  const work = {
  buttonText: 'Show home info',
  address: data[0].work.address,
  email: data[0].work.address,
  phone_number: data[0].work.phone_number,
  company: data[0].work.company,
  department: data[0].work.department,
  job_title: data[0].work.job_title,
}; */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonText = "Show work info";
    this.onPressButton = this.onPressButton.bind(this);
    this.showingHomeInfoView = true;
    this.switchAnimation = styles.infoContainer;
  }

  onPressButton() {
    this.setState({
      // buttonText: "Text has been changed"
    });
    if (this.showingHomeInfoView === true) {
      this.buttonText = "Show home info";
      this.showingHomeInfoView = false;
    } else {
      this.buttonText = "Show work info";
      this.showingHomeInfoView = true;
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.imgStyle}>
          <Image style={styles.avatarImg} source={pic} />
        </View>

        <View style={styles.nameSpace}>
          <Text style={styles.text}>{name.firstname} </Text>
          <Text style={styles.text}>{name.lastname}</Text>
        </View>
        <View>
          <Button title={this.buttonText} onPress={this.onPressButton} />
        </View>
        <View>
          {this.showingHomeInfoView ? <Homescreen /> : <Workscreen />}
        </View>
      </View>
    );
  }
}
