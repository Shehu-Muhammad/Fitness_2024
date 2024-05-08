import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';

export default function login() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
    <>
        <Button title='login' color='white' onPress={() => setModalOpen(true)} />
        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
              />
              <Text>Login</Text>
              <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, actions) => {console.log(values); actions.resetForm()}}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput style={styles.input}
                    placeholder='username'
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    />
                    <TextInput style={styles.input}
                    placeholder='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
                )}
            </Formik>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    </>
    )
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
      marginTop: 40,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
  });