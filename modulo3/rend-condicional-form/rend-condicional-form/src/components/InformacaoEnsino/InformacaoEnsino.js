import React from "react";

class InformacaoEnsino extends React.Component {
    render(){
        return(
            <div className="formulario">
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <div className="dados-formulario">
                    <div>
                        <label name={'nome-curso'}>5. Qual o curso?</label> <br/>
                        <input type={'text'} name={'curso'}  />
                    </div> 

                    <div>
                        <label name={'unidade-de-ensino'}>6. Qual a unidade de ensino?</label> <br/>
                        <input type={'text'} name={'unidadeEnsino'} />
                    </div>

                    <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                </div>  
            </div>
        );
    }
}
export default InformacaoEnsino;