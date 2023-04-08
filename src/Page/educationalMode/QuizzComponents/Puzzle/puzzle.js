import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../../../../images/puzzle.png";
import "./style.css";

const FINAL_MESSAGE = "perfektní!";
function Puzzle({ setOpenDialog }) {
  const set = () => {
    setOpenDialog(true, FINAL_MESSAGE, "noGame");
  };

  return (
    <JigsawPuzzle
      imageSrc={img}
      rows={4}
      columns={4}
      onSolved={set}
      className="jigsaw-puzzle"
    />
  );
}

export default Puzzle;
