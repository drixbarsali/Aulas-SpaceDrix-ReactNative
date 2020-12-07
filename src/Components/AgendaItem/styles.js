import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  opacity: ${(props) => (props.enable ? 1 : 0.3)};
`;

export const Data = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  text-align: right;
`;

export const Hora = styled.Text`
  font-size: 20px;
  width: 100%;
  text-align: right;
`;

export const Confirmar = styled.Pressable`
  width: 100%;
  background-color: ${(props) => (props.enable ? '#33ff33' : 'lightgray')};
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
