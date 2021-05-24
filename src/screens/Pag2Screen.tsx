import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pag2Screen = () => {

    const navigation = useNavigation()

    useEffect(() => {
      navigation.setOptions({
          //Texto boton volver que aparecerá en la página siguiente a la que estemos
          title: 'Hola Mundo',
          //Cambiar texto boton volver IOS
          headerBackTitle: 'Atrás'
      })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 Screen</Text>

            <Button title='Ir página 3' onPress={ () => navigation.navigate('Pag3Screen')}></Button>
        </View>
    )
}
