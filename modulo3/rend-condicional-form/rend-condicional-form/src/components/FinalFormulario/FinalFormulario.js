import React from "react";
import styled from 'styled-components'

const Final = styled.h2 `
    text-align:center;
`

class FinalFormulario extends React.Component {
    render(){
        return(
            <Final>
                <h1>Final Formulário</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Final>
        );
    }
}
export default FinalFormulario;