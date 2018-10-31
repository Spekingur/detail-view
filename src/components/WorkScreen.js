import React from "react";
import { View, Text, Button } from "react-native";

import data from "../../data";

const work = {
  buttonText: "Show home info",
  address: data[0].work.address,
  email: data[0].work.email,
  phone_number: data[0].work.phone_number,
  company: data[0].work.company,
  department: data[0].work.department,
  job_title: data[0].work.job_title
};

export default class Workscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    return (
      <View>
        <View>
          <Text>{work.address}</Text>
        </View>
        <View>
          <Text>{work.email}</Text>
        </View>
        <View>
          <Text>{work.phone_number}</Text>
        </View>
        <View>
          <Text>{work.company}</Text>
        </View>
        <View>
          <Text>
            {work.department}
            {", "}
            {work.job_title}
          </Text>
        </View>
      </View>
    );
  }
}
