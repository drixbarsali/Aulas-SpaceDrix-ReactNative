import React from 'react';

import {Container, Data, Hora, Confirmar, TextButton} from './styles';

const AgendaItem = ({data, hora, disponivel}) => {
  return (
    <Container enable={disponivel}>
      <Data>{data}</Data>
      <Hora>{hora}</Hora>
      <Confirmar enable={disponivel} disabled={!disponivel}>
        <TextButton>{disponivel ? 'Agendar' : 'Não Disponível'}</TextButton>
      </Confirmar>
    </Container>
  );
};

export default AgendaItem;
