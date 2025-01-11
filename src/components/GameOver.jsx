import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>End game</h1>
      <h2>Your final score was: <span>{score}</span></h2>
      <button onClick={retry}>Play again</button>
    </div>
  )
}

export default GameOver
