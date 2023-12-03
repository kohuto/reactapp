import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import BasicModal from "../../../DialogWindow/basicModal";

function BandWidthComponent({ info, setGame }) {
  const text =
    "Toto je ukázkový text, který je potřeba přepsat do textového pole níže. Text je schválně takto dlouhý, aby bylo vysoce nepravděpodobné, že ho zvládneš přepsat celý za 10  sekund.";
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const finalMessage = `Perfektní! Zvládl jsi přepsat ${
    userInput.length
  } znaků za 10 sekund. To znamená, že jsi přepsal přibližně ${
    userInput.length * 8
  } bitů. Jeden bit je ale 1000000x menší, než jeden Mega bit. \n Je dobré zmínit, že ideální šířka pásma v roce 2023 je až 240 Mb/s. Z toho vyplývá, že bys musel psát ${Math.round(
    240000000 / (userInput.length * 8)
  )}x rychleji, abys zvládl přenášet data stejně rychle, jako jsou přenášena po internetu.`;

  // timer set to 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000;
      if (isStarted && elapsedTime > 10) {
        setIsFinished(true);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [isStarted, startTime, userInput, finalMessage]);

  // if input is incorrect, error message is shown for 0,5 second
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  // start timer
  const handleStartClick = () => {
    setIsStarted(true);
    setStartTime(Date.now());
  };

  const checkInputValidity = (inputText) => {
    return inputText === text.substring(0, inputText.length);
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;

    if (checkInputValidity(inputText)) {
      setUserInput(inputText);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {isFinished && (
        <NextLevelModal
          content={finalMessage}
          setGame={setGame}
          game={info.type}
        />
      )}
      <BasicModal content={info.content} header={info.header}/>
      <div className="typing-challenge-text">
        <p>{text}</p>
      </div>
      <div className="typing-challenge-container">
        <div>
          <TextField
            id="standard-basic"
            label="Text"
            multiline
            rows={4}
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

export default BandWidthComponent;
