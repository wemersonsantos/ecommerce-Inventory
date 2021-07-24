import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    
    @media only screen and (min-width: 600px){
        flex: 1;
        flex-wrap: wrap;
        flex-direction: row;
    }
`

export const Div = styled.div`
    min-width: 300px;
    max-width: 302px;
    color: black;
    max-height: 342px;
    min-height: 340px;
    margin: .7rem auto;
    text-align: center;
    border: 1px solid gray;
    border-radius: .7rem;
    background-color: rgba(255,255,255, 0.7);
`
export const H2 = styled.h2`
    margin: 0;
    font-family: Arial;
`

export const Span = styled.span`
    font-family: Arial;
    padding: 0 .3rem;
`

export const H3 = styled.p`
    margin: 0;
    color: gray;
    font-size: 1.2rem;
    text-decoration: line-through;
    
`
export const H4 = styled.h4`
    margin: 0;
    
`

export const Button = styled.button`
    margin-bottom: 1rem;
    font-weight: bolder;
`
export const ButtonC = styled.button`
    min-width: 200px;
    padding: .7rem;
    margin: .6rem auto;
    font-size: 1rem;
    background-color: #f7ca18;
    border-radius: 1rem;
`
export const DivB = styled.div`
    display: flex;
`