import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import {View, Text} from 'react-native';
import CustomInput from './../../Components/CustomInput';
import {Button} from './styles';

const Home = () => {
  const [nome, SetNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const saveData = () =>{
    database().ref('/users/').set({
      nome: nome,
      email: email,
      idade: idade,
    });

  }
  

  const addNome = (e) => {
    SetNome(e.nativeEvent.text);
  };
  const addIdade = (e) => {
    setIdade(e.nativeEvent.text);
  };
  const addEmail = (e) => {
    setEmail(e.nativeEvent.text);
  };
  return (
    <View>
      <CustomInput
        placeholder="Digite Seu Nome"
        onChange={addNome}
        value={nome}
      />
      <CustomInput
        placeholder="Digite sua Idade"
        onChange={addIdade}
        value={idade}
      />
      <CustomInput
        placeholder="Digite seu Email"
        onChange={addEmail}
        value={email}
      />

      <Button onPress={saveData}>
        <Text>Gravar no Realtime Database</Text>
      </Button>
    </View>
  );
};

export default Home;
