/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  Container,
  ButtonLogin,
  ButtonText,
  RegisterText,
  ErrorText,
} from './styles';
import CustomInput from './../../Components/CustomInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');

  const settingEmail = (e) => {
    setEmail(e.nativeEvent.text);
  };
  const settingPassword = (e) => {
    setPassword(e.nativeEvent.text);
  };
  const setConfirPasword = (e) => {
    setConfirm(e.nativeEvent.text);
  };

  const enviar = () => {
    if (password === confirmPassword) {
      setError(false);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setPassword('');
          setConfirm('');
          setEmail('');
          nav.navigate('MenuHome');
          console.log('Usuário Logado');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setError(true);
            setErrorText('Email Já Cadastrado');
          }

          if (error.code === 'auth/invalid-email') {
            setError(true);
            setErrorText('Email inválido');
          }

          console.error(error);
        });
    } else {
      setError(true);
      setErrorText('Senhas não Conferem');
    }
    console.log(email, password, confirmPassword);
  };

  return (
    <Container>
      <ErrorText>{error && errorText} </ErrorText>
      <RegisterText>Registre-se</RegisterText>
      <CustomInput
        icon="mail"
        onChange={settingEmail}
        placeholder="Preencha seu Email"
        value={email}
      />
      <CustomInput
        icon="lock"
        placeholder="Preencha sua Senha"
        isPassword={true}
        onChange={settingPassword}
        value={password}
      />
      <CustomInput
        icon="lock"
        placeholder="Confirme sua Senha"
        isPassword={true}
        onChange={setConfirPasword}
        value={confirmPassword}
      />
      <ButtonLogin onPress={enviar}>
        <ButtonText>Register</ButtonText>
      </ButtonLogin>
    </Container>
  );
};

export default Login;
