import React from "react";
import styled from 'styled-components';

const Formulario = styled.div`
    width: 600px;
    margin: 0 auto;
`

const DadosFormulario = styled.div`
    text-align: center;
`

const Valores = styled.div`
    padding: 10px 10px;
`

const Etapa = styled.h2 `
    text-align:center;
`

class InformacaoEnsino extends React.Component {
    render(){
        return(
            <Formulario>
                <Etapa>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Etapa>
                <DadosFormulario>
                    <Valores>
                        <label name={'nome-curso'}>5. Qual o curso?</label> <br/>
                        <input type={'text'} name={'curso'}  />
                    </Valores> 

                    <Valores>
                        <label name={'unidade-de-ensino'}>6. Qual a unidade de ensino?</label> <br/>
                        <input type={'text'} name={'unidadeEnsino'} />
                    </Valores>

                    <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                </DadosFormulario>  
            </Formulario>
        );
    }
}
export default InformacaoEnsino;