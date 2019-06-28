import React, { Component } from "react";
import { Platform, StyleSheet, Text, StatusBar, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeAction from '../Actions/EmployeeAction';

class Dashboard extends Component {

  async componentDidMount() {
    const { empDetailsService } = this.props;
    empDetailsService().then(() => {
      console.log('Hello')
    });
  }

  callNextScreenHandler = () => {
    this.props.navigation.navigate('Screen1')

  }

  render() {
    const { empDetailsObj } = this.props;
    console.log('Employee Detailssss', empDetailsObj.list)
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dashboard</Text>
        {empDetailsObj.page === 2 &&
          <Text style={{ color: '#000000' }}>{empDetailsObj.list[1].email}</Text>
        }
        <TouchableOpacity style={{ height: 60, width: 60, backgroundColor: '#8f8f8f' }} onPress={this.callNextScreenHandler}>

        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  empDetailsObj: state.employee.empDetailsObj,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(EmployeeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
