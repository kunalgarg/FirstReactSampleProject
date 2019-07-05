import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeAction from '../Actions/EmployeeAction';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.param = this.props.navigation.item;
    }

    static navigationOptions = {
        title: 'Details',
        headerBackTitle: null
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: this.param.image }} style={{ height: 200, margin: 5, backgroundColor: 'gray' }} />
                <View style={styles.TextBorder}>
                    <Text style={styles.TextStyle}>Full name: {this.param.name} {this.param.LastName}</Text>
                </View>
                <View style={styles.TextBorder}>
                    <Text style={styles.TextStyle}>Email: Hardcoded text</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextBorder: {
        borderRadius: 4,
        height: 30,
        backgroundColor: 'gray',
        margin: 5
    },

    TextStyle: {
        height: 30,
        justifyContent: 'center',
        padding: 7,
        borderRadius: 20,
        marginRight: 50
    }
});

const mapStateToProps = (state) => ({
    empDetailsObj: state.employee.empDetailsObj,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(EmployeeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

