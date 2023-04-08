import { useCallback, useEffect } from "react";
import { useNodesState, useEdgesState, ReactFlowProvider } from "reactflow";
import Flow from "./flow";
import AddNodeButtons from "./addNodeButtons";
import "./style.css";

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

function FlowWithProvider({ setOpenDialog, game }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // check if clients are plugged
  useEffect(() => {
    const intervalId = setInterval(() => {
      const clientInfoNodes = nodes.filter(
        (node) => node.className === DEVICE_TYPE.CLIENT_PLUGGED
      );

      const clientBuildNodes = nodes.filter(
        (node) => node.className === DEVICE_TYPE.CLIENT_UNPLUGGED
      );

      const tempClientNodes = clientInfoNodes.concat(clientBuildNodes);

      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes, edges)) {
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

  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 7) {
        setOpenDialog(true, TOO_MANY_DEVICES_ERROR);
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
    if (isConnected(nodes, edges)) {
      if (!hasGatewayBridge(nodes, edges)) {
        if (!hasArticulationGateway(nodes, edges)) {
          if (hasCorrectEdge(nodes, edges)) {
            if (countNodesByType(nodes, DEVICE_TYPE.CLIENT_UNPLUGGED) === 0) {
              switch (game) {
                case "build-network-1":
                  if (
                    countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 0 &&
                    countNodesByType(nodes, DEVICE_TYPE.SERVER) > 0 &&
                    countNodesByType(nodes, DEVICE_TYPE.GATEWAY) > 2
                  ) {
                    setOpenDialog(true, FINAL_MESSAGE, "noGame");
                  } else {
                    setOpenDialog(true, MISSING_DEVICES_TASK1_ERROR);
                  }
                  break;
                case "build-network-2":
                  if (
                    countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 0 &&
                    countNodesByType(nodes, DEVICE_TYPE.SERVER) > 0 &&
                    countNodesByType(nodes, DEVICE_TYPE.BTS) > 0
                  ) {
                    setOpenDialog(true, FINAL_MESSAGE, "noGame");
                  } else {
                    setOpenDialog(true, MISSING_DEVICES_TASK2_ERROR);
                  }
                  break;
                case "build-network-3":
                  if (
                    countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) > 2 &&
                    countNodesByType(nodes, DEVICE_TYPE.SERVER) > 2
                  ) {
                    setOpenDialog(true, FINAL_MESSAGE, "noGame");
                  } else {
                    setOpenDialog(true, MISSING_DEVICES_TASK3_ERROR);
                  }
                  break;
                case "build-network-4":
                  setOpenDialog(true, FINAL_MESSAGE, "noGame");
                  break;
              }
            } else {
              setOpenDialog(true, UNPLUGGED_CLIENT_ERROR);
            }
          } else {
            setOpenDialog(true, INCORRECT_EDGE_ERROR);
          }
        } else {
          setOpenDialog(true, ARTICULATION_ERROR);
        }
      } else {
        setOpenDialog(true, BRIDGE_ERROR);
      }
    } else {
      setOpenDialog(true, MISSING_CONNECTION_ERROR);
    }
  }
  return (
    <>
      <AddNodeButtons
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
  const wifiNodes = nodes.filter((node) => node.className === DEVICE_TYPE.WIFI);
  const btsNodes = nodes.filter((node) => node.className === DEVICE_TYPE.BTS);
  const gatewayNodes = nodes.filter(
    (node) => node.className === DEVICE_TYPE.GATEWAY
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
      node.className !== DEVICE_TYPE.CLIENT_UNPLUGGED &&
      node.className !== DEVICE_TYPE.CLIENT_PLUGGED &&
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
    if (node.className === DEVICE_TYPE.GATEWAY) {
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

  // Store nodes with class DEVICE_TYPE.CLIENT_UNPLUGGED, DEVICE_TYPE.SERVER, DEVICE_TYPE.GATEWAY, DEVICE_TYPE.WIFI, and DEVICE_TYPE.BTS
  for (const node of nodes) {
    if (node.className === DEVICE_TYPE.SERVER) {
      serverNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.GATEWAY) {
      gatewayNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.WIFI) {
      wifiNodes.add(node.id);
    } else if (node.className === DEVICE_TYPE.BTS) {
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
