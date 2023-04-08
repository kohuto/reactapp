import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FINAL_MESSAGE =
  "Perfektní! Nezapomeň, že vždy když paket dojede do chytré křižovatky, tak křižovatka křižovatka pošle paket po nejrychlejší cestě. Nejrychlejší cesta není ale vždy ta nejkratší.";
const ERROR_MESSAGE = "Toto není délka nejrzchlejší cesty";
const CORRECT_ANSWER = "9";

/**
 * InputBox component that contains a form for entering a length value and a button to submit the value for validation
 * @param {Object} setOpenDialog - A function that opens a dialog box to display a message to the user
 * @returns {JSX.Element} - A form for entering a length value and a button to submit the value for validation
 */
function InputBox({ setOpenDialog }) {
  const [length, setLength] = useState("");

  /**
   * Handles the form submission by checking if the entered length value matches the correct answer and displays a message to the user
   */
  const handleSubmit = () => {
    if (length === CORRECT_ANSWER) setOpenDialog(true, FINAL_MESSAGE, "noGame");
    else setOpenDialog(true, ERROR_MESSAGE);
  };
  return (
    <>
      <div className="shortest-path-container">
        <label>Délka nejkratší cesty:</label>
        <div>
          <TextField
            id="standard-basic"
            label="délka"
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

export default InputBox;
