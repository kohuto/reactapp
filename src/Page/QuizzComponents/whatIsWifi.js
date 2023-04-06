import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from "reactflow";
import { whatIsWifiNodes } from "../../Data/Flow/whatIsWifi";
import { whatIsWifiEdges } from "../../Data/Flow/edges/whatIsWifiEdges";

function WhatIsWiFiComponent({
  setOpenModal,
  setGameAfterModalClose,
  setAlertMessage,
  game,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(whatIsWifiNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(whatIsWifiEdges);
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [isWifiPlugged, setIsWifiPlugged] = useState(false);

  useEffect(() => {
    if (
      edges.some(
        (edge) =>
          edge.source === "136.200.123.175" || edge.target === "136.200.123.175"
      )
    ) {
      setIsWifiPlugged(true);
    }
    if (
      isWifiPlugged &&
      isSwitchedOn &&
      edges.some(
        (edge) =>
          edge.source === "242.47.214.213" || edge.target === "242.47.214.213"
      )
    ) {
      setAlertMessage(
        "Perfektní! Podařilo se ti zapojit wifi router a nyní se pomocí wifi signálu můžeš připojit k internetu."
      );
      setGameAfterModalClose("no game");
      setOpenModal(true);
    }
  }, [edges]);

  useEffect(() => {
    if (isWifiPlugged) {
      setAlertMessage("nyní zapni wifi");
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
    if (isSwitchedOn) {
      setAlertMessage(
        "Nyní musíš wifi router zapojit do sítě. Na počítači sice vidíme wifi router jako dostupný, není ale připojen k chytré křižovatce, proto se nemůžeme připojit k internetu."
      );
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
  }, [isWifiPlugged, isSwitchedOn]);

  function isValidConnection(connection) {
    if (isWifiPlugged && isSwitchedOn) {
      return connection.target === "242.47.214.213";
    } else if (!isWifiPlugged) {
      if (connection.target != "212.68.73.2") {
        setAlertMessage("prvni zapoj wifi router do zásuvky");
        setGameAfterModalClose(game);
        setOpenModal(true);
        return false;
      } else if (connection.target === "212.68.73.2") {
        return true;
      }
    } else if (isWifiPlugged && !isSwitchedOn) {
      setAlertMessage("prvni zapni wifi");
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
  }

  const CustomWifi = ({ id }) => (
    <>
      <div>{isSwitchedOn && id}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        isValidConnection={isValidConnection}
      />
    </>
  );

  const nodeTypes = {
    customwifi: CustomWifi,
  };

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  function toggleSwitch() {
    if (isWifiPlugged) setIsSwitchedOn((prevSwitch) => !prevSwitch);
    else {
      setAlertMessage(
        "Prvni zapoj wifi router do zásuvky. Zapojení provedeš tak, že klikneš na černý puntík na routeru a přetáhneš čáru na černý puntík na zásuvce."
      );
      setGameAfterModalClose(game);
      setOpenModal(true);
    }
  }
  return (
    <div
      style={{ height: "95vh", width: "80%", marginLeft: "20%" }}
      className={`${game}-bg`}
    >
      <div
        style={{
          position: "absolute",
          marginLeft: "20vw",
          top: "420px",
          left: "610px",
          zIndex: "4",
        }}
      >
        <button onClick={toggleSwitch}>
          {isSwitchedOn ? "Vypnout" : "Zapnout"}
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          marginLeft: "20vw",
          top: "150px",
          left: "110px",
          zIndex: "4",
          border: "black solid 1px",
          padding: "10px",
        }}
      >
        <h1>dostupné wifi sítě</h1>
        <p>{isSwitchedOn ? "136.200.123.175" : "Žádné dostupné sítě"}</p>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        zoomOnScroll={false}
        panOnDrag={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        selectNodesOnDrag={false}
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
      />
    </div>
  );
}

export default WhatIsWiFiComponent;
