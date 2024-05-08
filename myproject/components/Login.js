import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    const goToSignup = () => {
        navigation.navigate('Signup');
    }
    return (
        <View style={styles.container}>
            <Text>Login page</Text>
            <TouchableOpacity onPress={goToSignup} style={styles.btn} activeOpacity={0.7}>
                <Text style={styles.text}>Go to Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: '#03b97e',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginTop: 20
    },
    text: {
        fontSize: 17,
        color: '#fff'
    }
})