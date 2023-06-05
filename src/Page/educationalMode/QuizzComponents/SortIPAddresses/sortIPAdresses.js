import { useState } from "react";
import Button from "@mui/material/Button";
import IpGroup from "./ipGroup";
import BasicModal from "../../../DialogWindow/basicModal";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";

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
function SortIPAdresses({ info, setGame }) {
  const [isCorrectlyFilled, setIsCorrectlyFilled] = useState(false);
  const [isIncorrectlyFilled, setIsIncorrectlyFilled] = useState(false);
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
      setIsCorrectlyFilled(true);
    } else {
      setIsIncorrectlyFilled(true);
    }
  }

  return (
    <>
      <BasicModal content={info.content} />
      {isIncorrectlyFilled && (
        <AlertDialog
          content={ERROR_MESSAGE}
          closeAction={() => setIsIncorrectlyFilled(false)}
        />
      )}
      {isCorrectlyFilled && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
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
        <div className="sort-ip-submit-button">
          <Button variant="outlined" onClick={handleSubmit}>
            ZKONTROLOVAT
          </Button>
        </div>
      </div>
    </>
  );
}

export default SortIPAdresses;
