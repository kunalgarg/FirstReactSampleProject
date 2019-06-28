import React, { PureComponent } from "react";
import AppNavigator from "./src/pages/AppNavigator";
import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}
