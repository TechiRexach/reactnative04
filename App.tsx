import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { MenuLateralBasico } from './src/navigation/DrawerNavigator';
import { MenuLateral } from './src/navigation/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <MenuLateralBasico/> */}
        {/* <StackNavigator/> */}
        <MenuLateral/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

 export default App