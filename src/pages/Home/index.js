import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Home() {

    const history = useHistory();

    const Cadastrar=()=>{
        history.push('/cadastroUsuario');
    }

    const [data, setData] = useState([]);

    useEffect(()=>{
        api.get('').then(
            response => {
                setData(response.data);
            }
        )
    }, [])

    const Cart=(index) =>{
        const prodStorage = JSON.stringify(data[index]);
        localStorage.setItem(`produto-${index}`,prodStorage);
    }

    return(
        <>
        <h1>Home</h1>
        <section>
            {data.map((prod, index )=> (
                    <div>
                    <img src={prod.photo} alt="homem aranha" width="200" key={prod.id}/>
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>{prod.price}</h6>
                    <button type="button" onClick={()=>Cart(index)}>Adicionar ao carrinho</button>
                    </div>
                ))
            }  
        </section>
        <button type='button' onClick={()=>Cadastrar()}>Cadastrar</button>
        </>
    )
}