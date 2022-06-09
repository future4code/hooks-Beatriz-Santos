import React from 'react';

export default function Match(props){

    const pares = props.pares.length !== 0 ? props.pares.map((item) => {return <p>{item.name}</p>}) : 'Sem match';
    
    return(
        <>
            <h1>MATCHS</h1>
            <button onClick={props.onChangePage}>Perfil</button>
            {pares}
        </>
    )
}