import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function IPadress({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
  game,
  setOpenOverlayModal,
  setOverlayDialogMessage,
}) {
  const [ipAdress, setIpAdress] = useState("");

  const handleSubmit = () => {
    // IPv4 pattern
    const IPv4 =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // IPv6 pattern
    const IPv6 =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;

    if (IPv4.test(ipAdress) || IPv6.test(ipAdress)) {
      setAlertMessage(
        "Perfektní! Toto je IP adresa. Nezapomeň, že díky IP adrese přesně víme, kam poslat paket."
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    } else {
      setOverlayDialogMessage("Toto není IP adresa");
      setGameAfterModalClose(game);
      setOpenOverlayModal(true);
    }
  };

  return (
    <div className="ip-adress-container">
      <div>
        <TextField
          id="standard-basic"
          label="IP Adresa"
          variant="standard"
          value={ipAdress}
          onChange={(e) => setIpAdress(e.target.value)}
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

export default IPadress;
