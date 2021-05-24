import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity  } from 'react-native'
import { styles, colours } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pag1Screen = ({navigation}: Props) => {

    useEffect(() => {
      navigation.setOptions({
          headerLeft: () => (
              <TouchableOpacity 
                style={{
                    marginLeft: 10
                }}
                onPress={() => navigation.toggleDrawer()}
              >
                   <Icon name='menu-outline' size={35} color='grey' />
              </TouchableOpacity>
          )
        //   <Button title='Menu' onPress={() => navigation.toggleDrawer()}/>
      })
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 Screen</Text>
            <Button title='Ir página 2' onPress={ () => navigation.navigate('Pag2Screen')}/>
            {/* <Button title='Ir página persona' onPress={ () => navigation.navigate('PersonaScreen')}/> */}
            <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={ () => navigation.navigate('PersonaScreen', {id: 1, nombre: 'Techi'})} style={styles.botonGrande}>
                    <Icon name='person-add-outline' size={35} color='grey' />
                    <Text style={styles.botonGrandeTexto}>Techi</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate('PersonaScreen', {id: 2, nombre: 'Paula'})} style={{...styles.botonGrande, backgroundColor: 'orange'}}>
                    <Icon name='person-add-outline' size={35} color='grey' />  
                    <Text style={styles.botonGrandeTexto}>Paula</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
