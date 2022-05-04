import React from "react";

class InformacaoEnsinoSuperior extends React.Component {
    render(){
        return(
            <>
            <div className={'formulario'}>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <div className={'dados-formulario'}>
                    <div>
                        <label name={'Graduação'}>5.  Por que você não terminou um curso de graduação?</label> <br/>
                        <input type={'text'} name={'curso'}  />
                    </div> 

                    <div>
                        <label name={'unidadeEnsino'}>6. Você fez algum curso complementar?</label> <br/>
                        <select>
                            <option> Nenhum           </option>
                            <option> Curso técnico    </option>
                            <option> Curso de inglês  </option>
                        </select>
                    </div>
                    
                    <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                </div>  
            </div>
            </>
        );
    }
}
export default InformacaoEnsinoSuperior;