import { interactiveModePacketsData } from "../../Packet/data/inteactiveModeData";
import DefaultPackets from "../../Packet";
import ZoomButtons from "./zoomButtons";
import { useNodesState } from "reactflow";
import { useState, useEffect } from "react";

function WhatIsCabelComponent({ zoomIn, zoomOut, zoom }) {
  const [oldWindowSize, setOldWindowSize] = useState([0, 0]);
  const [newWindowSize, setNewWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  /*const [deltaX, setDeltaX] = useState(0);*/

  const [finalX, setFinalX] = useState(500 + window.innerWidth);

  useEffect(() => {
    function handleResize() {
      console.log(oldWindowSize[0]);
      console.log(newWindowSize[0]);
      console.log(newWindowSize[0] - oldWindowSize[0]);
      setFinalX(finalX + newWindowSize[0] - oldWindowSize[0]);
      /*setDeltaX(newWindowSize[0] - oldWindowSize[0]);*/
      console.log(finalX + newWindowSize[0] - oldWindowSize[0]);
      setOldWindowSize([newWindowSize[0], newWindowSize[1]]);
      setNewWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [newWindowSize]);

  return (
    <>
      <div
        style={{ position: "absolute", top: "50vh", right: "50vw", zIndex: 4 }}
      >
        <h3>{finalX}</h3>
        <h1>old window size</h1>
        <h2>Width: {oldWindowSize[0]}</h2>
        <h2>Height: {oldWindowSize[1]}</h2>
        <h1>new window size</h1>
        <h2>Width: {newWindowSize[0]}</h2>
        <h2>Height: {newWindowSize[1]}</h2>
      </div>
      {zoom == 1 && <DefaultPackets packetsData={interactiveModePacketsData} />}
      <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
}

export default WhatIsCabelComponent;
