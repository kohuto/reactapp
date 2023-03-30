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
import { connectClientWirelessNodes } from "../../Flow/data/connectClientWireless";
import { connectClientWirelessEdges } from "../../Flow/data/edges/connectClientWireless";

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
  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 2) {
        setAlertMessage("vice uz jich nepridavej. Uz jich mas az moc");
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
        content={
          <div className="connect-client-wireless-button-container">
            <Tooltip title="WIFI" placement="left">
              <IconButton>
                <Badge badgeContent={2} color="primary">
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
                <Badge badgeContent={2} color="primary">
                  <img
                    src={bts}
                    style={{ width: "60px", height: "40px" }}
                    onClick={() => handleAddNode("bts-build")}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
          </div>
        }
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

export default ConnectClientsWirelessComponent;
