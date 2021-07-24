import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled'

export default function Cadastro(props) {

        const history = useHistory();

        const usersRegister = {
            fullName: '',
            email: '',
            phone: '',
            cpfcnpj:'',
            rg:''
        }

        const [users, setUsers] = useState(usersRegister)
 
        function submit(){
            localStorage.setItem('registerUser', JSON.stringify(users));   
            history.push('/cadastroEndereco'); 
          }

    return(
        <>
            <S.H2>Cadastro do Cliente</S.H2>

            <S.Form onSubmit={submit}>
                <S.Fieldset>
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
    
                </S.Fieldset>
            <S.Button type='submit'><b>Cadastrar</b></S.Button>
            </S.Form>  
        </>
    )
}