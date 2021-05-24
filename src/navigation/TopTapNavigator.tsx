import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colours } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

  const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator 
      style={{ paddingTop: top }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: colours.primary, 
        showIcon: true, 
        indicatorStyle:{
          backgroundColor: colours.primary
        },
        style:{ 
          borderTopColor: colours.primary,
          shadowColor: 'transparent',
          elevation: 0
      }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused }) => {
           
            let iconName: string = '';

            switch (route.name) {
                case 'Chat':
                  iconName = 'chatbox-ellipses-outline'
                    break;

                case 'Contacts':
                    iconName = 'people-outline'
                    break;

                case 'Album':
                    iconName = 'images-outline'
                    break;
            }
            return <Icon name={iconName} size={20} color={color} />
        }
    })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
