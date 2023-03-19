import React from "react";
import { motion } from "framer-motion";
import "../modalWindow.css";
import "./quizzesStyles.css";
import Button from "@mui/material/Button";

function StartQuizz({ closeModal, setGame, setFlow }) {
  const HandleClick = (event) => {
    closeModal();
    setGame();
  };
  return (
    <>
      <div className="start-quizz-button" onClick={HandleClick}>
        <Button variant="outlined">START</Button>
      </div>
    </>
  );
}

export default StartQuizz;
