import { useCallback, useEffect } from "react";
import { useNodesState, useEdgesState } from "reactflow";
import "./style.css";
import CreativeModeFlow from "../../../CreativeMode/Flow/creativeModeFlow";
import AddDeviceButtons from "../../../CreativeMode/addDeviceButtons";
import "../../../CreativeMode/creativeMode.css";
import CheckButton from "./checkButton";
import BasicModal from "../../../DialogWindow/basicModal";
import { useState } from "react";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged-creative",
  CLIENT_UNPLUGGED: "client-unplugged-creative",
  WIFI: "wifi-creative",
  BTS: "bts-creative",
  GATEWAY: "gateway-creative",
  SERVER: "server-creative",
};

const FINAL_MESSAGE = "Perfektní! Podařilo se ti vytvořit síť podle zadání.";
const MISSING_CONNECTION_ERROR =
  "Všechna zařízení musí být navzájem propojeny kabelem (pouze klient bude připojen bezdrátově).";
const BRIDGE_ERROR = "nesmi obsahovat mosty mezi krizovatkami";
const ARTICULATION_ERROR = "nesmi obsahovat artikulace";
const INCORRECT_EDGE_ERROR =
  "Hrany mohou vést pouze mezi dvěma křižovatkami, mezi křižovatkou a BTS/serverem/wifi";
const UNPLUGGED_CLIENT_ERROR =
  "všichni klienti musí být připojení. Proto musí být v dosahu nějaké BTS věže nebo wifi routeru. Když je klient v dosahu zobrazí se mu nad hlavou ikona wifi";
const MISSING_DEVICES_TASK3_ERROR =
  "potřebuješ aspoň tři servery a tři klienty";
const MISSING_DEVICES_TASK2_ERROR =
  "potřebuješ aspoň jeden server, jednoho klienta a jednu bts věž";
const MISSING_DEVICES_TASK1_ERROR =
  "Potřebuješ aspoň jeden server, jednoho klienta a tři chytré křižovatky.";
const TOO_MANY_DEVICES_ERROR = "vice uz jich nepridavej. Uz jich mas az moc";

function FlowWithProvider({ info, setGame }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  /**
   * Checks if clients are plugged in and updates their class accordingly.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      const clientInfoNodes = nodes.filter(
        (node) =>
          node.className.includes(DEVICE_TYPE.CLIENT_PLUGGED) &&
          !node.className.includes("nodrag")
      );
      const clientBuildNodes = nodes.filter(
        (node) =>
          node.className.includes(DEVICE_TYPE.CLIENT_UNPLUGGED) &&
          !node.className.includes("nodrag")
      );

      const tempClientNodes = clientInfoNodes.concat(clientBuildNodes);
      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes)) {
          node.className = [DEVICE_TYPE.CLIENT_PLUGGED];
        } else {
          node.className = [DEVICE_TYPE.CLIENT_UNPLUGGED];
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

  /**
   * This function handles the logic for adding a new node to the network.
   * It first checks whether there are too many nodes of the given device type, and if not, generates a new node object
   * and adds it to the `nodes` array.
   */
  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 10) {
        setErrorMessage(TOO_MANY_DEVICES_ERROR);
        setIsInvalid(true);
      } else {
        let newNode = {
          id: `${ipv4Address}`,
          type: "custom",
          position: { x: 300, y: 300 },
          className: `${device}`,
          data: { label: `${ipv4Address}` },
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
      }
    },
    [nodes, setNodes]
  );

  /**
   * This function checks whether the current network configuration is valid, based on the rules for the given game.
   * It first checks for basic connectivity and structural constraints, then applies game-specific rules to determine
   * whether the configuration is complete and successful.
   *
   * If any errors are found, it displays a corresponding error message to the user.
   */
  function checkValidity() {
    if (!isConnected(nodes, edges)) {
      setErrorMessage(MISSING_CONNECTION_ERROR);
      setIsInvalid(true);
      return;
    }
    if (hasGatewayBridge(nodes, edges)) {
      setErrorMessage(BRIDGE_ERROR);
      setIsInvalid(true);
      return;
    }
    if (hasArticulationGateway(nodes, edges)) {
      setErrorMessage(ARTICULATION_ERROR);
      setIsInvalid(true);
      return;
    }
    if (!hasCorrectEdge(nodes, edges)) {
      setErrorMessage(INCORRECT_EDGE_ERROR);
      setIsInvalid(true);
      return;
    }
    if (countNodesByType(nodes, DEVICE_TYPE.CLIENT_UNPLUGGED) > 0) {
      setErrorMessage(UNPLUGGED_CLIENT_ERROR);
      setIsInvalid(true);
      return;
    }

    switch (info.type) {
      case "build-network-1":
        if (
          countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 0 &&
          countNodesByType(nodes, DEVICE_TYPE.SERVER) > 0 &&
          countNodesByType(nodes, DEVICE_TYPE.GATEWAY) > 2
        ) {
          setIsValid(true);
        } else {
          setErrorMessage(MISSING_DEVICES_TASK1_ERROR);
          setIsInvalid(true);
        }
        return;
      case "build-network-2":
        if (
          countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 0 &&
          countNodesByType(nodes, DEVICE_TYPE.SERVER) > 0 &&
          countNodesByType(nodes, DEVICE_TYPE.BTS) > 0
        ) {
          setIsValid(true);
        } else {
          setErrorMessage(MISSING_DEVICES_TASK2_ERROR);
          setIsInvalid(true);
        }
        return;
      case "build-network-3":
        if (
          countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 0 &&
          countNodesByType(nodes, DEVICE_TYPE.SERVER) > 2
        ) {
          setIsValid(true);
        } else {
          setErrorMessage(MISSING_DEVICES_TASK3_ERROR);
          setIsInvalid(true);
        }
        return;
      case "build-network-4":
        setIsValid(true);
        return;
      default:
        return;
    }
  }

  return (
    <>
      <ToggleButton
        value="delete"
        selected={isDeleteMode}
        onChange={() => setIsDeleteMode(!isDeleteMode)}
      >
        <DeleteIcon />
      </ToggleButton>

      <BasicModal content={info.content} />
      {isInvalid && (
        <AlertDialog
          closeAction={() => setIsInvalid(false)}
          content={errorMessage}
        />
      )}
      {isValid && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      <AddDeviceButtons handleAddNode={handleAddNode} nodes={nodes} />
      <CheckButton checkValidity={checkValidity} />
      <CreativeModeFlow
        setEdges={setEdges}
        edges={edges}
        nodes={nodes}
        setNodes={setNodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        isDeleteMode={isDeleteMode}
      />
    </>
  );
}

// check if nodes is in range of some BTS or WiFi router
function isNodeInRange(nodeId, nodes) {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) =>
    node.className.includes(DEVICE_TYPE.WIFI)
  );
  const btsNodes = nodes.filter((node) =>
    node.className.includes(DEVICE_TYPE.BTS)
  );

  // Check if node is at most 100 away from some wifi nodes
  for (let i = 0; i < wifiNodes.length; i++) {
    const wifiNode = wifiNodes[i];
    const distance = Math.sqrt(
      Math.pow(node.position.x - wifiNode.position.x, 2) +
        Math.pow(node.position.y - wifiNode.position.y, 2)
    );
    if (distance <= 100) {
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
    if (distance <= 100) {
      return true;
    }
  }

  return false;
}

// check if network is connected using BFS
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

  // Perform BFS starting from a random node
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
  return nodes.every(
    (node) =>
      node.className.includes(DEVICE_TYPE.CLIENT_UNPLUGGED) ||
      node.className.includes(DEVICE_TYPE.CLIENT_PLUGGED) ||
      visited[node.id]
  );
}

// find bridges in network (only between gateways)
function hasGatewayBridge(nodes, edges) {
  const adjList = {};
  const visited = new Set();
  const low = new Map();
  const ids = new Map();
  let id = 0;
  let bridges = false;

  // Build adjacency list and store gateway nodes
  const gatewayNodes = nodes
    .filter((node) => node.className === DEVICE_TYPE.GATEWAY)
    .map((node) => node.id);
  for (const node of nodes) {
    adjList[node.id] = [];
  }
  for (const edge of edges) {
    adjList[edge.source].push(edge.target);
    adjList[edge.target].push(edge.source);
  }
  if (Object.keys(adjList).length < 2) return false;

  // DFS algorithm
  function dfs(node, parent) {
    visited.add(node);
    ids.set(node, id);
    low.set(node, id);
    id++;
    for (const neighbor of adjList[node]) {
      if (neighbor === parent) continue;
      if (!visited.has(neighbor)) {
        dfs(neighbor, node);
        low.set(node, Math.min(low.get(node), low.get(neighbor)));
        if (
          ids.get(node) < low.get(neighbor) &&
          gatewayNodes.includes(node) &&
          gatewayNodes.includes(neighbor)
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

  // Store nodes with class DEVICE_TYPE.CLIENT_UNPLUGGED, DEVICE_TYPE.SERVER, DEVICE_TYPE.GATEWAY, DEVICE_TYPE.WIFI, and DEVICE_TYPE.BTS
  nodes.forEach((node) => {
    if (node.className === DEVICE_TYPE.SERVER) {
      serverNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.GATEWAY) {
      gatewayNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.WIFI) {
      wifiNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.BTS) {
      btsNodes.add(node.id);
    }
  });

  // Check if any edges connect a client node and a server node, following the allowed edge types
  for (const edge of edges) {
    const source = edge.source;
    const target = edge.target;
    if (
      !(
        (gatewayNodes.has(source) &&
          (gatewayNodes.has(target) ||
            wifiNodes.has(target) ||
            btsNodes.has(target) ||
            serverNodes.has(target))) ||
        (wifiNodes.has(source) && gatewayNodes.has(target)) ||
        (btsNodes.has(source) && gatewayNodes.has(target)) ||
        (serverNodes.has(source) && gatewayNodes.has(target))
      )
    ) {
      return false;
    }
  }

  return true;
}

// find any articulation in network
function hasArticulationGateway(nodes, edges) {
  const gatewayNodes = new Set();
  const gatewayEdges = [];

  // Store nodes with class DEVICE_TYPE.GATEWAY and edges between them
  for (const node of nodes) {
    if (node.className === DEVICE_TYPE.GATEWAY) {
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

// get random IPv4 adress
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

// get number of nodes of specific type
function countNodesByType(nodes, type) {
  return nodes.filter((node) => node.className.includes(type)).length;
}

export default FlowWithProvider;
