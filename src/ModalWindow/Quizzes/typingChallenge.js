import React, { useState, useEffect } from "react";

function TypingChallenge() {
  const [text, setText] = useState(
    "toto je ukázkový text, který teď musíš co nejrychleji přepsat bez chyb"
  );
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isStarted && userInput.length < text.length) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isStarted, userInput, text.length]);

  const handleInputChange = (event) => {
    if (!isStarted) {
      return;
    }

    const inputText = event.target.value;

    // Porovnání každého znaku v textu s odpovídajícím znakem v userInputu
    // a pokud se liší, nic se nenahrazuje
    let newText = "";
    let hasError = false;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === text[i]) {
        newText += inputText[i];
      } else {
        newText += userInput[i] || ""; // Pokud je v userInputu méně znaků než v textu, použije se prázdný řetězec
        hasError = true;
      }
    }

    setUserInput(newText);

    // Pokud uživatel napíše špatné písmeno, ohraničení input boxu se zčervená a input box se zatřese
    if (hasError) {
      const inputBox = document.getElementById("typing-challenge-input");
      inputBox.classList.add("shake");
      setTimeout(() => {
        inputBox.classList.remove("shake");
      }, 500);
    }
  };

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleResetClick = () => {
    setUserInput("");
    setTimeElapsed(0);
    setIsStarted(false);
  };

  const formattedTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(2);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const timeInSeconds = (time) => {
    const seconds = Math.round(time / 1000);
    return `${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const isCompleted = userInput.length === text.length;

  return (
    <div className="form">
      {!isCompleted && (
        <>
          <div className="typing-challenge-text">
            <p>{text}</p>
          </div>

          <input
            id="typing-challenge-input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
            disabled={!isStarted}
          />
        </>
      )}
      {!isCompleted && !isStarted && (
        <button onClick={handleStartClick}>Start</button>
      )}
      {isCompleted && (
        <div>
          <p>text má 70 znaků</p>
          <p>Čas: {formattedTime(timeElapsed)} s</p>
          <p>
            tudíž jsi psal přibližně rychlostí{" "}
            {Math.round(70 / (timeElapsed / 1000))}B/s
          </p>
          <p>běžná rychlost internetu je přibližně 240Mb/s což je 30MB/s</p>
          <p>
            běžná rychlost internetu je tedy přibližně{" "}
            {Math.round(30000000 / Math.round(70 / (timeElapsed / 1000)))}x
            větší
          </p>
        </div>
      )}
    </div>
  );
}

export default TypingChallenge;
