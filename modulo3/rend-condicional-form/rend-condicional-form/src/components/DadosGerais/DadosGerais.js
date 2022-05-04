import React from "react";

class DadosGerais extends React.Component {
    render(){
        
        return(
            <div className={'formulario'}>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                    <div className={'dados'}>
                        <div>
                            <label name={'nome'}>1. Qual seu nome? </label> <br/>
                            <input type={'text'} name={'nome'}/>
                        </div>

                        <div>
                            <label name={'idade'}>2. Qual sua idade?</label> <br/>
                            <input type={'text'} name={'nome'} />
                        </div>

                        <div>
                            <label name={'email'}>3. Qual seu email?</label><br/>
                            <input type={'text'} name={'nome'} />
                        </div>

                        <div>
                            <label name={'escolaridade'}>4. Qual sua escolaridade?</label> <br/>
                            <select>
                                <option>  Ensino médio incompleto     </option>
                                <option>  Ensino médio completo       </option>
                                <option>  Ensino superior incompleto  </option>
                                <option>  Ensino superior completo    </option>
                            </select>
                        </div>

                        <button onClick = {this.props.mudarEstado}>Proxima Etapa</button>
                        
                    </div>
                
            </div>
        );
    }
}
export default DadosGerais;