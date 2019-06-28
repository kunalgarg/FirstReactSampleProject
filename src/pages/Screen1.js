import React, { Component } from "react";
import { Platform, StyleSheet, Text, StatusBar, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeAction from '../Actions/EmployeeAction';

class Screen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
                <Text style={{ color: '#8f8f8f', textAlign: 'center' }}>{this.props.empDetailsObj.page}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

