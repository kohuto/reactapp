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
    if (countClickedJitter < jitterPath.length) {
      if (node.id === jitterPath[countClickedJitter]) {
        setCountClickedJitter(countClickedJitter + 1);
        const clickedNode = event.target;
        clickedNode.style.backgroundColor = "red";
        if (countClickedJitter === 0) {
          setStartTime(Date.now());
        }
      } else {
        setAlertMessage("nepřeskakuj křižovatky");
        setGameAfterModalClose(game);
        setOpenModal(true);
      }
    } else {
      if (
        node.id ===
        jitterPath[
          jitterPath.length - (countClickedJitter % jitterPath.length) - 1
        ]
      ) {
        setCountClickedJitter(countClickedJitter + 1);
        const clickedNode = event.target;
        clickedNode.style.backgroundColor = "green";
      } else {
        setAlertMessage("nepřeskakuj křižovatky");
        setGameAfterModalClose(game);
        setOpenModal(true);
      }
    }
  };

  useEffect(() => {
    if (countClickedJitter === 2 * jitterPath.length) {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000;
      setAlertMessage(`Elapsed time: ${elapsedTime} seconds`);
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
