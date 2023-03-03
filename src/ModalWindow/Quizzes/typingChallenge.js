import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TypingChallenge() {
  const [text, setText] = useState("toto je ukázkový text");
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
        <div className="start-quizz-button" onClick={handleStartClick}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            START
          </motion.div>
        </div>
      )}
      {isCompleted && (
        <div>
          <p>
            Perfektní! Právě jsi zvládl správně přepsat {text.length} znaků za{" "}
            {formattedTime(timeElapsed)} vteřin. To znamená, že jsi psal
            rychlostí {Math.round(text.length / (timeElapsed / 1000))} Mb/s.
            Kdybys psal touto rychlostí, tak bys například zvládl přepsat celou
            knihu medvídka Pú za Y sekund nebo celou bibli za Z sekund. Je dobré
            ale zmínit, že průměrná rychlost internetu je až 240 Mb/s (30 MB/s).
            Z toho vyplývá, že bys musel psát{" "}
            {Math.round(
              30000000 / Math.round(text.length / (timeElapsed / 1000))
            )}
            x rychleji, abys zvládl přenášet data stejně rychle, jako jsou
            přenášena po internetu.
          </p>
        </div>
      )}
    </div>
  );
}

export default TypingChallenge;
