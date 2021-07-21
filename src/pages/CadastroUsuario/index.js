import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function Cadastro(props) {

        const history = useHistory();

        useEffect(()=>{
            let registerUser = localStorage.getItem('registerUser');
            if(registerUser === null){
                history.push('/');
            }   
        }, []);

        const usersRegister = {
            fullName: '',
            email: '',
            phone: '',
            cpfcnpj:'',
            rg:'',
            sex:''
        }

        const [users, setUsers] = useState(usersRegister)
 
        function submit(){
            localStorage.setItem('registerUser', JSON.stringify(users));   
            history.push('/cadastroEndereco'); 
          }

    return(
        <>
            <h3>Cadastro Cliente</h3>

            <form  onSubmit={submit}>
                <fieldset>
                    <legend className='titleForm'>Dados do Usuário</legend>
                    <label>Nome Completo</label>
                    <input type='text' id='name' name='fullName' value={users.fullName} className='formCadastro' onChange={e => setUsers({...users, fullName: e.target.value})} />
    
                    <label>Email</label>
                    <input type='email' id='email' name='email' value={users.email} className='formCadastro' onChange={e => setUsers({...users, email: e.target.value})}/>
    
                    <label>Telefone(DDD)</label>
                    <input type='number' id='phone' name='phone' value={users.phone} className='formCadastro' onChange={e => setUsers({...users, phone: e.target.value})}/>
    
                    <label>CPF/CNPJ</label>
                    <input type='number' id='register' name='register' value={users.cpfcnpj} className='formCadastro' onChange={e => setUsers({...users, cpfcnpj: e.target.value})}/>
    
                    <label>RG</label>
                    <input type='number' id='rg' name='rg' value={users.rg} className='formCadastro' onChange={e => setUsers({...users, rg: e.target.value})}/>
    
                    <label>Sexo</label>
                    <input type='radio' id='sex' name='sex' value='Masc' className='formCadastro' onChange={e => setUsers({...users, sex: e.target.value})}/><label>Masculino</label>
                    <input type='radio' id='sex' name='sex' value='Fem' className='formCadastro' onChange={e => setUsers({...users, sex: e.target.value})}/><label>Feminino</label>
                </fieldset>
            <button type='submit'>Cadastrar</button>
            </form>  
        </>
    )
}