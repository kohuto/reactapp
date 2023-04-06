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
import server from "../../../images/nodes/server.png";
import bts from "../../../images/nodes/btsvez.jpg";
import client from "../../../images/nodes/klient.jpg";
import wifi from "../../../images/nodes/wifi.jpg";
import gateway from "../../../images/nodes/gateway.jpg";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RuleIcon from "@mui/icons-material/Rule";

function Flow({ nodes, edges, setEdges, game, onNodesChange, onEdgesChange }) {
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
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          selectNodesOnDrag={true}
          attributionPosition="bottom-right"
          onConnect={onConnect}
        >
          <Controls
            showFitView={false}
            showInteractive={false}
            position="bottom-right"
          />
        </ReactFlow>
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

  // check if clients are plugged
  useEffect(() => {
    const intervalId = setInterval(() => {
      const clientInfoNodes = nodes.filter(
        (node) => node.className === "client-plugged"
      );

      const clientBuildNodes = nodes.filter(
        (node) => node.className === "client-build"
      );

      const tempClientNodes = clientInfoNodes.concat(clientBuildNodes);

      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes, edges)) {
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
      if (nodeCount >= 7) {
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

  function checkValidty() {
    setGameAfterModalClose(game);
    if (isConnected(nodes, edges)) {
      if (!hasGatewayBridge(nodes, edges)) {
        if (!hasArticulationGateway(nodes, edges)) {
          if (hasCorrectEdge(nodes, edges)) {
            if (countNodesByType(nodes, "client-build") === 0) {
              switch (game) {
                case "build-network-1":
                  if (
                    countNodesByType(nodes, "client-plugged") > 0 &&
                    countNodesByType(nodes, "server-build") > 0 &&
                    countNodesByType(nodes, "gatewaz-build") > 2
                  ) {
                    setGameAfterModalClose("noGame");
                    setAlertMessage("good job");
                  } else {
                    setAlertMessage(
                      "Potřebuješ aspoň jeden server, jednoho klienta a tři chytré křižovatky."
                    );
                  }
                  break;
                case "build-network-2":
                  if (
                    countNodesByType(nodes, "client-plugged") > 0 &&
                    countNodesByType(nodes, "server-build") > 0 &&
                    countNodesByType(nodes, "bts-build") > 0
                  ) {
                    setGameAfterModalClose("noGame");
                    setAlertMessage("good job");
                  } else {
                    setAlertMessage(
                      "potřebuješ aspoň jeden server, jednoho klienta a jednu bts věž"
                    );
                  }
                  break;
                case "build-network-3":
                  if (
                    countNodesByType(nodes, "client-plugged") > 2 &&
                    countNodesByType(nodes, "server-build") > 2
                  ) {
                    setGameAfterModalClose("noGame");
                    setAlertMessage("good job");
                  } else {
                    setAlertMessage(
                      "potřebuješ aspoň tři servery a tři klienty"
                    );
                  }
                  break;
                case "build-network-4":
                  setGameAfterModalClose("noGame");
                  setAlertMessage("good job");
                  break;
              }
            } else {
              setAlertMessage(
                "všichni klienti musí být připojení. Proto musí být v dosahu nějaké BTS věže nebo wifi routeru. Kdžy je klient v dosahu zobrazí se mu nad hlavou ikona wifi"
              );
            }
          } else {
            setAlertMessage(
              "Hrany mohou vést pouze mezi dvěma křižovatkami, mezi křižovatkou a BTS/serverem/wifi"
            );
          }
        } else {
          setAlertMessage("nesmi obsahovat artikulace");
        }
      } else {
        setAlertMessage("nesmi obsahovat mosty mezi krizovatkami");
      }
    } else {
      setAlertMessage(
        "Všechna zařízení musí být navzájem propojeny kabelem (pouze klient bude připojen bezdrátově)."
      );
    }
    setOpenModal(true);
  }
  return (
    <>
      <Buttons
        handleAddNode={handleAddNode}
        checkValidty={checkValidty}
        nodes={nodes}
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

function isNodeInRange(nodeId, nodes, edges) {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) => node.className === "wifi-build");
  const btsNodes = nodes.filter((node) => node.className === "bts-build");
  const gatewayNodes = nodes.filter(
    (node) => node.className === "gateway-build"
  );
  const wifiRange = 100;
  const btsRange = 250;

  // Check if node is at most 100 away from some wifi nodes
  for (let i = 0; i < wifiNodes.length; i++) {
    const wifiNode = wifiNodes[i];
    const distance = Math.sqrt(
      Math.pow(node.position.x - wifiNode.position.x, 2) +
        Math.pow(node.position.y - wifiNode.position.y, 2)
    );
    if (distance <= wifiRange) {
      // Check if there is an edge between the wifi node and some gateway node
      const connectedGateway = gatewayNodes.some((gatewayNode) => {
        return edges.some((edge) => {
          return (
            (edge.source === gatewayNode.id && edge.target === wifiNode.id) ||
            (edge.target === gatewayNode.id && edge.source === wifiNode.id)
          );
        });
      });
      if (connectedGateway) {
        return true;
      }
    }
  }

  // Check if node is at most 250 away from some bts nodes
  for (let i = 0; i < btsNodes.length; i++) {
    const btsNode = btsNodes[i];
    const distance = Math.sqrt(
      Math.pow(node.position.x - btsNode.position.x, 2) +
        Math.pow(node.position.y - btsNode.position.y, 2)
    );
    if (distance <= btsRange) {
      // Check if there is an edge between the bts node and some gateway node
      const connectedGateway = gatewayNodes.some((gatewayNode) => {
        return edges.some((edge) => {
          return (
            (edge.source === gatewayNode.id && edge.target === btsNode.id) ||
            (edge.target === gatewayNode.id && edge.source === btsNode.id)
          );
        });
      });
      if (connectedGateway) {
        return true;
      }
    }
  }

  return false;
}

function isConnected(nodes, edges) {
  // Create an adjacency list to represent the graph
  const adjList = {};
  for (const node of nodes) {
    adjList[node.id] = [];
  }
  if (Object.keys(adjList).length < 2) return true;
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
    if (
      node.className !== "client-build" &&
      node.className !== "client-plugged" &&
      !visited[node.id]
    ) {
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
  if (Object.keys(adjList).length < 2) return false;
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

function hasCorrectEdge(nodes, edges) {
  const serverNodes = new Set();
  const gatewayNodes = new Set();
  const wifiNodes = new Set();
  const btsNodes = new Set();

  // Store nodes with class "client-build", "server-build", "gateway-build", "wifi-build", and "bts-build"
  for (const node of nodes) {
    if (node.className === "server-build") {
      serverNodes.add(node.id);
    } else if (node.className === "gateway-build") {
      gatewayNodes.add(node.id);
    } else if (node.className === "wifi-build") {
      wifiNodes.add(node.id);
    } else if (node.className === "bts-build") {
      btsNodes.add(node.id);
    }
  }

  // Check if any edges connect a client node and a server node, following the allowed edge types
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (
      !(
        (gatewayNodes.has(source) && gatewayNodes.has(target)) ||
        (gatewayNodes.has(source) && wifiNodes.has(target)) ||
        (gatewayNodes.has(source) && btsNodes.has(target)) ||
        (gatewayNodes.has(source) && serverNodes.has(target)) ||
        (gatewayNodes.has(target) && wifiNodes.has(source)) ||
        (gatewayNodes.has(target) && btsNodes.has(source)) ||
        (gatewayNodes.has(target) && serverNodes.has(source))
      )
    ) {
      return false;
    }
  }

  return true;
}

function hasArticulationGateway(nodes, edges) {
  const gatewayNodes = new Set();
  const gatewayEdges = [];

  // Store nodes with class "gateway-build" and edges between them
  for (const node of nodes) {
    if (node.className === "gateway-build") {
      gatewayNodes.add(node.id);
    }
  }
  for (const edge of edges) {
    if (gatewayNodes.has(edge.source) && gatewayNodes.has(edge.target)) {
      gatewayEdges.push(edge);
    }
  }

  // Use DFS to check for articulation points in the subgraph
  const adjList = {};
  for (const node of gatewayNodes) {
    adjList[node] = [];
  }
  for (const edge of gatewayEdges) {
    adjList[edge.source].push(edge.target);
    adjList[edge.target].push(edge.source);
  }

  const visited = {};
  const parent = {};
  const low = {};
  const disc = {};
  const ap = new Set();
  let time = 0;

  function dfs(node) {
    visited[node] = true;
    disc[node] = low[node] = ++time;
    let children = 0;

    for (const neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        children++;
        parent[neighbor] = node;
        dfs(neighbor);

        low[node] = Math.min(low[node], low[neighbor]);

        if (parent[node] === undefined && children > 1) {
          ap.add(node);
        }
        if (parent[node] !== undefined && low[neighbor] >= disc[node]) {
          ap.add(node);
        }
      } else if (neighbor !== parent[node]) {
        low[node] = Math.min(low[node], disc[neighbor]);
      }
    }
  }

  for (const node of gatewayNodes) {
    if (!visited[node]) {
      dfs(node);
    }
  }

  return ap.size > 0;
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

function countNodesByType(nodes, type) {
  let count = 0;

  for (const node of nodes) {
    if (node.className === type) {
      count++;
    }
  }

  return count;
}

function Buttons({ handleAddNode, checkValidty, nodes }) {
  const serversLeft = 7 - countNodesByType(nodes, "server-build");
  const gatewayLeft = 7 - countNodesByType(nodes, "gateway-build");
  const clientLeft = 7 - countNodesByType(nodes, "client-build");
  const wifiLeft = 7 - countNodesByType(nodes, "wifi-build");
  const btsLeft = 7 - countNodesByType(nodes, "bts-build");

  return (
    <div className="build-network-button-container">
      <Tooltip title="SERVER" placement="left">
        <IconButton>
          <Badge badgeContent={serversLeft} color="primary">
            <img
              src={server}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("server-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip
        title="CHYTRÁ KŘIŽOVATKA"
        placement="left"
        style={{ marginTop: "1vh", marginBottom: "1vh" }}
      >
        <IconButton>
          <Badge badgeContent={gatewayLeft} color="primary">
            <img
              src={gateway}
              style={{ width: "60px", height: "20px" }}
              onClick={() => handleAddNode("gateway-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="KLIENT" placement="left">
        <IconButton>
          <Badge badgeContent={clientLeft} color="primary">
            <img
              src={client}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("client-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
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
      <Tooltip title="ZKONTROLOVAT" placement="left">
        <IconButton onClick={checkValidty}>
          <RuleIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default FlowWithProvider;
