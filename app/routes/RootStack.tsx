import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import MyTabs from './CustomBottomTabs';
import CreateSwapScreen from '../Screens/CreateSwapScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import MySwapDetailsScreen from '../Screens/MySwapDetailsScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';
import ContactUsScreen from '../Screens/ContactUsScreen';


export default function RootStack() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="MyCustomTabs" component={MyTabs} />
                <Stack.Screen name="CreateSwapScreen" component={CreateSwapScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="MySwapDetails" component={MySwapDetailsScreen} />
                <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                <Stack.Screen name="ContactUs" component={ContactUsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

