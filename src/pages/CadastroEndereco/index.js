import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Cadastro(props) {

        const history = useHistory();

        useEffect(()=>{
            let registerAdress = localStorage.getItem('registerAdress');
            if(registerAdress === null){
                history.push('/');
            }   
        }, []);

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
            history.push('/cadastroProduto'); 
          }

    return(
        <>
            <h3>Cadastro Cliente</h3>

            <form  onSubmit={submit}>
                <fieldset>
                    <legend className='titleForm'>Endereço do Usuário</legend>
                    <label>Endereço</label>
                    <input type='text' id='address' name='address' value={adress.adress} className='formCadastro' onChange={e => setAdress({...adress, adress: e.target.value})}/>

                    <label>Bairro</label>
                    <input type='text' id='district' name='district' value={adress.district} className='formCadastro' onChange={e => setAdress({...adress, district: e.target.value})}/>

                    <label>Complemento</label>
                    <input type='text' id='complement' name='complement' value={adress.complement} className='formCadastro' onChange={e => setAdress({...adress, complement: e.target.value})}/>
    
                    <label>Cidade</label>
                    <input type='text' id='city' name='city' value={adress.city} className='formCadastro' onChange={e => setAdress({...adress, city: e.target.value})}/>

                    <label>CEP</label>
                    <input type='number' id='cep' name='cep' value={adress.cep}  className='formCadastro' onChange={e => setAdress({...adress, cep: e.target.value})}/>
    
                    <label>UF</label>
                    <input type='text' id='register' name='register' value={adress.uf} className='formCadastro' onChange={e => setAdress({...adress, uf: e.target.value})}/>

                    <label>Pais</label>
                    <input type='text' id='country' name='country' value={adress.country} className='formCadastro' onChange={e => setAdress({...adress, country: e.target.value})}/>
                </fieldset>
            <button type='submit'>Cadastrar</button>
            </form>  
        </>
    )
}