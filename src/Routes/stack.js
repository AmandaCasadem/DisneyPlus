import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login/Email/index.js";
import Menu from "../screens/Login/Menu";
import Password from "../screens/Login/Password";


const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator
        screenOptions= {{
            headerShown: false,
        }}>
            <Screen 
            name="Login"
            component={Login}
            />
            <Screen 
            name="Password"
            component={Password}
            />
             { <Screen 
            name="Menu"
            component={Menu} 
            />    }
        </Navigator>
    )



}
