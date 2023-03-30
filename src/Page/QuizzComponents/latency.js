import React, { useState, useEffect } from "react";
import globe from "../../images/Globe-Transparent-Background-PNG.png";
import ReactFlow from "reactflow";

import { jitterClient } from "../../Flow/data/client/jitterClient";
import { jitterEdges } from "../../Flow/data/edges/jitterEdges";
import { jitterGateway } from "../../Flow/data/gateway/jitterGateway";
import { jitterServer } from "../../Flow/data/server/jitterServer";

function RaceAroundWorld({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
  game,
}) {
  const nodes = jitterClient.concat(jitterGateway).concat(jitterServer);
  /* jitter game */
  const jitterPath = [
    "2620:0:862:ed1a::1",
    "147.32.3.202",
    "126.134.35.41",
    "71dd::ad48:7474:3412",
    "224.109.172.5",
    "81.119.95.47",
    "2bb6::ae76:435a::1246",
    "195.113.89.35",
  ];

  const [countClickedJitter, setCountClickedJitter] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const onNodeClick = (event, node) => {
    if (node.id === jitterPath[countClickedJitter]) {
      setCountClickedJitter(countClickedJitter + 1);
      const clickedNode = event.target;
      clickedNode.style.backgroundColor = "red";
      if (countClickedJitter === 0) {
        setStartTime(Date.now());
      }
    } else {
      setAlertMessage("začni v klientovi a nepřeskakuj křižovatky");
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    if (countClickedJitter === jitterPath.length) {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000;
      setAlertMessage(
        `Perfektní! Tvá doba odezvy je ${elapsedTime} sekund \n Tvá doba odezvy je skutečně malá, ovšem oproti ideální době odezvy 30-40 ms v roce 2023 je to stále ještě pomalé. \n V dalším úkolu se blíže podíváme na druhý aspekt rychlosti internetu - tzv. šířku pásma.`
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    }
  }, [countClickedJitter]);

  return (
    <>
      <div style={{ height: "95vh", width: "80%", marginLeft: "20%" }}>
        <ReactFlow
          nodes={nodes}
          edges={jitterEdges}
          zoomOnScroll={false}
          panOnDrag={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          attributionPosition="top-right"
          onNodeClick={onNodeClick}
        />
      </div>
    </>
  );
}
export default RaceAroundWorld;
