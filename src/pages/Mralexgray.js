import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, StatusBar, View, TouchableOpacity, FlatList, alert, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MralexgrayAction from '../Actions/MralexgrayAction';


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


class Mralexgray extends Component {
    async componentDidMount() {
        const { mralexgrayService } = this.props;
        mralexgrayService().then(() => {
            console.log('I am called');
            console.log('mralexgray service called successfully \n', this.props.MralexgrayDetailsObj.dlist)
        });
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 0, backgroundColor: '#ffffff' }}>
                <FlatList
                    data={this.props.MralexgrayDetailsObj}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableHighlight onPress={() => this.callNextScreenHandler(item)}>
                                <FlatListItems item={item}> index = {index}</FlatListItems>
                            </TouchableHighlight>
                        );
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    mralexgrayDetailsObj: state.mralexgray.mralexgrayDetailsObj,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(MralexgrayAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Mralexgray);
