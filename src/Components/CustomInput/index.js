import React, {useState} from 'react';
import {Container, InputField} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Pressable} from 'react-native';

const CustomInput = ({icon, placeholder, isPassword = false, ...rest}) => {
  const [togglePassword, setToggle] = useState(true);

  return (
    <Container>
      <Icon name={icon} size={20} color="black" />
      <InputField
        placeholder={placeholder}
        secureTextEntry={togglePassword ? isPassword : false}
        {...rest}
      />
      {isPassword && (
        <Pressable onPress={() => setToggle(!togglePassword)}>
          <Icon
            name={togglePassword ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </Pressable>
      )}
    </Container>
  );
};

export default CustomInput;
