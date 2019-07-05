import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Dashboard from "./Dashboard";
import DetailScreen from './DetailScreen';

const MainNavigator = createStackNavigator(
    {
        Login,
        Dashboard,
        DetailScreen
    },
    {
        intialRouteName: 'Login'
    }
);

export default createAppContainer(MainNavigator);
