import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FINAL_MESSAGE =
  "Perfektní! Je dobré, aby mezi dvěma místy vedlo velké množství různých cest. Proč je to výhodné se dozvíš v dalším úkolu.";
const ERROR_MESSAGE = "Toto není správný počet různých cest.";
const CORRECT_ANSWER = "7";
/**
 * InputBox component that contains a form for entering a length value and a button to submit the value for validation
 * @param {Object} setOpenDialog - A function that opens a dialog box to display a message to the user
 * @returns {JSX.Element} - A form for entering a length value and a button to submit the value for validation
 */
function InputBox({ setOpenDialog }) {
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (count === CORRECT_ANSWER) {
      setOpenDialog(true, FINAL_MESSAGE, "noGame");
    } else {
      setOpenDialog(true, ERROR_MESSAGE);
    }
  };
  return (
    <>
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

export default InputBox;
