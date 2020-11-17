import React from 'react';
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

import ImagemFundo from '../../Assets/Images/fundo.jpeg';

const Login = () => {
  const nav = useNavigation();
  return (
    <Container>
      <Logo source={ImagemFundo} />
      <TextLogin>Faça seu Login</TextLogin>
      <InputField placeholder="Digite seu Email" />
      <InputField placeholder="Digite sua Senha" />
      <ButtonLogin>
        <ButtonText>Login</ButtonText>
      </ButtonLogin>
      <Pressable onPress={() => nav.navigate('Register')}>
        <RegisterText>Se você não possui cadastro, Registre-se</RegisterText>
      </Pressable>
    </Container>
  );
};

export default Login;
