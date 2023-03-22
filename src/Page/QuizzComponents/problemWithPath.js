import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ProblemWithPath({ setOpenEndGame, setOpenInform, setAlertMessage }) {
  return (
    <>
      <CloseOpen
        content={
          <InputBox
            setAlertMessage={setAlertMessage}
            setOpenInform={setOpenInform}
            setOpenEndGame={setOpenEndGame}
          />
        }
      />
    </>
  );
}

function InputBox({ setOpenEndGame, setOpenInform, setAlertMessage }) {
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === "3") {
      setAlertMessage("výborně");
      setOpenEndGame(true);
    } else {
      setAlertMessage("nope");
      setOpenInform(true);
    }
  };
  return (
    <>
      <div className="problem-with-path-container">
        <label>Kolik cest musíme přidat:</label>
        <TextField
          id="standard-basic"
          label="počet"
          variant="standard"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
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
