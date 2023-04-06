import React, { useCallback, useState, useEffect, useRef } from "react";
import ReactFlow, {
  useNodes,
  useEdges,
  addEdge,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Controls,
  updateEdge,
} from "reactflow";
import { Provider } from "zustand";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import server from "../../images/nodes/server.png";
import bts from "../../images/nodes/btsvez.jpg";
import client from "../../images/nodes/klient.jpg";
import wifi from "../../images/nodes/wifi.jpg";
import gateway from "../../images/nodes/gateway.jpg";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RuleIcon from "@mui/icons-material/Rule";
import CloseOpen from "./closeOpenWindow";
import { connectClientWirelessNodes } from "../../Data/Flow/connectClientWireless";
import { connectClientWirelessEdges } from "../../Data/Flow/edges/connectClientWireless";

function Flow({ nodes, edges, setEdges, game, onNodesChange, onEdgesChange }) {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    const nodes = reactFlowInstance.getNodes();
    console.log(nodes);
  }, []);

  useEffect(() => {
    const edges = reactFlowInstance.getEdges();
    console.log(edges);
  }, [reactFlowInstance]);

  const edgeUpdateSuccessful = useRef(true);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  return (
    <>
      <div
        style={{ height: "95vh", width: "80%", marginLeft: "20%" }}
        className={`${game}-bg`}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          snapToGrid
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          selectNodesOnDrag={true}
          attributionPosition="bottom-right"
          onConnect={onConnect}
        />
      </div>
    </>
  );
}

function ConnectClientsWirelessComponent({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    connectClientWirelessNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    connectClientWirelessEdges
  );
  const finalCountPluggedClient = 10;

  useEffect(() => {
    if (countNodesByType(nodes, "client-plugged") == finalCountPluggedClient) {
      setAlertMessage(
        "Perfektní! Zvládl jsi umístit všechna zařízení tak, aby se mohli všichni připojit k internetu. Při umisťování jsi viděl, že každé zařízení má jiný dosah. Pojďme si nyní říct. Jaký dosah ve skutečnosti tato zařízení mají. Doma používáme WiFi router, který může WiFi signál vysílat do vzdálenosti 50–100 metrů, ale může být i menší, pokud máte tlusté zdi. Dosah signálu vysílaného BTS věží je až 5 km. Na těžko dostupných místech využíváme satelity, které komunikují z oběžné dráhy v různé výšce. Ty nejnižší jsou ve výšce 200 km. Ty nejvyšší jsou až 36 000 km nad zemí. Pro přenos dat na větší vzdálenosti používáme kabely."
      );
      setGameAfterModalClose("noGame");
      setOpenModal(true);
    }
    const intervalId = setInterval(() => {
      const clientInfoNodes = nodes.filter(
        (node) => node.className === "client-plugged"
      );

      const clientBuildNodes = nodes.filter(
        (node) => node.className === "client-build"
      );

      const tempClientNodes = clientInfoNodes.concat(clientBuildNodes);

      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes)) {
          node.className = "client-plugged";
        } else {
          node.className = "client-build";
        }
      });

      // iterate through each node in tempClientNodes
      tempClientNodes.forEach((tempNode) => {
        // check if the node already exists in nodes
        const index = nodes.findIndex((node) => node.id === tempNode.id);
        if (index !== -1) {
          // remove the existing node from nodes
          nodes.splice(index, 1);
        }
        // add the new node to nodes
        nodes.push(tempNode);
      });
    }, 10);

    // Clear the interval when the component unmounts or when the nodes state changes
    return () => clearInterval(intervalId);
  }, [nodes]);

  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 2) {
        setAlertMessage("více už ne");
        setGameAfterModalClose(game);
        setOpenModal(true);
      } else {
        let newNode = {};
        newNode = {
          id: `${ipv4Address}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: `${device}`,
          data: { label: `${ipv4Address}` },
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
      }
    },
    [nodes, setNodes]
  );

  return (
    <>
      <CloseOpen
        content={<AddNodeButtons handleAddNode={handleAddNode} nodes={nodes} />}
      />
      <ReactFlowProvider>
        <Flow
          setEdges={setEdges}
          edges={edges}
          nodes={nodes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        />
      </ReactFlowProvider>
    </>
  );
}

function isNodeInRange(nodeId, nodes) {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) => node.className === "wifi-build");
  const btsNodes = nodes.filter((node) => node.className === "bts-build");
  const wifiRange = 100;
  const btsRange = 200;

  // Check if node is at most 100 away from some wifi nodes
  for (let i = 0; i < wifiNodes.length; i++) {
    const wifiNode = wifiNodes[i];
    const distance = Math.sqrt(
      Math.pow(node.position.x - wifiNode.position.x, 2) +
        Math.pow(node.position.y - wifiNode.position.y, 2)
    );
    if (distance <= wifiRange) {
      return true;
    }
  }

  // Check if node is at most 200 away from some bts nodes
  for (let i = 0; i < btsNodes.length; i++) {
    const btsNode = btsNodes[i];
    const distance = Math.sqrt(
      Math.pow(node.position.x - btsNode.position.x, 2) +
        Math.pow(node.position.y - btsNode.position.y, 2)
    );
    if (distance <= btsRange) {
      return true;
    }
  }

  return false;
}

function countNodesByType(nodes, type) {
  let count = 0;

  for (const node of nodes) {
    if (node.className === type) {
      count++;
    }
  }

  return count;
}

function generateIpv4Address() {
  let ipv4Address = "";
  for (let i = 0; i < 4; i++) {
    ipv4Address += Math.floor(Math.random() * 256);
    if (i !== 3) {
      ipv4Address += ".";
    }
  }
  return ipv4Address;
}

function AddNodeButtons({ handleAddNode, nodes }) {
  const wifiLeft = 2 - countNodesByType(nodes, "wifi-build");
  const btsLeft = 2 - countNodesByType(nodes, "bts-build");

  return (
    <div className="connect-client-wireless-button-container">
      <Tooltip title="WIFI" placement="left">
        <IconButton>
          <Badge badgeContent={wifiLeft} color="primary">
            <img
              src={wifi}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("wifi-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="BTS VĚŽ" placement="left">
        <IconButton>
          <Badge badgeContent={btsLeft} color="primary">
            <img
              src={bts}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("bts-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ConnectClientsWirelessComponent;
