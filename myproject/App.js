import React from 'react';
// import Home from './screens/home';
// import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList, Modal,
//   TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { globalStyles } from './styles/global'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNonUser from './AppNonUser';
import {StatusBar} from 'expo-status-bar';

export default function App() {

  return (
    <>
        <NavigationContainer>
          <AppNonUser />
        </NavigationContainer>
        <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

