import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Button 
        style='outline'
        onPress={() => navigation.navigate('Login')}
      >
        <Text>ENTRAR</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.text_white}>CRIAR CONTA</Text>
      </Button>
    </View>
  )
}
