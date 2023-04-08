import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./style.css";

const FINAL_MESSAGE =
  "Perfektní! Toto je IP adresa. Nezapomeň, že díky IP adrese přesně víme, kam poslat paket.";
const ERROR_MESSAGE = "Toto není IP adresa";

/**
 * A component for validating IP addresses.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setOpenDialog - A function to open a dialog.
 * @param {function} props.setOpenOverlayDialog - A function to open an overlay dialog.
 */
function IPaddress({ setOpenDialog, setOpenOverlayDialog }) {
  const [ipAddress, setIpAddress] = useState("");

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
      setOpenDialog(true, FINAL_MESSAGE, "noGame");
    } else {
      setOpenOverlayDialog(true, ERROR_MESSAGE);
    }
  };

  return (
    <div className="ip-adress-container">
      <div>
        <TextField
          id="standard-basic"
          label="IP Adresa"
          variant="standard"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
      </div>

      <Button
        variant="outlined"
        onClick={handleSubmit}
        className="submit-button"
      >
        ZKONTROLUJ
      </Button>
    </div>
  );
}

export default IPaddress;
