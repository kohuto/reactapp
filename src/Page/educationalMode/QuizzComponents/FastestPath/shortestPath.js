import { shortestPathEdges } from "../../../../Data/Flow/edges/shortestPathEdges";
import { shortestPathNodes } from "../../../../Data/Flow/shortestPath";
import SimpleFlow from "../../Flow/simpleFlow";
import BasicModal from "../../../DialogWindow/basicModal";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FINAL_MESSAGE =
  "Perfektní! Nezapomeň, že vždy když paket dojede do chytré křižovatky, tak křižovatka pošle paket po nejrychlejší cestě. Nejrychlejší cesta není ale vždy ta nejkratší.";
const ERROR_MESSAGE = "Toto není délka nejrychlejší cesty";
const CORRECT_ANSWER = "9";

function ShortestPathComponent({ info, setGame }) {
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [length, setLength] = useState("");

  /**
   * Handles the form submission by checking if the entered length value matches the correct answer and displays a message to the user
   */
  const handleSubmit = () => {
    if (length === CORRECT_ANSWER) setIsValid(true);
    else setIsInvalid(true);
  };
  return (
    <>
      <BasicModal content={info.content} />
      {isInvalid && (
        <AlertDialog
          content={ERROR_MESSAGE}
          closeAction={() => setIsInvalid(false)}
        />
      )}
      {isValid && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      <SimpleFlow nodes={shortestPathNodes} edges={shortestPathEdges} />
      <div className="shortest-path-container">
        <div>
          <TextField
            id="standard-basic"
            label="nejrychlejší cesta"
            variant="standard"
            value={length}
            onChange={(e) => setLength(e.target.value)}
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

export default ShortestPathComponent;
