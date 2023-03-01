import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";

function CountPaths({ setGame, game }) {
  return (
    <>
      <CloseOpen content={<InputBox setGame={setGame} />} />
    </>
  );
}

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function InputBox({ setGame }) {
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === "6") {
      openModal(29);
      setGame();
    } else {
      alert("Toto není nejkratší délka");
    }
  };
  return (
    <>
      <div>
        <label>Počet cest:</label>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Zkontrolovat</button>
    </>
  );
}

export default CountPaths;
