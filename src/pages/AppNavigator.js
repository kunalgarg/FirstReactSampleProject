import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Dashboard from "./Dashboard";
import DetailScreen from './DetailScreen';
import Mralexgray from './Mralexgray';

const MainNavigator = createStackNavigator(
    {
        Login,
        Dashboard,
        DetailScreen,
        Mralexgray
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(MainNavigator);
