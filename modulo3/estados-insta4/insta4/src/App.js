import React from 'react';
import styled from 'styled-components';

//Componente post é filho de App
import Post from './components/Post/Post';

// Estilização do MAINCONTAINER
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        {/* Chamando o componente post e passando os valores do props */}
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/158'}
         />
        <Post
          nomeUsuario={'Beatriz'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/180'}
        />
      </MainContainer>
    );
  }
}

export default App;
