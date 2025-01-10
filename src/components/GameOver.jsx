import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>End game</h1>
      <button onClick={retry}>Play again</button>
    </div>
  )
}

export default GameOver
