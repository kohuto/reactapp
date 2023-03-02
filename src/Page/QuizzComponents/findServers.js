import { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import DefaultPackets from "../../Packet";
import { findPacketsData } from "../../Packet/data/findPackets";

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}
function FindPacketComponent({ setGame, content }) {
  return (
    <>
      <DefaultPackets packetsData={findPacketsData} />
      <CloseOpen content={<InputBox setGame={setGame} />} />
    </>
  );
}

function InputBox({ setGame }) {
  const [client1, setClient1] = useState("");
  const [client2, setClient2] = useState("");
  const [client3, setClient3] = useState("");

  const handleSubmit = () => {
    if (
      client1 === "195.113.89.35" &&
      client2 === "192.168.1.1" &&
      client3 === "195.113.76.22"
    ) {
      openModal(29);
      setGame();
    } else {
      alert("input is not in format of IP address");
    }
  };
  return (
    <>
      <div className="create-packets-form-container">
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Maruška"
            value={client1}
            onChange={(e) => setClient1(e.target.value)}
          />
        </div>
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Pepíček"
            value={client2}
            onChange={(e) => setClient2(e.target.value)}
          />
        </div>
        <div className="create-packets-input-group">
          <input
            type="text"
            placeholder="Anička"
            value={client3}
            onChange={(e) => setClient3(e.target.value)}
          />
        </div>
        <button
          className="check-button close-open-window"
          onClick={handleSubmit}
        >
          Zkontrolovat
        </button>
      </div>
    </>
  );
}

export default FindPacketComponent;
