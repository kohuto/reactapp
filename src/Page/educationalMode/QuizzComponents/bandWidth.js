import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TypingChallenge({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
  setOpenOverlayModal,
  setOverlayDialogMessage,
  game,
}) {
  const text =
    "Toto je ukázkový text, který je potřeba přepsat do textového pole, níže. Text je schválně takto dlouhý, aby bylo vysoce nepravděpodobné, že ho zvládneš přepsat celý za 10  sekund.";
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [timer, setTimer] = useState(0);

  /* show error input box for 0.5 second */
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handleStartClick = () => {
    // Start the timer
    setTimer(0);
    setIsStarted(true);
    setTimeout(() => {
      setAlertMessage(
        `Perfektní! Zvládl jsi přepsat ${
          userInput.length
        } znaků za 10 sekund. To znamená, že jsi psal rychlostí ${Math.round(
          userInput.length / (10 / 1000)
        )} Mb/s. Je dobré ale zmínit, že ideální rychlost přenosu v roce 2023 je až 240 Mb/s. Z toho vyplývá, že bys musel psát x rychleji, abys zvládl přenášet data stejně rychle, jako jsou přenášena po internetu.`
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    }, 10000);
  };

  /* check if input is valid */
  const handleInputChange = (event) => {
    const inputText = event.target.value;

    if (inputText != text.substring(0, inputText.length)) setShowError(true);
    else setUserInput(inputText);
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
            helperText={showError && "Špatné písmeno"}
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
