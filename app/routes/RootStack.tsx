import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';


export default function RootStack() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


