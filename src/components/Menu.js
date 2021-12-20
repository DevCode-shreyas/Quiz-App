import "../App.css";
import { useContext } from "react";
import { GameStateContest } from "../helpers/Context";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContest);

  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. Sachin Tendulkar"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
