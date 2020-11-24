/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import {
  Container,
  TextLogin,
  Logo,
  InputField,
  ButtonLogin,
  ButtonText,
  RegisterText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImagemFundo from '../../Assets/Images/fundo.jpeg';

const Login = () => {
  async () =>
    await analytics().logSelectContent({
      content_type: 'clothing',
      item_id: 'abcd',
    });
  const nav = useNavigation();
  return (
    <Container>
      <Icon name="alert-triangle" size={100} />
      <TextLogin>Faça seu Login</TextLogin>
      <InputField placeholder="Digite seu Email" />
      <InputField placeholder="Digite sua Senha" />
      <ButtonLogin onPress={() => nav.navigate('MenuHome')}>
        <ButtonText>Login</ButtonText>
      </ButtonLogin>
      <Pressable onPress={() => nav.navigate('Register')}>
        <RegisterText>Se você não possui cadastro, Registre-se</RegisterText>
      </Pressable>
    </Container>
  );
};

export default Login;
