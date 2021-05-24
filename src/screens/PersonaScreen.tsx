import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

    const params = route.params 

    const {changeUser} = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUser(params.nombre)
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
           
        </View>
    )
}

// interface RouterParams {
//     id: number,
//     nombre: string
// }

// interface Props extends StackScreenProps<any, any>{};

// export const PersonaScreen = ({route, navigation}: Props) => {

//     const params = route.params as RouterParams

//     useEffect(() => {
//         navigation.setOptions({
//             title: params.nombre
//         })
//     }, [])

//     return (
//         <View style={styles.globalMargin}>
//             <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
           
//         </View>
//     )
// }
