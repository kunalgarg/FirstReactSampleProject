import React, { Component } from "react";
import { Platform, StyleSheet, Text, StatusBar, View } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends Component {

  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  loginHandler = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.props.navigation.navigate("Dashboard");
      this.setState({ loading: false });
    }, 2000);

  };

  render() {
    return (
      <View style={styles.container}>
        <Logo logoText="Welcome to my App" />
        <Form loginClick={this.loginHandler} />
        {this.state.loading === true &&
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={true}
            //Text with the Spinner 
            textContent={''}
            //Text style of the Spinner Text
            textStyle={{ color: '#000000' }}
          />
        }


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
