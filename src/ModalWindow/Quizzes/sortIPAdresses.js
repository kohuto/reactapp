import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function SortIPAdresses({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
  game,
  setOpenOverlayModal,
  setOverlayDialogMessage,
}) {
  const [values, setValues] = useState(["", "", "", "", ""]);
  const correctValues = ["IPv4", "Neplatná", "Neplatná", "IPv6", "IPv4"];
  const ipAdresses = [
    "27.22.119.189",
    "afca:202a:7075:efa8:918c",
    "297.82.222.92",
    "a87a:cdcd:ed47:2718:f70c:31e7:0286:18d5",
    "123.208.115.38",
  ];

  function handleChange(index, value) {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  }

  function handleSubmit() {
    if (values.every((value, index) => value === correctValues[index])) {
      setAlertMessage("výborně");
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    } else {
      setOverlayDialogMessage("nope");
      setGameAfterModalClose(game);
      setOpenOverlayModal(true);
    }
  }

  return (
    <>
      <div className="sort-ip-container">
        <div className="sort-ip-group">
          {values.map((value, index) => (
            <>
              <IpGroup
                key={index}
                value={value}
                handleChange={(value) => handleChange(index, value)}
                label={ipAdresses[index]}
              />
            </>
          ))}
        </div>
        <Button
          variant="outlined"
          onClick={handleSubmit}
          className="submit-button"
        >
          ZKONTROLOVAT
        </Button>
      </div>
    </>
  );
}

function IpGroup({ value, handleChange, label }) {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          row
        >
          <FormControlLabel value="IPv6" control={<Radio />} label="IPv6" />
          <FormControlLabel value="IPv4" control={<Radio />} label="IPv4" />
          <FormControlLabel
            value="Neplatná"
            control={<Radio />}
            label="Neplatná"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default SortIPAdresses;
