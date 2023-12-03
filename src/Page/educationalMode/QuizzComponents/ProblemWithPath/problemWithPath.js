import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import BasicModal from "../../../DialogWindow/basicModal";
import SimpleFlow from "../../Flow/simpleFlow";
import { problemWithPathNodes } from "../../../../Data/Flow/problemWithPath";
import { problemWithPathEdges } from "../../../../Data/Flow/edges/problemWithPathEdges";

function ProblemWithPath({ info, setGame }) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const incorrectMessage =
    "Toto není minimální počet cest, který je potřeba přidat.";
  const CORRECT_ANSWER = "4";
  const FINAL_MESSAGE =
    "Správně, je potřeba přidat minimálně 4 cesty, abychom předešli tomu, že by se síť znovu rozdělila na dvě části po odstranění jakékoli jedné trasy nebo křižovatky.";
  const [countOfCabels, setCountOfCabels] = useState("");

  const handleSubmit = () => {
    if (countOfCabels === CORRECT_ANSWER) setIsValid(true);
    else setIsInvalid(true);
  };

  return (
    <>
      <SimpleFlow nodes={problemWithPathNodes} edges={problemWithPathEdges} />
      <BasicModal content={info.content} header={info.header}/>
      {isInvalid && (
        <AlertDialog
          closeAction={() => setIsInvalid(false)}
          content={incorrectMessage}
        />
      )}

      {isValid && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}

      <div className="problem-with-path-container">
        <div>
          <TextField
            id="standard-basic"
            label="Počet přidaných cest"
            variant="standard"
            value={countOfCabels}
            onChange={(e) => setCountOfCabels(e.target.value)}
          />
        </div>
        <Button
          variant="outlined"
          onClick={handleSubmit}
          className="check-button"
        >
          ZKONTROLUJ
        </Button>
      </div>
    </>
  );
}

export default ProblemWithPath;
