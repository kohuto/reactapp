import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import DefaultPackets from "../../Packet";
import { findServerData } from "../../Packet/data/findServerPackets";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FindPacketComponent(props) {
  return (
    <>
      <DefaultPackets packetsData={findServerData} />
      <CloseOpen
        content={
          <InputBox
            setAlertMessage={props.setAlertMessage}
            setOpenInform={props.setOpenInform}
            setOpenEndGame={props.setOpenEndGame}
          />
        }
      />
    </>
  );
}

function InputBox(props) {
  const [client1, setClient1] = useState("");
  const [client2, setClient2] = useState("");
  const [client3, setClient3] = useState("");

  const handleSubmit = () => {
    if (
      client2 === "195.113.89.35" &&
      client3 === "192.168.1.1" &&
      client1 === "195.113.76.22"
    ) {
      props.setAlertMessage("spravně jsi vyplnil všechny servery");
      props.setOpenEndGame(true);
    } else {
      props.setAlertMessage("nějaký server je špatně");
      props.setOpenInform(true);
    }
  };
  return (
    <>
      <div className="find-server-container">
        <TextField
          id="standard-basic"
          label="Kiara"
          variant="standard"
          value={client1}
          onChange={(e) => setClient1(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Annika"
          variant="standard"
          value={client2}
          onChange={(e) => setClient2(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Eustác"
          variant="standard"
          value={client3}
          onChange={(e) => setClient3(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          ZKONTROLUJ
        </Button>
      </div>
    </>
  );
}

export default FindPacketComponent;
