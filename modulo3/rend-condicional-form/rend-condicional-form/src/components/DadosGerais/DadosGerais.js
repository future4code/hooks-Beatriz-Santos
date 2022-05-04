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

class DadosGerais extends React.Component {
    render(){
        
        return(
            <Formulario>
                <Etapa>ETAPA 1 - DADOS GERAIS</Etapa>
                    <DadosFormulario>
                        <Valores>
                            <label name={'nome'}>1. Qual seu nome? </label> <br/>
                            <input type={'text'} name={'nome'}/>
                        </Valores>

                        <Valores>
                            <label name={'idade'}>2. Qual sua idade?</label> <br/>
                            <input type={'text'} name={'nome'} />
                        </Valores>

                        <Valores>
                            <label name={'email'}>3. Qual seu email?</label><br/>
                            <input type={'text'} name={'nome'} />
                        </Valores>

                        <Valores>
                            <label name={'escolaridade'}>4. Qual sua escolaridade?</label> <br/>
                            <select>
                                <option>  Ensino médio incompleto     </option>
                                <option>  Ensino médio completo       </option>
                                <option>  Ensino superior incompleto  </option>
                                <option>  Ensino superior completo    </option>
                            </select>
                        </Valores>

                        <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                        
                    </DadosFormulario>
                
            </Formulario>
        );
    }
}
export default DadosGerais;