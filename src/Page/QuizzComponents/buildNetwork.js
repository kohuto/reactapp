import React, { useCallback, useState, useEffect } from "react";
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
} from "reactflow";
import { Provider } from "zustand";

function Flow({
  nodes,
  edges,
  // setNodes,
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  const reactFlowInstance = useReactFlow();

  /* useEffect(() => {
    console.log(reactFlowInstance.getNodes);
  }, []);*/

  useEffect(() => {
    const nodes = reactFlowInstance.getNodes();
    console.log(nodes);
  }, [reactFlowInstance]);

  useEffect(() => {
    const edges = reactFlowInstance.getEdges();
    console.log(edges);
  }, [reactFlowInstance]);

  return (
    <>
      <div
        style={{ height: "95vh", width: "80%", marginLeft: "20%" }}
        className={`${game}-bg`}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          //  onNodesChange={onNodesChange}
          //  onEdgesChange={onEdgesChange}
          //  onConnect={onConnect}
          //  selectNodesOnDrag={true}
          //  nodeTypes={nodeTypes}
          attributionPosition="top-right"
        />
      </div>
    </>
  );
}

function FlowWithProvider(props) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const handleAddNode = useCallback(
    (device) => {
      let newNode = {};
      switch (device) {
        case "server":
          newNode = {
            id: `${"2001:718:1e05:604::512" + nodes.length + 1}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "server-build",
            data: { label: `${"2001:718:1e05:604::5122" + nodes.length}` },
          };
          break;
        case "gateway":
          newNode = {
            id: `${"2000:718:1e05:604::5" + nodes.length}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "gateway-build",
            data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
          };
          break;
        case "client":
          newNode = {
            id: `${"2000:718:1e05:604::5" + nodes.length}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "client-build",
            data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
          };
          break;
        case "bts":
          newNode = {
            id: `${"2000:718:1e05:604::5" + nodes.length}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "bts-build",
            data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
          };
          break;
        case "wifi":
          newNode = {
            id: `${"2000:718:1e05:604::5" + nodes.length}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "wifi-build",
            data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
          };
          break;
      }
      setNodes((prevNodes) => [...prevNodes, newNode]);
    },
    [nodes, setNodes]
  );
  return (
    <>
      <Buttons handleAddNode={handleAddNode} setNodes={setNodes} />
      <ReactFlowProvider>
        <Flow edges={edges} nodes={nodes} />
      </ReactFlowProvider>
    </>
  );
}

function Buttons({ handleAddNode }) {
  return (
    <>
      <button
        onClick={() => handleAddNode("server")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "1vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add Server
      </button>
      <button
        onClick={() => handleAddNode("gateway")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "5vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add gateway
      </button>
      <button
        onClick={() => handleAddNode("client")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "9vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add client
      </button>
      <button
        onClick={() => handleAddNode("wifi")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "13vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add wifi
      </button>
      <button
        onClick={() => handleAddNode("bts")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "17vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add bts
      </button>
    </>
  );
}

export default FlowWithProvider;
