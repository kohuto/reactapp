import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./style.css";
import BasicModal from "../../../DialogWindow/basicModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

const FINAL_MESSAGE =
  "Perfektní! Toto je IP adresa. Nezapomeň, že díky IP adrese přesně víme, kam poslat paket.";
const ERROR_MESSAGE = "Toto není IP adresa";

function IPaddress({ info, setGame }) {
  const [ipAddress, setIpAddress] = useState("");
  const [isInvalidIP, setIsInvalidIP] = useState(false);
  const [isValidIP, setIsValidIP] = useState(false);

  /**
   * Handles form submission and validates the IP address.
   */
  const handleSubmit = () => {
    // IPv4 pattern
    const IPv4 =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // IPv6 pattern
    const IPv6 =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;

    if (IPv4.test(ipAddress) || IPv6.test(ipAddress)) {
      setIsValidIP(true);
    } else {
      setIsInvalidIP(true);
    }
  };

  return (
    <>
      <BasicModal content={info.content} />
      {isInvalidIP && (
        <AlertDialog
          content={ERROR_MESSAGE}
          closeAction={() => setIsInvalidIP(false)}
        />
      )}
      {isValidIP && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      <div className="ip-adress-container">
        <TextField
          id="standard-basic"
          label="IP Adresa"
          variant="standard"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />

        <div className="submit-button">
          <Button variant="outlined" onClick={handleSubmit}>
            ZKONTROLUJ
          </Button>
        </div>
      </div>
    </>
  );
}

export default IPaddress;
