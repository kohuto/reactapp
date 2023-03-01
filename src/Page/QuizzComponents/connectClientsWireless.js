import React, { useState, useEffect } from "react";
import WirelessDevice from "./wirelessDevice";

function ConnectClientsWirelessComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [coordinates, setCoordinates] = useState([[], [], []]);
  const clients = [[702, 243]]; //tito klienti museji byt pripojeni
  function handleClick(x, y) {
    setClickCount((prevCount) => prevCount + 1);
    const newCoordinates = [...coordinates];
    newCoordinates[clickCount] = [x, y];
    setCoordinates(newCoordinates);
    if (clickCount == 2) console.log(newCoordinates);
    if (clickCount == 2) {
      let distance;
      const perimeter = 125;
      let isConnected = false;
      let taskFailed = false;

      //zkontrolujeme, jestli vsichni zadani klienti (seznam v "clients") jsou alespon v jednom kruhu
      clients.forEach((client) => {
        isConnected = false;
        coordinates.forEach((wirelessDevice) => {
          //spocitej vzdalenost klienta od vsech stredu kruhu -> musi byt mensi nez polomer -> pak lezi uvnitr kruhu
          distance = Math.sqrt(
            (client[0] - wirelessDevice[0]) ** 2 +
              (client[1] - wirelessDevice[1]) ** 2
          );
          console.log(client[0]);
          console.log(client[1]);
          console.log(wirelessDevice[0]);
          console.log(wirelessDevice[1]);
          console.log(distance);
          if (distance < perimeter) isConnected = true;
        });
        if (!isConnected) taskFailed = true;
      });
      if (taskFailed) {
        alert("spatne umisteno");
      } else {
        alert("spravne umisteno");
      }
    }
  }

  return (
    <>
      {clickCount >= 0 ? <WirelessDevice handle={handleClick} /> : null}
      {clickCount >= 1 ? <WirelessDevice handle={handleClick} /> : null}
      {clickCount >= 2 ? <WirelessDevice handle={handleClick} /> : null}
    </>
  );
}

export default ConnectClientsWirelessComponent;
