import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles, colours } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    const {top} = useSafeAreaInsets()
    
    useEffect(() => {
    console.log('Tab 1 Screen effect')
    }, [])

    return (
        <View style={{...styles.globalMargin, marginTop: top}}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="fast-food-outline"  />
                <TouchableIcon iconName="key-outline"  />
                <TouchableIcon iconName="golf-outline"  />
                <TouchableIcon iconName="paw-outline" />
                <TouchableIcon iconName="logo-react"  />
                <TouchableIcon iconName="logo-github" />
            </Text>
        </View>
    )
}
