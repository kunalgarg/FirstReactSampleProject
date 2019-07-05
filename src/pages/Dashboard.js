import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, StatusBar, View, TouchableOpacity, FlatList, alert, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeAction from '../Actions/EmployeeAction';

class FlatListItems extends Component {
  render() {
    return (
      <View>
        <View style={{
          flex: 1,
          backgroundColor: this.props.index == 1 ? 'green' : 'gray', // not working
          height: 50,
          justifyContent: 'center',
          padding: 5
        }}>
          <Text style={{ justifyContent: 'center', color: "#ffffff" }}>{this.props.item.name}</Text>
        </View>
      </View>

    );
  }
}


class Dashboard extends Component {

  static navigationOptions = {
    title: 'Dashboard',
    headerBackTitle: null,
    headerRight: <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'blue' }}
      onPress={this.callNextScreenHandler}>
      <Text>Next</Text>
    </TouchableOpacity>

  };

  async componentDidMount() {
    const { empDetailsService } = this.props;
    empDetailsService().then(() => {
      console.log('Hello')
    });
  }

  callNextScreenHandler = (item) => {
    this.props.navigation.navigate('DetailScreen', item.name);
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: '#ffffff' }}>
        <FlatList
          data={this.props.empDetailsObj.list}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          ListHeaderComponent={this.FlatListHeader}
          stickyHeaderIndices={[0]}
          renderItem={({ item, index }) => {
            return (
              console.log('Index = ', index),
              <TouchableHighlight onPress={() => this.callNextScreenHandler(item)}>
                <FlatListItems item={item}> index = {index}</FlatListItems>
              </TouchableHighlight>

            );
          }}
        //renderItem={this.renderEmployees}
        />
      </View>
    );
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000000",
        }}
      />
    );
  }

  FlatListHeader = () => {
    var headerView = (
      <View style={{
        weight: '100%', height: 40, backgroundColor: '#4CAF50', alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 18
        }}> Contact List </Text>
      </View>
    );
    return headerView;
  };

  renderEmployees = (employee) => {
    console.log("render employee = ", employee.item)
    return (
      <TouchableOpacity style={{ flex: 1, width: 300, height: 50 }} onPress={() => this.actionOnRow}>
        <View style={{ flex: 1, width: 300, height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
          <Text> {employee.item.lastName}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  actionOnRow = () => {
    alert('Web Service Failure')
    // your code on item press
  };

}

const mapStateToProps = (state) => ({
  empDetailsObj: state.employee.empDetailsObj,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(EmployeeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
