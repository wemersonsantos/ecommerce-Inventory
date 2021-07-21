import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    function Cadastrar(){
        history.push('cadastroUsuario');
    }

    return(
        <>
        <h1>Home</h1>
        <button type='button' onClick={Cadastrar}>Cadastrar</button>
        </>
    )
}