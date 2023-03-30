import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ShortestPathComponent({
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
  const [length, setLength] = useState("");

  const handleSubmit = () => {
    if (length === "9") {
      setAlertMessage(
        "Perfektní! Nezapomeň, že vždy když paket dojede do chytré křižovatky, tak křižovatka křižovatka pošle paket po nejrychlejší cestě. Nejrychlejší cesta není ale vždy ta nejkratší."
      );
      setGameAfterModalClose("noGame");
    } else {
      setAlertMessage("Toto není délka nejkratší cesty");
      setGameAfterModalClose(game);
    }
    setOpenModal(true);
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
