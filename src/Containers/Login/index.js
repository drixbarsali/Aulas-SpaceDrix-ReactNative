/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Container,
  TextLogin,
  ButtonLogin,
  ButtonText,
  RegisterText,
} from './styles';

import CustomInput from './../../Components/CustomInput';

import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
  const nav = useNavigation();
  return (
    <Container>
      <Icon name="alert-triangle" size={100} />
      <TextLogin>Faça seu Login</TextLogin>
      <CustomInput icon="mail" placeholder="Preencha seu Email" />
      <CustomInput
        icon="lock"
        placeholder="Preencha sua Senha"
        isPassword={true}
      />
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
