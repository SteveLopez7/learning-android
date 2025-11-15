import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { supabase } from "../../supabase/supabase";


function Register({ navigation }: any) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  // Maneja el cambio de cada campo
  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleRegister = async () => {
    console.log("BOTÓN PRESIONADO!");
    const { first_name, last_name, phone_number, email, password } = formData;

    if (!first_name || !last_name || !phone_number || !email || !password) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    try {

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name,
            last_name,
            phone_number,
          },
        },
      });

      if (error) {
        console.log("Error completo:", error);
        Alert.alert("Error", `Código: ${error.status || 'N/A'} - ${error.message}`);
        return;
      }

      console.log("Registro exitoso:", data);
      
      // Usuario registrado exitosamente
      Alert.alert(
        "Registro exitoso", 
        "Revisa tu email para confirmar tu cuenta antes de iniciar sesión",
        [{ text: "OK", onPress: () => navigation?.navigate("Login") }]
      );
      
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
      });
      
    } catch (err) {
      console.log("Error inesperado:", err);
      Alert.alert("Error", "Problema de conexión");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#9c9c9cff"
        onChangeText={(value) => handleChange("first_name", value)}
        value={formData.first_name}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#9c9c9cff"
        onChangeText={(value) => handleChange("last_name", value)}
        value={formData.last_name}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor="#9c9c9cff"
        onChangeText={(value) => handleChange("phone_number", value)}
        value={formData.phone_number}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#9c9c9cff"
        keyboardType="email-address"
        onChangeText={(value) => handleChange("email", value)}
        value={formData.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#9c9c9cff"
        secureTextEntry
        onChangeText={(value) => handleChange("password", value)}
        value={formData.password}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.btnLoginText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation?.navigate("Login")}>
        <Text style={styles.link}>Ya tengo una cuenta. Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 12,
    borderWidth: 1,
    borderColor: "#9c9c9cff",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#00a680",
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    color: "#00a680",
    fontWeight: "bold",
    marginTop: 10,
  },
});
