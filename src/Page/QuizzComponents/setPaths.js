import React, { useState } from "react";
import "./Components.css";
import CloseOpen from "./closeOpenWindow";
import { edgesData } from "../../Flow/data/edges/edges";
import Packet from "../../Packet/Packet";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function SetPaths() {
  const [firstPacket, setFirstPacket] = useState(false);
  const [firstPacketPath, setFirstPacketPath] = useState([]);

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

function InputBoxes({ setFirstPacket, setFirstPacketPath }) {
  const [inputValues, setInputValues] = useState([""]);

  const addInputBox = () => {
    if (inputValues.length < 5) {
      setInputValues([...inputValues, ""]);
    }
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

    setFirstPacketPath(inputValues);
    setFirstPacket(true);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  return (
    <div className="set-path-container">
      {inputValues.map((value, index) => (
        <div key={index}>
          <TextField
            id="standard-basic"
            label={"IP " + (index + 1)}
            variant="standard"
            value={value}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group small"
        className="create-packet-buttons"
        size="small"
      >
        <Button onClick={addInputBox}>PŘIDEJ POLE</Button>
        <Button onClick={removeInputBox}>ODEBER POLE</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={validate} className="check-button">
        ZKONTROLUJ
      </Button>
    </div>
  );
}

export default SetPaths;
