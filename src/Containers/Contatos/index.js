import React from 'react';
import {Container, BotaoLogout, TextBotao} from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Contatos = () => {
  const nav = useNavigation();
  const logout = async () => {
    await AsyncStorage.setItem('logado', 'false');
    nav.navigate('Login');
  };
  return (
    <Container>
      <BotaoLogout onPress={logout}>
        <TextBotao>Logout</TextBotao>
      </BotaoLogout>
    </Container>
  );
};

export default Contatos;
