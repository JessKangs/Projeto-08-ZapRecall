import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';
import { Link } from "react-router-dom"
import logo from "../src/assets/img/image 2.svg"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";


const deckJSX = [
    {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    }, 
    {
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes"
    },
    {
        pergunta:"Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
]




let cards = [];

//cards.push(numCards.map(flashcards => <Link to="/pergunta"><Card numero={flashcards.numero}/></Link>))
let number = 1;


export default function Cards (props) {
    const [question, setQuestion] = React.useState(false);
    const [answer, setAnswer] = React.useState(false)


    return (

        <>
            <div className="titulo-pag">
                <img className="logo" src={logo} alt=""></img>
                <h1>ZapRecall</h1>
            </div>

            <div className="cards">

            {deckJSX.map(flashcards => <Card pergunta={flashcards.pergunta} numero={number++}/>)}

            </div>

            <div className="botStatus">
                <h3>0/4 CONCLUÍDOS</h3>
            </div>

        </>
    )


    function Card (props) {
        return (
            <>
    
            { question ? (
            <div className="card virado" onClick={() => setAnswer(true)}>
                <h2>{props.pergunta}</h2>
                <ion-icon name="reload"></ion-icon>
            </div>
        ) :  (
            <div className="card" onClick={() => setQuestion(true)}>
                <h2>Pergunta {props.numero}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>)}
                
            </>
        )
    }


    function Answer (props) {
        { answer ? (
            <div className="card virado resposta">
                <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
                
                <div className="botoes">
                <button className="red">Não lembrei</button>
                <button className="orange">Quase não lembrei</button>
                <button className="green">Zap!</button>
                </div>
    
            </div>
        ) :  (
            <div className="card virado" onClick={() => setAnswer(true)}>
                <h2>{props.pergunta}</h2>
                <ion-icon name="reload"></ion-icon>
            </div>)}
    
    }

}

// {deckJSX.map(flashcards => <Card onClick={() => setClicked(true)} numero={flashcards.numero} pergunta={flashcards.pergunta}/>)}

//const [pagina, setPagina] = React.useState();




        
    // <div className="card virado">
    //     <h2>{props.pergunta}</h2>
    //     <ion-icon name="reload"></ion-icon>
    // </div> 








// spin icon <ion-icon name="reload"></ion-icon>
//wrong <ion-icon name="close-circle"></ion-icon>
//certo <ion-icon name="checkmark-circle"></ion-icon>
//confuso <ion-icon name="help-circle"></ion-icon>


