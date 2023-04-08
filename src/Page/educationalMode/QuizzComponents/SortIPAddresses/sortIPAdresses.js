import { useState } from "react";
import Button from "@mui/material/Button";
import IpGroup from "./ipGroup";
import "./style.css";

const CORRECT_VALUES = ["IPv4", "Neplatná", "Neplatná", "IPv6", "IPv4"];
const IP_ADDRESSES = [
  "27.22.119.189",
  "afca:202a:7075:efa8:918c",
  "297.82.222.92",
  "a87a:cdcd:ed47:2718:f70c:31e7:0286:18d5",
  "123.208.115.38",
];
const FINAL_MESSAGE =
  "Perfektní! Teď už víš, že díky IPv6 adresám se ještě hodně dlouho nemusíme bát, že by nám IP adresy došly.";
const ERROR_MESSAGE = "Toto není správně.";

/**
 * A component for sorting IP addresses.
 * @param {object} props - The props object.
 * @param {function} props.setOpenDialog - The function to open the final dialog.
 * @param {function} props.setOpenOverlayDialog - The function to open the error overlay dialog.
 * @returns {JSX.Element} - The component JSX.
 */
function SortIPAdresses({ setOpenDialog, setOpenOverlayDialog }) {
  const [values, setValues] = useState(["", "", "", "", ""]);

  /**
   * Handles the change of an IP address input.
   * @param {number} index - The index of the input being changed.
   * @param {string} value - The new value of the input.
   */
  function handleChange(index, value) {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  }

  /**
   * Handles the submission of the IP addresses.
   * If the IP addresses are sorted correctly, opens the final dialog.
   * Otherwise, opens the error overlay dialog.
   */
  function handleSubmit() {
    if (values.every((value, index) => value === CORRECT_VALUES[index])) {
      setOpenDialog(true, FINAL_MESSAGE, "noGame");
    } else {
      setOpenOverlayDialog(true, ERROR_MESSAGE);
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
                label={IP_ADDRESSES[index]}
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

export default SortIPAdresses;
