import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

export default function Home() {

    const history = useHistory();

    useEffect(()=>{
        let registerItem = localStorage.getItem('registerItem');
        if(registerItem === null){
            history.push('/');
        }   
    }, []);

    const usersItems = {
        itemName: '',
        amount: '',
        price: '',
        image:'',
        description:''
    }

    const [items, setItems] = useState(usersItems)


    function submit(){
        localStorage.setItem('registerItem', JSON.stringify(items)); 
        history.push('/');  
      }

    return(
        <>
        <form onSubmit={submit}>
               <fieldset>
                   <legend>Produto a ser Cadastrado</legend>
                   <label>Nome do Produto</label>
                   <input type='text' id='itemName' name='itemName' value={items.itemName} className='formCadastro' onChange={e => setItems({...items, itemName: e.target.value})}></input>

                   <label>Quantidade</label>
                    <input type='number' id='amount' name='amount' value={items.amount} className='formCadastro' onChange={e => setItems({...items, amount: e.target.value})}/>

                    <label>Preço R$</label>
                    <input type='number' id='price' name='price' value={items.price} className='formCadastro' onChange={e => setItems({...items, price: e.target.value})}/>

                    <label>Imagens do produto</label>
                    <input type='file' id='image' name='image' accept='image/*' value={items.image} className='formCadastro' onChange={e => setItems({...items, image: e.target.value})}/>

                    <label>Descrição do produto</label>
                    <textarea name='description' id='description' value={items.description}  cols='45' rows='5' placeholder='Descreva seu produto' onChange={e => setItems({...items, description: e.target.value})}></textarea>
               </fieldset>
               <button type='submit'>Cadastrar</button>
            </form>
        </>

    )
}