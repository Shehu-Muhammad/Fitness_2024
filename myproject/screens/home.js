import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <Image source={require('../assets/Images/cam-morin-gTb46ltlKOI-unsplash.jpg')} style={globalStyles.backgroundImage}/>
        <View style={globalStyles.buttons}>
          <Button title='sign up' color='white' onPress={() => setModalOpen(true)} />
          <Button title='login'color='white' onPress={() => setModalOpen(true)} />
        </View>
        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});