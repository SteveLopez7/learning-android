import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { supabase } from '../../supabase/supabase';

export default function Profile() {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || 'No disponible');
      }
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150/007BFF/FFFFFF?text=User' }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Perfil de Usuario</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userEmail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    color: '#f4ececff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});