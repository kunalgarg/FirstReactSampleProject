import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  login() {
    console.log(this.state.username);
    console.log(this.state.password);

    if (!validateEmail(this.state.username)) {
      Alert.alert("Please enter valid email id!");
    } else {
      Alert.alert("You are welcome");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Emailllll"
          placeholderTextColor="#ffffff"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Passwordddd"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.loginClick}
        >
          <Text style={styles.LoginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    marginBottom: 10,
    flex: 1,
    alignItems: "center"
  },

  inputBox: {
    marginTop: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginVertical: 15
  },

  LoginButton: {
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
    fontWeight: "500",
    textAlign: "center"
  },

  button: {
    width: 300,
    backgroundColor: "#1c313a",
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10
  }
});
