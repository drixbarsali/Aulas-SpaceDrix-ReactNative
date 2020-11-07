/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, Pressable, Image} from 'react-native';

import ImagemFundo from './Assets/Images/fundo.jpeg';

const App = () => (
  <View
    style={{
      backgroundColor: '#ccc',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    }}>
    <Image source={ImagemFundo} style={{width: 150, height: 150}} />
    <Text
      style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 30}}>
      Faça seu Login
    </Text>
    <TextInput
      placeholder="Digite seu Email"
      style={{padding: 10, margin: 10, backgroundColor: 'white', width: '100%'}}
    />
    <TextInput
      placeholder="Digite sua Senha"
      style={{padding: 10, margin: 10, backgroundColor: 'white', width: '100%'}}
    />
    <Pressable
      style={{
        backgroundColor: '#ddd',
        padding: 10,
        margin: 10,
        width: '100%',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Login
      </Text>
    </Pressable>
    <Text
      style={{
        fontSize: 12,
      }}>
      Se você não possui cadastro, Registre-se
    </Text>
  </View>
);

export default App;
