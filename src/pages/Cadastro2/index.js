import React, {useState} from 'react';

export default function Home() {

    const usersItems = {
        itemName: '',
        amount: '',
        price: '',
        image:'',
        description:''
    }

    const [items, setItems] = useState({usersItems})

    const submit = (e) => {
        e.preventDefault();
        console.log(items)
        
      }

    return(
        <>
        <form onSubmit={submit}>
               <fieldset>
                   <legend>Produto a ser Cadastrado</legend>
                   <label>Nome do Produto</label>
                   <input type='text' id='itemName' name='itemName' className='formCadastro' onChange={e => setItems({...items, itemName: e.target.value})}></input>

                   <label>Quantidade</label>
                    <input type='number' id='amount' name='amount' className='formCadastro' onChange={e => setItems({...items, amount: e.target.value})}/>

                    <label>Preço R$</label>
                    <input type='number' id='price' name='price' className='formCadastro' onChange={e => setItems({...items, price: e.target.value})}/>

                    <label>Imagens do produto</label>
                    <input type='file' id='image' name='image' accept='image/*' className='formCadastro' onChange={e => setItems({...items, image: e.target.value})}/>

                    <label>Descrição do produto</label>
                    <textarea name='description' id='description' cols='45' rows='5' placeholder='Descreva seu produto' onChange={e => setItems({...items, description: e.target.value})}></textarea>
               </fieldset>
               <button type='submit'>Cadastrar</button>
            </form>
        </>

    )
}