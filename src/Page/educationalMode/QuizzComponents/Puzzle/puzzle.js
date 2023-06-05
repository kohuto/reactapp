import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../../../../images/PCpuzzle.svg";
import "./style.css";
import { useState } from "react";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

const FINAL_MESSAGE = "perfektní!";
function Puzzle({ info, setGame }) {
  const [isFinished, setIsFinished] = useState(false);
  const set = () => {
    setIsFinished(true);
  };

  return (
    <>
      {isFinished && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          game={info.type}
          setGame={setGame}
        />
      )}
      <div className="jigsaw-puzzle-container">
        <JigsawPuzzle
          imageSrc={img}
          rows={4}
          columns={4}
          onSolved={set}
          className="jigsaw-puzzle"
        />
      </div>
    </>
  );
}

export default Puzzle;
