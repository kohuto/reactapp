import SimpleFlow from "../../Flow/simpleFlow";
import BasicModal from "../../../DialogWindow/basicModal";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import { countPathsEdges } from "../../../../Data/Flow/edges/countPathsEdges";
import { countPathsNodes } from "../../../../Data/Flow/countPaths";

const FINAL_MESSAGE =
  "Perfektní! Je dobré, aby mezi dvěma místy vedlo velké množství různých cest. Proč je to výhodné se dozvíš v dalším úkolu.";
const ERROR_MESSAGE = "Toto není správný počet různých cest.";
const CORRECT_ANSWER = "7";

function CountPaths({ info, setGame }) {
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === CORRECT_ANSWER) {
      setIsValid(true);
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <>
      {" "}
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
      <SimpleFlow nodes={countPathsNodes} edges={countPathsEdges} />
      <div className="paths-count-container">
        <label>Počet různých cest:</label>
        <div>
          <TextField
            id="standard-basic"
            label="počet"
            variant="standard"
            value={count}
            onChange={(e) => setCount(e.target.value)}
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

export default CountPaths;
