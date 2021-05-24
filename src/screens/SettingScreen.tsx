import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colours, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets()

    const {authState} = useContext(AuthContext)

    return (
        <View style={{ ...styles.globalMargin, marginTop: insets.top + 20}}>
            <Text style={styles.title}>Setting Screens</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favoriteIcon && (<Icon name={authState.favoriteIcon} size={150} color={colours.primary}/>)
            }
            {/* <Icon name={authState.favoriteIcon!} size={150} color={colours.primary}/> */}
            
        </View>
    )
}
