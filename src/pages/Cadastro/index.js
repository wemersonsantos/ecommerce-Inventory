import React, {useState} from 'react';

export default function Cadastro(props) {

        const usersRegister = {
            fullName: '',
            email: '',
            phone: '',
            CPF_CNPJ:'',
            RG:'',
            Sex:''
        }

        const usersAdress = {
            adress: '',
            district: '',
            complement: '',
            city:'',
            CEP:'',
            UF:'',
            country:''
        }

        const [users, setUsers] = useState(usersRegister)
        const [adress, setAdress] = useState(usersAdress)

        const submit = (e) => {
            e.preventDefault();
            console.log(users);   
            console.log(adress);  
          }

    return(
        <>
            <h3>Cadastro Cliente</h3>

            <form onSubmit={submit}>
                <fieldset>
                    <legend className='titleForm'>Dados do Usuário</legend>
                    <label>Nome Completo</label>
                    <input type='text' id='name' name='fullName' className='formCadastro' onChange={e => setUsers({...users, fullName: e.target.value})} />
    
                    <label>Email</label>
                    <input type='email' id='email' name='email' className='formCadastro' onChange={e => setUsers({...users, email: e.target.value})}/>
    
                    <label>Telefone(DDD)</label>
                    <input type='number' id='phone' name='phone' className='formCadastro' onChange={e => setUsers({...users, phone: e.target.value})}/>
    
                    <label>CPF/CNPJ</label>
                    <input type='number' id='register' name='register' className='formCadastro' onChange={e => setUsers({...users, CPF_CNPJ: e.target.value})}/>
    
                    <label>RG</label>
                    <input type='number' id='rg' name='rg' className='formCadastro' onChange={e => setUsers({...users, RG: e.target.value})}/>
    
                    <label>Sexo</label>
                    <input type='radio' id='sex' name='sex' value='Masc' className='formCadastro' onChange={e => setUsers({...users, Sex: e.target.value})}/><label>Masculino</label>
                    <input type='radio' id='sex' name='sex' value='Fem' className='formCadastro' onChange={e => setUsers({...users, Sex: e.target.value})}/><label>Feminino</label>
                </fieldset>
                <fieldset>
                    <legend className='titleForm'>Endereço do Usuário</legend>
                    <label>Endereço</label>
                    <input type='text' id='address' name='address' className='formCadastro' onChange={e => setAdress({...adress, adress: e.target.value})}/>

                    <label>Bairro</label>
                    <input type='text' id='district' name='district' className='formCadastro' onChange={e => setAdress({...adress, district: e.target.value})}/>

                    <label>Complemento</label>
                    <input type='text' id='complement' name='complement' className='formCadastro' onChange={e => setAdress({...adress, complement: e.target.value})}/>
    
                    <label>Cidade</label>
                    <input type='text' id='city' name='city' className='formCadastro' onChange={e => setAdress({...adress, city: e.target.value})}/>

                    <label>CEP</label>
                    <input type='number' id='cep' name='cep' className='formCadastro' onChange={e => setAdress({...adress, CEP: e.target.value})}/>
    
                    <label>UF</label>
                    <input type='text' id='register' name='register' className='formCadastro' onChange={e => setAdress({...adress, UF: e.target.value})}/>

                    <label>Pais</label>
                    <input type='text' id='country' name='country' className='formCadastro' onChange={e => setAdress({...adress, country: e.target.value})}/>
                </fieldset>
            <button type='submit'>Cadastrar</button>
            </form>  
        </>
    )
}