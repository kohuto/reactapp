import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ShortestPathComponent({
  setOpenEndGame,
  setOpenInform,
  setAlertMessage,
}) {
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
  const [length, setLength] = useState("");

  const handleSubmit = () => {
    if (length === "9") {
      setAlertMessage("výborně");
      setOpenEndGame(true);
    } else {
      setAlertMessage("nope");
      setOpenInform(true);
    }
  };
  return (
    <>
      <div className="shortest-path-container">
        <label>Délka nejkratší cesty:</label>
        <TextField
          id="standard-basic"
          label="délka"
          variant="standard"
          value={length}
          onChange={(e) => setLength(e.target.value)}
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

export default ShortestPathComponent;
