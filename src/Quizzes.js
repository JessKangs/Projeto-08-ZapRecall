export default function Quizzes () {
    const perguntas = [];

    return (
        <>

            <div className="titulo-pag">
                <img className="logo" src="./img\image 2.svg" alt=""></img>
                <h1>ZapRecall</h1>
            </div>

            <div className="cards">

                <div className="card">
                <h2>Pergunta 1</h2>
                <ion-icon name="play-outline"></ion-icon>
                </div>

                <div className="card virado">
                <h2>O que é JSX?</h2>
                <ion-icon name="reload"></ion-icon>
                </div>

                <div className="card virado resposta">
                <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
                
                <div className="botoes">
                <button className="red">Não lembrei</button>
                <button className="orange">Quase não lembrei</button>
                <button className="green">Zap!</button>
                </div>

                </div>

            </div>

            <div className="botStatus">
                <h3>0/4 CONCLUÍDOS</h3>
            </div>

        </>
    )

}

// spin icon <ion-icon name="reload"></ion-icon>
//wrong <ion-icon name="close-circle"></ion-icon>
//certo <ion-icon name="checkmark-circle"></ion-icon>
//confuso <ion-icon name="help-circle"></ion-icon>