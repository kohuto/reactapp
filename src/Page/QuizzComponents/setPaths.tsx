/*import React, { useState } from "react";
import "./Components.css";
import { edgesData } from "../../Flow/data/edges";
import Packet from "../../Packet/Packet";*/

import CloseOpen from "./closeOpenWindow";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete.js';
import { TransitionGroup } from 'react-transition-group';


const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function SetPaths() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item: string) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Add fruit to basket
    </Button>
  );

  return (
    <CloseOpen
    content={
    <div className='set-packet-path-container'>
      {addFruitButton}
    
        <List>
          <TransitionGroup>
            {fruitsInBasket.map((item) => (
              <Collapse key={item}>
                {renderItem({ item, handleRemoveFruit })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
     
    </div>}
      />
  );
}

//function SetPaths() {

  /*
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
        <div key={index} className="create-packets-input-group">
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e)}
          />
        </div>
      ))}
      <div className="set-path-dots">
        <div className="set-path-add-remove">
          <div className="set-path-dot" onClick={addInputBox}>
            PŘIDEJ POLE
          </div>
          <div className="set-path-dot" onClick={removeInputBox}>
            ODEBER POLE
          </div>
        </div>
        <div className="set-path-dot-check" onClick={validate}>
          ZKONTROLOVAT
        </div>
      </div>
    </div>
  );
  */





