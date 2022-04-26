import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Beatriz" 
          descricao="Oi, eu sou a Beatrz. Sou estudante da Labenu. Adoro programação e estou sempre a procura de mais aprendizado."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/5238/5238486.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
            imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1650683170~hmac=8c8c6e0378f242af301e5db439e4faaf" 
            nome="Email: " 
            descricao="Exemplo@gmail.com" 
        />

        <CardPequeno 
            imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" 
            nome="Endereço: " 
            descricao=" Rua da Perfeição" 
        />
      </div>

      <div className="page-section-container">
        <h2>Formações Acadêmicas</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://www.ifpe.edu.br/campus/paulista/noticias/proifpe-preenche-vagas-remanescentes/if.jpg/@@images/image.jpeg" 
          nome="Instituto Federal do Paraná - IFPR" 
          descricao="Formação de técnicos em Informática, integrado com o ensino médio" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
