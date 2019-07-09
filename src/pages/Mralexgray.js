import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, ActivityIndicator, Text, StatusBar, View, TouchableOpacity, FlatList, alert, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MralexgrayAction from '../Actions/MralexgrayAction';


class FlatListItem extends Component {
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

    static navigationOptions = ({ navigation }) => ({
        title: 'Mralexgray List',
        headerTitleStyle: { alignSelf: 'center', textAlign: 'center', flex: 1 },
        headerRight: <TouchableOpacity style={{ height: 18, width: 50 }}
            onPress={() => navigation.navigate('Mralexgray')}>
            <Text>Next</Text>
        </TouchableOpacity>

    });


    async componentDidMount() {
        const { mralexgrayService } = this.props;
        mralexgrayService().then(() => {
            console.log('mralexgray service called successfully \n', this.props.MralexgrayDetailsObj);
        });
    }

    render() {

        if (this.props.isLoading) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }

        return (
            <View style={{ flex: 1, marginTop: 0, backgroundColor: '#ffffff' }}>
                <FlatList
                    data={this.props.MralexgrayDetailsObj.dlist}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableHighlight onPress={() => this.callNextScreenHandler(item)}>
                                <FlatListItem item={item}> index = {index}</FlatListItem>
                            </TouchableHighlight>

                        );
                    }}
                    keyExtractor={(item) => item.name}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
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
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

const mapStateToProps = (state) => (
    console.log('Current state is = ', state),
    {
        MralexgrayDetailsObj: state.mralexgray.MralexgrayDetailsObj,
        isLoading: state.mralexgray.isLoading
    });

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(MralexgrayAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Mralexgray);
