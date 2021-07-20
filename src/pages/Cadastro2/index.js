import React, {useState} from 'react';

export default function Home() {

    const [post, setPost] = useState({})

    const submit = (e) => {

        e.preventDefault();
        console.log(post)
        
      }

    return(
        <>
        <form onSubmit={submit}>
                <label>Title: </label>
                    <input type="text" name="title" onChange={e => setPost({...post, title: e.target.value})}/>
                    <br />
                    <label>Post Content: </label>
                    <textarea name="content" onChange={e => setPost({...post, content: e.target.value})}>
                    </textarea>
                    <br />
                    <input type="submit"/>
            </form>
        </>

    )
}