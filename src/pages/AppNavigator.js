import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Screen1 from './Screen1';

const MainNavigator = createStackNavigator(
    {
        Login,
        Dashboard,
        Screen1
    },
    {
        intialRouteName: 'Login'
    }
);

export default createAppContainer(MainNavigator);
