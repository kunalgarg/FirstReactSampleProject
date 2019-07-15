import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, StatusBar, View, TouchableOpacity, FlatList, alert, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeeAction from '../Actions/EmployeeAction';
import store from '../Store';
import ModalDropdown from 'react-native-modal-dropdown';
import I18n from 'react-native-i18n';
import { strings } from '../i18n';

class FlatListItems extends Component {
  render() {
    console.log(' dashboard controller get details from store', store.getState())
    return (
      < View >
        <View style={{
          flex: 1,
          backgroundColor: this.props.index == 1 ? 'green' : 'gray', // not working
          height: 50,
          justifyContent: 'center',
          padding: 5
        }}>
          <Text style={{ justifyContent: 'center', color: "#ffffff" }}>{this.props.item.name}</Text>
        </View>
      </View >
    );
  }
}

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings('dashboard.Dashboard_Title'),
    headerTitleStyle: { alignSelf: 'center', textAlign: 'center', flex: 1 },
    headerRight: <TouchableOpacity style={{ height: 18, width: 50 }}
      onPress={() => navigation.navigate('Mralexgray')}>
      <Text>{strings('dashboard.Next')}</Text>
    </TouchableOpacity>

  });


  navigateToNextServiceCall = () => {
    console.log('Navigation bar button pressed')
    this.props.navigate.navigate('Login');
  }

  constructor(props) {
    super(props);
    I18n.locale = "he";
    this.state = {
      username: 'Daniel',
      languageSelected: ''
    };

    this.props.navigation.setParams({
      //title: strings('dashboard.Dashboard_Title')
    });

  }
  async componentDidMount() {
    const { empDetailsService } = this.props;
    empDetailsService().then(() => {
      console.log('Hello')
    });
  }

  callNextScreenHandler = (item) => {
    console.log(item);
    this.props.navigation.navigate('DetailScreen', item);
  }


  render() {
    return (
      <View style={{ marginTop: 0, backgroundColor: '#ffffff' }}>
        {this.renderFlatList()}
        <Text style={Styles.Welcome}>{strings('login.welcome', { name: this.state.username })}</Text>
        {this.renderDropDown()}
      </View >
    );
  }

  renderFlatList() {
    return (
      <FlatList
        data={this.props.empDetailsObj.list}
        ItemSeparatorComponent={this.FlatListItemSeparator}
        ListHeaderComponent={this.FlatListHeader}
        stickyHeaderIndices={[0]}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight onPress={() => this.callNextScreenHandler(item)}>
              <FlatListItems item={item}> index = {index}</FlatListItems>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item) => item.email}
      //renderItem={this.renderEmployees}
      />
    );
  }

  renderDropDown() {
    return (
      <View style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ alignItems: 'center', marginLeft: 20 }}>Choose Language</Text>

        <TouchableOpacity onPress={() => { this.dropDown && this.dropDown.show(); }}>
          <View style={Styles.DropdownContainer}>
            <ModalDropdown ref={(el) => { this.dropDown = el }}
              options={["English", "Hebrew"]}
              defaultValue={"English"}
              style={{ paddingRight: 8 }}
              textStyle={{ fontWeight: 'bold', textAlign: 'right' }}
              dropdownStyle={{ width: 100, height: 100 }}
            />
            <View style={{ position: "absolute", left: 45, top: 12 }}><Text>▼</Text></View>
          </View>
        </TouchableOpacity>
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
        }}> {strings('dashboard.Contact_List_Title')} </Text>
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

const Styles = StyleSheet.create({
  Welcome: {
    marginTop: 50,
    marginLeft: 10
  },
  DropdownContainer: {
    marginLeft: 40, height: 40, alignItems: 'center', flexDirection: 'row'
  }




})


const mapStateToProps = (state) => ({
  empDetailsObj: state.employee.empDetailsObj,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(EmployeeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
