import React from 'react';
import { View, InteractionManager, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import styles from './styles';
import Navigation from './Navigation'

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        component={Navigation}
        name='Navigation'
      />
    </Drawer.Navigator>
  )
}
