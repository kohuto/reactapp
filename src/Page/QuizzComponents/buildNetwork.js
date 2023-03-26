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

function Flow({
  nodes,
  edges,
  setNodes,
  setEdges,
  //  setAlertMessage,
  // setOpenModal,
  game,
  // setGameAfterModalClose,
  onNodesChange,
  onEdgesChange,
}) {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    const nodes = reactFlowInstance.getNodes();
    console.log(nodes);
  }, []);

  useEffect(() => {
    const edges = reactFlowInstance.getEdges();
    console.log(edges);
  }, [reactFlowInstance]);

  /*const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );*/

  const edgeUpdateSuccessful = useRef(true);
  //const [nodes, , onNodesChange] = useNodesState(initialNodes);
  //const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          //  onConnect={onConnect}
          selectNodesOnDrag={true}
          //  nodeTypes={nodeTypes}
          attributionPosition="top-right"
          onConnect={onConnect}
        />
      </div>
    </>
  );
}

function FlowWithProvider({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const handleAddNode = useCallback(
    (device) => {
      const ipv4Address = generateIpv4Address();
      let newNode = {};
      switch (device) {
        case "server":
          newNode = {
            id: `${ipv4Address}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "server-build",
            data: { label: `${ipv4Address}` },
          };
          break;
        case "gateway":
          newNode = {
            id: `${ipv4Address}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "gateway-build",
            data: { label: `${ipv4Address}` },
          };
          break;
        case "client":
          newNode = {
            id: `${ipv4Address}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "client-build",
            data: { label: `${ipv4Address}` },
          };
          break;
        case "bts":
          newNode = {
            id: `${ipv4Address}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "bts-build",
            data: { label: `${ipv4Address}` },
          };
          break;
        case "wifi":
          newNode = {
            id: `${ipv4Address}`,
            type: "default",
            position: { x: 300, y: 300 },
            className: "wifi-build",
            data: { label: `${ipv4Address}` },
          };
          break;
      }
      setNodes((prevNodes) => [...prevNodes, newNode]);
    },
    [nodes, setNodes]
  );

  function checkValidty() {
    console.log(nodes.length);
    console.log(edges.length);
    setGameAfterModalClose(game);

    if (isConnected(nodes, edges)) {
      if (!hasGatewayBridge(nodes, edges)) {
        if (!hasClientServerEdge(nodes, edges)) {
          if (isWifiAndBTSConnected(nodes, edges)) {
            if (checkLeafNodes(nodes, edges)) {
              //setGameAfterModalClose("noGame");
              setAlertMessage("good job");
            } else {
              setAlertMessage("musi byt list");
            }
          } else {
            setAlertMessage("wifi musi byt pripojena k jedne krizovatce");
          }
        } else {
          setAlertMessage(
            "server nemůže být přímo porpojený s klientem. Cesta do serveru vede přes nějakou chytrou křižovatku"
          );
        }
      } else {
        setAlertMessage("nesmi obsahovat mosty mezi krizovatkami");
      }
    } else {
      setAlertMessage("neni spojity");
    }
    setOpenModal(true);
  }
  return (
    <>
      <Buttons
        handleAddNode={handleAddNode}
        setNodes={setNodes}
        onNodesChange={onNodesChange}
      />

      <button
        onClick={checkValidty}
        style={{
          position: "absolute",
          top: "90vh",
          right: "21vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Check validity
      </button>

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

function isConnected(nodes, edges) {
  // Create an adjacency list to represent the graph
  const adjList = {};
  for (const node of nodes) {
    adjList[node.id] = [];
  }
  for (const edge of edges) {
    adjList[edge.source].push(edge.target);
    adjList[edge.target].push(edge.source);
  }

  // Perform BFS starting from the first node
  const visited = {};
  const queue = [nodes[0].id];
  while (queue.length > 0) {
    const nodeId = queue.shift();
    if (!visited[nodeId]) {
      visited[nodeId] = true;
      for (const neighbor of adjList[nodeId]) {
        queue.push(neighbor);
      }
    }
  }

  // Check if every node was visited
  for (const node of nodes) {
    if (!visited[node.id]) {
      return false;
    }
  }
  return true;
}

function hasGatewayBridge(nodes, edges) {
  const adjList = new Map();
  const visited = new Set();
  const low = new Map();
  const ids = new Map();
  let id = 0;
  let bridges = false;
  const gatewayNodes = new Set();

  // Build adjacency list and store gateway nodes
  for (const node of nodes) {
    if (node.className === "gateway-build") {
      gatewayNodes.add(node.id);
    }
  }
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (!adjList.has(source)) adjList.set(source, []);
    if (!adjList.has(target)) adjList.set(target, []);
    adjList.get(source).push(target);
    adjList.get(target).push(source);
  }

  // DFS algorithm
  function dfs(node, parent) {
    visited.add(node);
    ids.set(node, id);
    low.set(node, id);
    id++;
    for (const neighbor of adjList.get(node)) {
      if (neighbor === parent) continue;
      if (!visited.has(neighbor)) {
        dfs(neighbor, node);
        low.set(node, Math.min(low.get(node), low.get(neighbor)));
        if (
          ids.get(node) < low.get(neighbor) &&
          gatewayNodes.has(node) &&
          gatewayNodes.has(neighbor)
        ) {
          bridges = true;
          return;
        }
      } else {
        low.set(node, Math.min(low.get(node), ids.get(neighbor)));
      }
    }
  }

  // Start DFS from each unvisited gateway node
  for (const gatewayNode of gatewayNodes) {
    if (!visited.has(gatewayNode)) dfs(gatewayNode, null);
  }

  return bridges;
}

function hasClientServerEdge(nodes, edges) {
  const clientNodes = new Set();
  const serverNodes = new Set();

  // Store nodes with class "client-build" and "server-build"
  for (const node of nodes) {
    if (node.className === "client-build") {
      clientNodes.add(node.id);
    } else if (node.className === "server-build") {
      serverNodes.add(node.id);
    }
  }

  // Check if any edges connect a client node and a server node
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (clientNodes.has(source) && serverNodes.has(target)) {
      return true;
    } else if (clientNodes.has(target) && serverNodes.has(source)) {
      return true;
    }
  }

  return false;
}

function isWifiAndBTSConnected(nodes, edges) {
  const wifiNodes = new Set();
  const BTSNodes = new Set();
  const gatewayNodes = new Set();
  const connectedNodes = new Set();

  // Store nodes with class "wifi-build", "bts-build", and "gateway-build"
  for (const node of nodes) {
    if (node.className === "wifi-build") {
      wifiNodes.add(node.id);
    } else if (node.className === "bts-build") {
      BTSNodes.add(node.id);
    } else if (node.className === "gateway-build") {
      gatewayNodes.add(node.id);
    }
  }

  // Check if each wifi node or BTS node has at least one edge connected to a gateway node
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (wifiNodes.has(source) || BTSNodes.has(source)) {
      if (gatewayNodes.has(target)) {
        connectedNodes.add(source);
      }
    }
    if (wifiNodes.has(target) || BTSNodes.has(target)) {
      if (gatewayNodes.has(source)) {
        connectedNodes.add(target);
      }
    }
  }

  // Check if all wifi nodes and BTS nodes have at least one connected edge to a gateway node
  for (const wifiNode of wifiNodes) {
    if (!connectedNodes.has(wifiNode)) {
      return false;
    }
  }
  for (const BTSNode of BTSNodes) {
    if (!connectedNodes.has(BTSNode)) {
      return false;
    }
  }

  return true;
}

function checkLeafNodes(nodes, edges) {
  const leafNodes = new Set();
  const wifiNodes = new Set();
  const serverNodes = new Set();
  const clientNodes = new Set();
  const BTSNodes = new Set();
  const adjList = new Map();

  // Store nodes with class "wifi-build", "server-build", "client-build", and "bts-build"
  for (const node of nodes) {
    if (node.className === "wifi-build") {
      wifiNodes.add(node.id);
    } else if (node.className === "server-build") {
      serverNodes.add(node.id);
    } else if (node.className === "client-build") {
      clientNodes.add(node.id);
    } else if (node.className === "bts-build") {
      BTSNodes.add(node.id);
    }
  }

  // Build adjacency list
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (!adjList.has(source)) adjList.set(source, []);
    if (!adjList.has(target)) adjList.set(target, []);
    adjList.get(source).push(target);
    adjList.get(target).push(source);
  }

  // Find leaf nodes for each type of node
  for (const wifiNode of wifiNodes) {
    if (adjList.get(wifiNode).length === 1) {
      leafNodes.add(wifiNode);
    }
  }
  for (const serverNode of serverNodes) {
    if (adjList.get(serverNode).length === 1) {
      leafNodes.add(serverNode);
    }
  }
  for (const clientNode of clientNodes) {
    if (adjList.get(clientNode).length === 1) {
      leafNodes.add(clientNode);
    }
  }
  for (const BTSNode of BTSNodes) {
    if (adjList.get(BTSNode).length === 1) {
      leafNodes.add(BTSNode);
    }
  }

  // Check if all nodes with class "wifi-build", "server-build", "client-build", and "bts-build" are leaf nodes
  for (const node of nodes) {
    if (
      (node.className === "wifi-build" ||
        node.className === "server-build" ||
        node.className === "client-build" ||
        node.className === "bts-build") &&
      !leafNodes.has(node.id)
    ) {
      return false;
    }
  }

  return true;
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
