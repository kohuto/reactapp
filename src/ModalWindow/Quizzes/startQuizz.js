import React from "react";
import { motion } from "framer-motion";
function StartQuizz({ closeModal, setGame, setFlow }) {
  const HandleClick = (event) => {
    closeModal();
    setGame();
  };
  return (
    <>
      <div className="start-quizz-button" onClick={HandleClick}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          START
        </motion.div>
      </div>
    </>
  );
}

export default StartQuizz;
