import styled from 'styled-components/native';

export const Container = styled.View`
  background: lightgray;
  justify-content: flex-start;
  padding: 10px;
  flex: 1;
`;

export const BotaoLogout = styled.Pressable`
  width: 100%;
  background-color: #ff3300;
  border-radius: 8px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextBotao = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
