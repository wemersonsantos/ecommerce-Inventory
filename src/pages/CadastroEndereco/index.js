import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Cadastro(props) {

        const history = useHistory();

        const usersAdress = {
            adress: '',
            district: '',
            complement: '',
            city:'',
            cep:'',
            uf:'',
            country:''
        }

        const [adress, setAdress] = useState(usersAdress)
 
        function submit(){
            localStorage.setItem('registerAdress', JSON.stringify(adress));
            alert('Cadastro realizado com sucesso'); 
            history.push('/'); 
          }

    return(
        <>
            

            <S.Form  onSubmit={submit}>
                <S.H2>Cadastro do Endereço</S.H2>
                <S.Fieldset>
                    <S.Label>Endereço</S.Label>
                    <input type='text' id='address' name='address' value={adress.adress} className='formCadastro' onChange={e => setAdress({...adress, adress: e.target.value})}/>

                    <S.Label>Bairro</S.Label>
                    <input type='text' id='district' name='district' value={adress.district} className='formCadastro' onChange={e => setAdress({...adress, district: e.target.value})}/>

                    <S.Label>Complemento</S.Label>
                    <input type='text' id='complement' name='complement' value={adress.complement} className='formCadastro' onChange={e => setAdress({...adress, complement: e.target.value})}/>
    
                    <S.Label>Cidade</S.Label>
                    <input type='text' id='city' name='city' value={adress.city} className='formCadastro' onChange={e => setAdress({...adress, city: e.target.value})}/>

                    <S.Label>CEP</S.Label>
                    <input type='number' id='cep' name='cep' value={adress.cep}  className='formCadastro' onChange={e => setAdress({...adress, cep: e.target.value})}/>
    
                    <S.Label>UF</S.Label>
                    <input type='text' id='register' name='register' value={adress.uf} className='formCadastro' onChange={e => setAdress({...adress, uf: e.target.value})}/>

                    <S.Label>País</S.Label>
                    <input type='text' id='country' name='country' value={adress.country} className='formCadastro' onChange={e => setAdress({...adress, country: e.target.value})}/>
                </S.Fieldset>
            <S.Button type='submit'><b>Cadastrar</b></S.Button>
            </S.Form>  
        </>
    )
}