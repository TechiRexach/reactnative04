import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 2 Screen effect')
        }, [])

    return (
        <View>
            <Text>Tab 2 Screen</Text>
        </View>
    )
}
