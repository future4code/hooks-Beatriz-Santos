import React from "react";
import axios from "axios";

let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    authorization: "beatriz-santos-hooks"
  }
}

class InserirDados extends React.Component { 
    pessoas = () => {
        axios.get(url, headers).then((res) => {
          console.log (res.data)
        }).catch((err) =>{
          console.log('Algo deu errado');
        })
      }
    render(){
        return(
            <>
                <h1>Inserir Dados</h1>
                <div>{this.pessoas()}</div>
            </>
        )
    }
}
export default InserirDados