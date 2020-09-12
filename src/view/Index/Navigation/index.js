import React from "react";
import { TouchableOpacity, TextInput, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons, Feather } from "@expo/vector-icons";

import Main from '../Main'


const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <Stack.navigator>
      <Stack.Screen
        component={Main} 
        name='Main'
      />
    </Stack.navigator>
  )
}
