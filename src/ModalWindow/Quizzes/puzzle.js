import React, { useState } from "react";

import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../../images/nodes/klient.jpg";

function Puzzle() {
  const [text, setText] = useState();

  const set = () => {
    {
      var modal = document.getElementById("modal-window35");
      modal.style.display = "block";
    }
  };

  return (
    <>
      <h2 className="tag">{text}</h2>
      <JigsawPuzzle
        imageSrc={img}
        rows={3}
        columns={3}
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </>
  );
}

export default Puzzle;
