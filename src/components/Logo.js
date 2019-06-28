import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image
} from "react-native";

export default class Logo extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 40, height: 70 }}
          source={require("../images/Logo.png")}
        />
        <Text style={styles.logoText}> {this.props.logoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#455a64",
    marginTop: 100,
    flex: 1,
    alignItems: "center"
  },
  logoText: {
    fontSize: 20,
    marginTop: 25,
    color: "#000000"
  }
});
