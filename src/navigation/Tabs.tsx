import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colours } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}


//ANDROID
const TabAndroidBottom = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <TabAndroidBottom.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colours.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused }) => {
           
            let iconName: string = '';

            switch (route.name) {
                case 'Tab1Screen':
                    iconName = 'earth-outline'
                    break;

                case 'Tab2Screen':
                    iconName = 'finger-print-outline'
                    break;

                case 'StackNavigator':
                    iconName = 'mail-unread-outline'
                    break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }
    })}
    >
      <TabAndroidBottom.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <TabAndroidBottom.Screen name="Tab2Screen" component={TopTapNavigator} />
      <TabAndroidBottom.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </TabAndroidBottom.Navigator>
  );
}

//IOS
const TabIOSBottom = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <TabIOSBottom.Navigator 
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    tabBarOptions={{ 
        activeTintColor: colours.primary, 
        style:{ 
            borderTopColor: colours.primary,
            borderTopWidth: 0,
            elevation: 0
        },
        labelStyle: {
            fontSize: 15
        }
    }}
    screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
           
            let iconName: string = '';

            switch (route.name) {
                case 'Tab1Screen':
                    iconName = 'earth-outline'
                    break;

                case 'Tab2Screen':
                    iconName = 'finger-print-outline'
                    break;

                case 'StackNavigator':
                    iconName = 'mail-unread-outline'
                    break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }
    })}
    >
        {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <TabIOSBottom.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <TabIOSBottom.Screen name="Tab2Screen" component={TopTapNavigator} />
      <TabIOSBottom.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </TabIOSBottom.Navigator>
  );
}