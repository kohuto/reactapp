import "./modalWindow.css";
import React from "react";
import { stockData } from "./dataQuizzes";
import Quizz from "./Quizz";

function closeModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "none";
}

function QuizzTemplate({
  setGame,
  modalWindowID,
  quizzID,
  setOpenEndGame,
  setOpenInform,
  setAlertMessage,
}) {
  const formatedContent = stockData[quizzID].content
    .split("\n")
    .map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  return (
    <>
      <h1 className="modal-window-heading">{stockData[quizzID].header}</h1>
      <p className="modal-window-content">{formatedContent}</p>
      <h3 className="modal-window-question">{stockData[quizzID].question}</h3>
      <Quizz
        setGame={setGame}
        closeModal={() => closeModal(modalWindowID)}
        taskData={stockData[quizzID]}
        id={quizzID}
        setAlertMessage={setAlertMessage}
        setOpenInform={setOpenInform}
        setOpenEndGame={setOpenEndGame}
      />
    </>
  );
}

export default QuizzTemplate;
