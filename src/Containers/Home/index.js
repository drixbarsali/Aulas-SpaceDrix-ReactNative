import React from 'react';
import AgendaItem from '../../Components/AgendaItem';
import {ScrollView} from 'react-native';
import {Container} from './styles';
const Home = () => {
  const diasDisponiveis = [
    {
      id: 1,
      dia: '10/12/2020',
      hora: '13h00',
      disponivel: true,
    },
    {
      id: 2,
      dia: '10/12/2020',
      hora: '14h00',
      disponivel: false,
    },
    {
      id: 3,
      dia: '10/12/2020',
      hora: '15h00',
      disponivel: true,
    },
    {
      id: 4,
      dia: '11/12/2020',
      hora: '13h00',
      disponivel: true,
    },
    {
      id: 5,
      dia: '11/12/2020',
      hora: '14h00',
      disponivel: false,
    },
    {
      id: 6,
      dia: '13/12/2020',
      hora: '15h00',
      disponivel: true,
    },
  ];
  return (
    <Container>
      <ScrollView style={{padding: 10}}>
        {diasDisponiveis.map((item) => (
          <AgendaItem
            key={item.id}
            data={item.dia}
            hora={item.hora}
            disponivel={item.disponivel}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
