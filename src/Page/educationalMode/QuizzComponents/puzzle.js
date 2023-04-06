import React, { useState } from "react";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../../../images/nodes/klient.jpg";

function Puzzle({
  setOpenModal,
  game,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  const set = () => {
    setAlertMessage("perfetkní!");
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  };

  return (
    <>
      <JigsawPuzzle
        imageSrc={img}
        rows={5}
        columns={5}
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </>
  );
}

export default Puzzle;
