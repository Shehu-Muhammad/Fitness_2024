import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Signup from './signup';
import Login from './login';

export default function Home() {  
  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <Image source={require('../assets/Images/cam-morin-gTb46ltlKOI-unsplash.jpg')} style={globalStyles.backgroundImage}/>
        <View style={globalStyles.buttons}>
          <Signup />
          <Login />
        </View>
      </View>
    </>
  );
}
