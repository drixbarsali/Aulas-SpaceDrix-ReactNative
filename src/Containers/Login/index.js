/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {
  Container,
  TextLogin,
  ButtonLogin,
  ButtonText,
  RegisterText,
} from './styles';

import CustomInput from './../../Components/CustomInput';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const nav = useNavigation();

  const doLogin = () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(email)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          nav.navigate('MenuHome');
        })
        .catch((error) => {
          Alert.alert('Login', 'Email ou senha não conferem');
        });
    } else {
      Alert.alert('Login', 'Digite um email válido');
    }
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const setEmailText = (e) => {
    setEmail(e.nativeEvent.text);
  };

  const setPasswordText = (e) => {
    setPassword(e.nativeEvent.text);
  };

  return (
    <Container>
      <Icon name="alert-triangle" size={100} />
      <TextLogin>Faça seu Login</TextLogin>
      <CustomInput
        onChange={setEmailText}
        icon="mail"
        value={email}
        placeholder="Preencha seu Email"
      />
      <CustomInput
        onChange={setPasswordText}
        icon="lock"
        value={password}
        placeholder="Preencha sua Senha"
        isPassword={true}
      />
      <ButtonLogin disabled={isDisabled} onPress={doLogin}>
        <ButtonText>Login</ButtonText>
      </ButtonLogin>
      <Pressable onPress={() => nav.navigate('Register')}>
        <RegisterText>Se você não possui cadastro, Registre-se</RegisterText>
      </Pressable>
    </Container>
  );
};

export default Login;
