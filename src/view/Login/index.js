import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Button 
        style='outline'
        onPress={false}
      >
        <Text>ENTRAR</Text>
      </Button>
      <Button>
        <Text style={styles.text_white}>CRIAR CONTA</Text>
      </Button>
    </View>
  )
}