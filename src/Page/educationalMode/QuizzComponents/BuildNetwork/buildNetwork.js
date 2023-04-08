import { useCallback, useEffect } from "react";
import { useNodesState, useEdgesState, ReactFlowProvider } from "reactflow";
import Flow from "./flow";
import AddNodeButtons from "./addNodeButtons";
import "./style.css";

/**
 * Object containing the possible types of devices.
 */
const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged",
  CLIENT_UNPLUGGED: "client",
  WIFI: "wifi-build",
  BTS: "bts-build",
  GATEWAY: "gateway-build",
  SERVER: "server-build",
};

const FINAL_MESSAGE = "good job";
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

/**
 * React component that displays the network builder with provider.
 *
 * @param {Object} setOpenDialog - A function that opens a dialog box.
 * @param {string} game - A string representing the current game being played.
 */
function FlowWithProvider({ setOpenDialog, game }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  /**
   * Checks if clients are plugged in and updates their class accordingly.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Separate the client nodes into two groups: plugged and unplugged
      const [clientInfoNodes, clientBuildNodes] = [
        nodes.filter((node) => node.className === DEVICE_TYPE.CLIENT_PLUGGED),
        nodes.filter((node) => node.className === DEVICE_TYPE.CLIENT_UNPLUGGED),
      ];
      const tempClientNodes = [...clientInfoNodes, ...clientBuildNodes];
      // Update the class of each client node based on whether it's within range of a WiFi or BTS node
      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes)) {
          node.className = DEVICE_TYPE.CLIENT_PLUGGED;
        } else {
          node.className = DEVICE_TYPE.CLIENT_UNPLUGGED;
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
      if (nodeCount >= 7) {
        setOpenDialog(true, TOO_MANY_DEVICES_ERROR);
      } else {
        let newNode = {
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

  /**
   * This function checks whether the current network configuration is valid, based on the rules for the given game.
   * It first checks for basic connectivity and structural constraints, then applies game-specific rules to determine
   * whether the configuration is complete and successful.
   *
   * If any errors are found, it displays a corresponding error message to the user.
   */
  function checkValidity() {
    const nodeCounts = countNodesByType(nodes);

    if (!isConnected(nodes, edges)) {
      return setOpenDialog(true, MISSING_CONNECTION_ERROR);
    }
    if (hasGatewayBridge(nodes, edges)) {
      return setOpenDialog(true, BRIDGE_ERROR);
    }
    if (hasArticulationGateway(nodes, edges)) {
      return setOpenDialog(true, ARTICULATION_ERROR);
    }
    if (!hasCorrectEdge(nodes, edges)) {
      return setOpenDialog(true, INCORRECT_EDGE_ERROR);
    }
    if (nodeCounts[DEVICE_TYPE.CLIENT_UNPLUGGED] > 0) {
      return setOpenDialog(true, UNPLUGGED_CLIENT_ERROR);
    }

    switch (game) {
      case "build-network-1":
        if (
          nodeCounts[DEVICE_TYPE.CLIENT_PLUGGED] > 0 &&
          nodeCounts[DEVICE_TYPE.SERVER] > 0 &&
          nodeCounts[DEVICE_TYPE.GATEWAY] > 2
        ) {
          return setOpenDialog(true, FINAL_MESSAGE, "noGame");
        } else {
          return setOpenDialog(true, MISSING_DEVICES_TASK1_ERROR);
        }
      case "build-network-2":
        if (
          nodeCounts[DEVICE_TYPE.CLIENT_PLUGGED] > 0 &&
          nodeCounts[DEVICE_TYPE.SERVER] > 0 &&
          nodeCounts[DEVICE_TYPE.BTS] > 0
        ) {
          return setOpenDialog(true, FINAL_MESSAGE, "noGame");
        } else {
          return setOpenDialog(true, MISSING_DEVICES_TASK2_ERROR);
        }
      case "build-network-3":
        if (
          nodeCounts[DEVICE_TYPE.CLIENT_PLUGGED] > 2 &&
          nodeCounts[DEVICE_TYPE.SERVER] > 2
        ) {
          return setOpenDialog(true, FINAL_MESSAGE, "noGame");
        } else {
          return setOpenDialog(true, MISSING_DEVICES_TASK3_ERROR);
        }
      case "build-network-4":
        return setOpenDialog(true, FINAL_MESSAGE, "noGame");
      default:
        return;
    }
  }

  return (
    <>
      <AddNodeButtons
        handleAddNode={handleAddNode}
        checkValidity={checkValidity}
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

/**
 * Determines whether a given node is within range of a WiFi or BTS node
 * @param {string} nodeId - The ID of the node to check
 * @param {Array} nodes - An array of all nodes in the network
 * @param {Array} edges - An array of all edges in the network
 * @returns {boolean} - Whether or not the node is within range of a WiFi or BTS node
 */
function isNodeInRange(nodeId, nodes, edges) {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) => node.className === DEVICE_TYPE.WIFI);
  const btsNodes = nodes.filter((node) => node.className === DEVICE_TYPE.BTS);
  const gatewayNodes = nodes.filter(
    (node) => node.className === DEVICE_TYPE.GATEWAY
  );
  const wifiRange = 100;
  const btsRange = 250;

  return [...wifiNodes, ...btsNodes].some((deviceNode) => {
    const isWifi = deviceNode.className === DEVICE_TYPE.WIFI;
    const distance = Math.sqrt(
      Math.pow(node.position.x - deviceNode.position.x, 2) +
        Math.pow(node.position.y - deviceNode.position.y, 2)
    );
    if (distance <= (isWifi ? wifiRange : btsRange)) {
      return edges.some((edge) => {
        return (
          (edge.source === deviceNode.id &&
            gatewayNodes.some(
              (gatewayNode) =>
                gatewayNode.id === edge.target &&
                gatewayNode.className === DEVICE_TYPE.GATEWAY
            )) ||
          (edge.target === deviceNode.id &&
            gatewayNodes.some(
              (gatewayNode) =>
                gatewayNode.id === edge.source &&
                gatewayNode.className === DEVICE_TYPE.GATEWAY
            ))
        );
      });
    }
    return false;
  });
}

/**
 * Checks whether all nodes in the graph are connected via edges.
 * @param {Object[]} nodes - An array of objects representing nodes in the graph
 * @param {Object[]} edges - An array of objects representing edges in the graph
 * @returns {boolean} - True if all nodes are connected, false otherwise
 */
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
      node.className === DEVICE_TYPE.CLIENT_UNPLUGGED ||
      node.className === DEVICE_TYPE.CLIENT_PLUGGED ||
      visited[node.id]
  );
}

/**
 * Determines whether there is a bridge (a gateway node that disconnects two components of the graph) in the given graph.
 * @param {Array} nodes - The nodes in the graph.
 * @param {Array} edges - The edges in the graph.
 * @returns {boolean} True if there is a bridge in the graph, false otherwise.
 */
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

/**
 * Checks if the edges in the graph connect client nodes to server nodes following the allowed edge types.
 * @param {Array} nodes - An array of objects representing the nodes in the graph.
 * @param {Array} edges - An array of objects representing the edges in the graph.
 * @returns {boolean} True if all edges connect client nodes to server nodes following the allowed edge types, false otherwise.
 */
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

/**
 * Checks whether the network has an articulation point between gateway nodes.
 * @param {Array} nodes - The nodes in the network.
 * @param {Array} edges - The edges in the network.
 * @returns {boolean} Whether the network has an articulation point between gateway nodes.
 */
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
  return nodes.filter((node) => node.className === type).length;
}

export default FlowWithProvider;
