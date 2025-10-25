import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

function Login(){
    return(
        <View style={styles.container}>
            <Text>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Sucorreo@gmail.com"
                placeholderTextColor='#9c9c9cff'
            />
             <TextInput
                style={styles.input}
                placeholder="*************"
                placeholderTextColor='#9c9c9cff'
                secureTextEntry
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnLoginText}> Sign Up </Text>
            </TouchableOpacity>



        
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: 12,
        borderWidth: 1,
        borderColor: "#9c9c9cff",
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: "#00a680",
        borderRadius: 12,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#9c9c9cff",
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        
    },
    btnLoginText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    }
});
