import { useState } from "react";
import "./App.css";
import { wordsList } from "./data/words";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  // starts the secret word game
  const startGame = () => {
    const { word, category } = pickDictionary();

    // create an array of letters
    let wordLetters = word.toLowerCase().split("");
    console.log(wordLetters);
    console.log(word, category);

    setInitialState(word, category, wordLetters);
  };

  const pickDictionary = () => {
    const categories = Object.keys(words);
    const category = pickRandomElement(categories);

    const wordsFromCategory = words[category];
    const word = pickRandomElement(wordsFromCategory);
    return { word, category };
  };

  const pickRandomElement = (elements) => {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  const setInitialState = (word, pickedCategory, wordLetters) => {
    setPickedWord(word);
    setPickedCategory(pickedCategory);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    console.log(letter);
  };

  // restart the game
  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <>
      <div className="app">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  );
}

export default App;
