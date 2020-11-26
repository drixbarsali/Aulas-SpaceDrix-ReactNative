import React from 'react';
import {Container, InputField} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const CustomInput = ({icon, placeholder, isPassword = false, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="black" />
      <InputField
        placeholder={placeholder}
        secureTextEntry={isPassword}
        {...rest}
      />
    </Container>
  );
};

export default CustomInput;
