import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import { supabase } from '../../supabase/supabase';

function Login({ navigation }: any){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Completa todos los campos');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                if (error.message.includes('Email not confirmed')) {
                    Alert.alert('Error', 'Debes confirmar tu email antes de iniciar sesión. Revisa tu bandeja de entrada.');
                } else {
                    Alert.alert('Error', error.message);
                }
                return;
            }

            if (data.session) {
                navigation.navigate('Main');
            }
        } catch (err) {
            Alert.alert('Error', 'Problema de conexión');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Sucorreo@gmail.com"
                placeholderTextColor='#9c9c9cff'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
             <TextInput
                style={styles.input}
                placeholder="*************"
                placeholderTextColor='#9c9c9cff'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.btnLoginText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation?.navigate('Register')}>
                <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
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
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    link: {
        color: '#00a680',
        fontWeight: 'bold',
        marginTop: 10,
    }
});
