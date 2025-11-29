import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Splash from './src/screens/Splash';
import Main from './src/screens/Main';

const Stack = createStackNavigator();

export default function App(){
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={()=>setShowSplash(false)} />;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} options={{ title: 'Crear Cuenta' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
