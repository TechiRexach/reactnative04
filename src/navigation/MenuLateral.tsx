import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles, colours } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
    //Cambiarlo de lado
        // drawerPosition='right'
    //Dependiendo de si esta horizontal o vertical
        drawerType={ width >= 768 ? 'permanent' : 'front'}
        drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
   return (
       <DrawerContentScrollView>
           <View style={styles.avatarContainer}>
               <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}
               style={styles.avatar}/>
           </View>

           <View style={styles.menuContainer}>
               <TouchableOpacity style={{...styles.menuButton, flexDirection: 'row'}} onPress={() => navigation.navigate('Tabs')}>
                    <Icon name='navigate-outline' size={20} color={colours.primary} />
                   <Text style={styles.menuText}> Tabs</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{...styles.menuButton, flexDirection: 'row'}} onPress={() => navigation.navigate('SettingScreen')}>
                    <Icon name='settings-outline' size={20} color={colours.primary} />
                    <Text style={styles.menuText}> Settings</Text>
               </TouchableOpacity>
           </View>
       </DrawerContentScrollView>
   )
}