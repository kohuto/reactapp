import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TypingChallenge({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  const text = "toto je ukázkový text";
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showError, setShowError] = useState(false);
  /* show error input box for 1 second */
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  // stopwatch
  useEffect(() => {
    let intervalId;

    if (isStarted && userInput.length < text.length) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isStarted, userInput]);

  //checker if text is finished
  useEffect(() => {
    if (userInput.length === text.length) {
      setAlertMessage(
        <p>
          Perfektní! Právě jsi zvládl správně přepsat {text.length} znaků za{" "}
          {formattedTime(timeElapsed)}. To znamená, že jsi psal rychlostí{" "}
          {Math.round(text.length / (timeElapsed / 1000))} Mb/s. Kdybys psal
          touto rychlostí, tak bys například zvládl přepsat celou knihu medvídka
          Pú za Y sekund nebo celou bibli za Z sekund. Je dobré ale zmínit, že
          průměrná rychlost internetu je až 240 Mb/s (30 MB/s). Z toho vyplývá,
          že bys musel psát{" "}
          {Math.round(
            30000000 / Math.round(text.length / (timeElapsed / 1000))
          )}
          x rychleji, abys zvládl přenášet data stejně rychle, jako jsou
          přenášena po internetu.
        </p>
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    }
  }, [userInput]);

  /* check if input is valid */
  const handleInputChange = (event) => {
    const inputText = event.target.value;

    if (inputText != text.substring(0, inputText.length)) setShowError(true);
    else setUserInput(inputText);
  };

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const formattedTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(2);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <div className="typing-challenge-text">
        <p>{text}</p>
      </div>
      <div className="typing-challenge-container">
        <div>
          <TextField
            id="standard-basic"
            label="Text"
            variant="standard"
            value={userInput}
            onChange={handleInputChange}
            error={showError}
            helperText={showError && "Incorrect entry."}
            disabled={showError || !isStarted}
          />
        </div>
        {!isStarted && (
          <Button
            variant="outlined"
            onClick={handleStartClick}
            className="start-button"
          >
            Start
          </Button>
        )}
      </div>
    </>
  );
}

export default TypingChallenge;
