import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'

export default function redefinePass() {
  return (
    <View style={styles.container}>
        <Image source={logo}/>
      <View style={styles.containerInput}>
        <TextInput
          name='user'
          keyboardType='email-address'
          autoCapitalize='none'
          placeholder='Email'
          style={styles.input}
        />
      </View>
      <Button 
        style='outline'
        onPress={() => navigation.navigate('Index')}
      >
        <Text style={styles.text_primary}>ENTRAR</Text>
      </Button>
    </View>
  )
}
