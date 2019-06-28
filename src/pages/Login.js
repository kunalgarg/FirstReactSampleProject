import React, { Component } from "react";
import { Platform, StyleSheet, Text, StatusBar, View } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";
//import { StackActions } from "react-navigation";

class Login extends Component {

  static navigationOptions = {
    header: null
  };

  loginHandler = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo logoText="Welcome to my App" />
        <Form loginClick={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
