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

class InformacaoEnsinoSuperior extends React.Component {
    render(){
        return(
            <Formulario>
                <Etapa>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Etapa>
                <DadosFormulario>
                    <Valores>
                        <label name={'Graduação'}>5.  Por que você não terminou um curso de graduação?</label> <br/>
                        <input type={'text'} name={'curso'}  />
                    </Valores> 

                    <Valores>
                        <label name={'unidadeEnsino'}>6. Você fez algum curso complementar?</label> <br/>
                        <select>
                            <option> Nenhum           </option>
                            <option> Curso técnico    </option>
                            <option> Curso de inglês  </option>
                        </select>
                    </Valores>
                    
                    <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                </DadosFormulario>  
            </Formulario>
        );
    }
}
export default InformacaoEnsinoSuperior;