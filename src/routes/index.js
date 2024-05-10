// src/routes/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LoginScreenAluno from '../screens/Login/Aluno';
import LoginScreenProfessor from '../screens/Login/Professor';
import RegisterScreenAluno from '../screens/Register/Aluno';
import RegisterScreenProfessor from '../screens/Register/Professor';
import ListScreen from '../screens/List';
import DentesRetosScreen from '../screens/Gears/Retos';
import DentesHelicoidaisScreen from '../screens/Gears/Helicoidais';
import DentesConicosScreen from '../screens/Gears/Conicos';
import TransmissaoScreen from '../screens/Gears/Transmissao'


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginAluno" component={LoginScreenAluno} options={{headerShown:false}}/>
        <Stack.Screen name="LoginProfessor" component={LoginScreenProfessor} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterAluno" component={RegisterScreenAluno} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterProfessor" component={RegisterScreenProfessor} options={{headerShown:false}}/>
        <Stack.Screen name="List" component={ListScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Retos" component={DentesRetosScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Helicoidais" component={DentesHelicoidaisScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Conicos" component={DentesConicosScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Transmissao" component={TransmissaoScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
