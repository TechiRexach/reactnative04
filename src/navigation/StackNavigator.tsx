import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pag1Screen } from '../screens/Pag1Screen';
import { Pag2Screen } from '../screens/Pag2Screen';
import { Pag3Screen } from '../screens/Pag3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
  Pag1Screen: undefined,
  Pag2Screen: undefined,
  Pag3Screen: undefined,
  PersonaScreen: { id: number, nombre: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    // initialRouteName='primera pagina que quieras mostrar'
    screenOptions={{
      //Quitar linea header
      headerStyle: {
        //Andoid
        elevation: 0,
        //Ios
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="Pag1Screen" options={{title:'Página 1'}} component={Pag1Screen} />
      <Stack.Screen name="Pag2Screen" options={{title:'Página 2'}} component={Pag2Screen} />
      <Stack.Screen name="Pag3Screen" options={{title:'Página 3'}} component={Pag3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}