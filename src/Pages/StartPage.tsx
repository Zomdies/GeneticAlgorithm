import React from 'react'

type StartPageProps = {
    startAlgorithm() : void
}

const StartPage : React.FC<StartPageProps> = ({startAlgorithm}) => {

    return (
        <div>
            <h1>Добро пожаловать</h1>
            <button onClick={startAlgorithm.bind(null)}>Запустить генетический алгоритм</button>
        </div>
    )
}

export default StartPage
