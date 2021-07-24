import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as S from './styled'; 

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
        <main role='main'>
            <S.Section>
                {data.map((prod, index )=> (
                        <S.Div>
                        <img src={prod.photo} alt="homem aranha" width="200" key={prod.id}/>
                        <S.H2>{prod.name}</S.H2>
                        <S.Span>{prod.description}</S.Span>
                        <S.H3>R$ {prod.priceOld}.00</S.H3>
                        <S.H4>R$ {prod.priceNow}.00</S.H4>
                        <S.Button type="button" onClick={()=>Cart(index)}>Adicionar ao carrinho</S.Button>
                        </S.Div>
                    ))
                }  
            
            </S.Section>
            <S.DivB><S.ButtonC type='button' onClick={()=>Cadastrar()}><b>Cadastrar</b></S.ButtonC></S.DivB>
        </main>
    )
}