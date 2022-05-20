import axios from 'axios';
import React from 'react';

let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    authorization: "beatriz-santos-hooks"
  }
}
  
class App extends React.Component {
  state = {
  }

  pessoas = () => {
    axios.get(url, headers).then((res) => {
      console.log(res.data)
    }).catch((err) =>{
      console.log('Algo deu errado');
    })
  }

  adicionar = () => {
    const body = {
      name: "",
      email: ""
    }
    axios.post(url, body, headers).then((res) => {
        console.log(' Foi criado com sucesso')
        // this.pessoas();
    }).catch((err) => {
      console.log('erro')
    })
  }

  render(){
    // const pessoas = this.state.pessoas.map((pessoas, index) => {
    //   return <li key={index}>{pessoas}</li>
    // })
    return (
      <div>
        {this.pessoas()}
      </div>
    );
  }
}

export default App;
