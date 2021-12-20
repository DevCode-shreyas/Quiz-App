import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContest } from "../helpers/Context";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, gameState, setGameState, userName } =
    useContext(GameStateContest);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h2>
        {score} / {Questions.length}
      </h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
