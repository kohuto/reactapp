import { useState } from "react";
import "./Components.css";
import CloseOpen from "./CloseOpenWindow/closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CountPaths({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  return (
    <>
      <CloseOpen
        content={
          <InputBox
            setAlertMessage={setAlertMessage}
            setOpenModal={setOpenModal}
            setGameAfterModalClose={setGameAfterModalClose}
            game={game}
          />
        }
      />
    </>
  );
}

function InputBox({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === "7") {
      setAlertMessage(
        "Perfektní! Je dobré, aby mezi dvěma místy vedlo velké množství různých cest. Proč je to výhodné se dozvíš v dalším úkolu."
      );
      setGameAfterModalClose("noGame");
    } else {
      setAlertMessage("Toto není správný počet různých cest.");
      setGameAfterModalClose(game);
    }
    setOpenModal(true);
  };
  return (
    <>
      <div className="shortest-path-container">
        <label>Počet různých cest:</label>
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

export default CountPaths;
