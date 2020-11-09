/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  TextLogin,
  Logo,
  InputField,
  ButtonLogin,
  ButtonText,
  RegisterText,
} from './style';
import ImagemFundo from './Assets/Images/fundo.jpeg';

const App = () => (
  <Container>
    <Logo source={ImagemFundo} />
    <TextLogin>Faça seu Login</TextLogin>
    <InputField placeholder="Digite seu Email" />
    <InputField placeholder="Digite sua Senha" />
    <ButtonLogin>
      <ButtonText>Login</ButtonText>
    </ButtonLogin>
    <RegisterText>Se você não possui cadastro, Registre-se</RegisterText>
  </Container>
);

export default App;
