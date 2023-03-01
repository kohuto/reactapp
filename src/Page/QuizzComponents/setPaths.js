import React, { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import { edgesData } from "../../Flow/data/edges";
import Packet from "../../Packet/Packet";

function SetPaths() {
  const [firstPacket, setFirstPacket] = useState(false);
  const [firstPacketPath, setFirstPacketPath] = useState([]);
  const [showInputBox, setShowInputBox] = useState(true);

  return (
    <>
      <CloseOpen
        content={
          <InputBoxes
            setFirstPacket={setFirstPacket}
            setFirstPacketPath={setFirstPacketPath}
          />
        }
      />
      {firstPacket && (
        <Packet
          key="packet123"
          content="nazdarek"
          from="2"
          to="1"
          path={firstPacketPath}
          color="#666666"
          speed={100}
        ></Packet>
      )}
    </>
  );
}

function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}

function InputBoxes({ setFirstPacket, setFirstPacketPath }) {
  const [inputValues, setInputValues] = useState([""]);

  const addInputBox = () => {
    setInputValues([...inputValues, ""]);
  };

  const removeInputBox = () => {
    if (inputValues.length > 1) {
      setInputValues(inputValues.slice(0, inputValues.length - 1));
    }
  };

  function checkIfEdgeExists(id, data) {
    return data.some((edge) => edge.id === id);
  }

  const validate = () => {
    if (inputValues[0] != "2620:0:862:ed1a::1") return; // start is in Anička
    if (inputValues[inputValues.length - 1] != "2002:c0a8:101::1") return; // end is in the server
    for (let i = 0; i < inputValues.length - 1; i++) {
      let idEdge1 = inputValues[i].concat("-").concat(inputValues[i + 1]);
      let idEdge2 = inputValues[i + 1].concat("-").concat(inputValues[i]); // dont know order if nodes in ID
      if (
        !checkIfEdgeExists(idEdge1, edgesData) &&
        !checkIfEdgeExists(idEdge2, edgesData)
      )
        return; // if edge doesnt exist -> invalid path
    }
    //openModal(29);
    setFirstPacketPath(inputValues);
    setFirstPacket(true);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  return (
    <div>
      {inputValues.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addInputBox}>Přidat input box</button>
      <button onClick={removeInputBox}>Odebrat input box</button>
      <button onClick={validate}>CHECK</button>
    </div>
  );
}

export default SetPaths;
