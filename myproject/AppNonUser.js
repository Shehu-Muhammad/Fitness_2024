import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Stack = createNativeStackNavigator();
export default function AppNonUser() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})