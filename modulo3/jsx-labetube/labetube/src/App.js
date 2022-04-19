
import './App.css';

function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="tela-inteira">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"/>
      </header>
      <main>
        <nav className="menu-vertical">
          <ul>
              <li class="botoes-meunu-vertical">Início</li>
              <li class="botoes-meunu-vertical">Em alta</li>
              <li class="botoes-meunu-vertical">Inscrições</li>
              <hr></hr>
              <li class="botoes-meunu-vertical">Originais</li>
              <li class="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>
        <section class="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="vídeo"/>
            <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="vídio"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media7" onclick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="vídeo"/>
              <h4>vídeo</h4>
          </div>
        </section>
      </main>
      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;
