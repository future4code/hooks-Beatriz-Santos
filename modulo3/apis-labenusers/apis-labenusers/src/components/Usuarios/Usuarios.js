import React from "react";
import axios from "axios";

class Usuarios extends React.Component {

    // pessoas = () => {
    //     axios.get(url, headers).then((res) => {
    //       return(res.data)
    //     }).catch((err) =>{
    //       console.log('Algo deu errado');
    //     })
    //   }
    
    //   adicionar = () => {
    //     const body = {
    //       name: "",
    //       email: ""
    //     }
    //     axios.post(url, body, headers).then((res) => {
    //         console.log(' Foi criado com sucesso')
    //         // this.pessoas();
    //     }).catch((err) => {
    //       console.log('erro')
    //     })
    //   }
    
    render(){
        return(
            <>
                <h1>Usuarios</h1>
            </>
        )
    }
}
export default Usuarios