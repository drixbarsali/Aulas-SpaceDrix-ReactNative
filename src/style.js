import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ccc;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TextLogin = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const InputField = styled.TextInput`
  padding: 10px;
  margin: 10px;
  width: 100%;
  background-color: white;
`;

export const ButtonLogin = styled.Pressable`
  background-color: #ddd;
  padding: 10px;
  margin: 10px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const RegisterText = styled.Text`
  font-size: 12px;
`;
