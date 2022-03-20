import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;