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
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import server from "../images/nodes/server.png";
import bts from "../images/nodes/btsvez.jpg";
import client from "../images/nodes/klient.jpg";
import wifi from "../images/nodes/wifi.jpg";
import gateway from "../images/nodes/gateway.jpg";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RuleIcon from "@mui/icons-material/Rule";
import "./landingPage.css";
import Button from "@mui/material/Button";
import { landingPageNodes } from "../Flow/data/landingPage";
import { landingPageEdges } from "../Flow/data/edges/landingPage";

function Flow({
  nodes,
  edges,
  setNodes,
  setEdges,
  game,
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
      <div style={{ height: "100vh", width: "100vw" }} className={`${game}-bg`}>
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
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          attributionPosition="bottom-right"
          onConnect={onConnect}
        ></ReactFlow>
      </div>
    </>
  );
}

function LandingPage({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
  setIsLandingPage,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(landingPageNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(landingPageEdges);

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
    console.log(nodes.length);
    console.log(edges.length);
    setGameAfterModalClose(game);

    if (isConnected(nodes, edges)) {
      if (!hasGatewayBridge(nodes, edges)) {
        if (!hasArticulationGateway(nodes, edges)) {
          if (!hasClientServerEdge(nodes, edges)) {
            if (isWifiAndBTSConnected(nodes, edges)) {
              if (checkLeafNodes(nodes, edges)) {
                if (checkClientDistance(nodes, edges)) {
                  switch (game) {
                    case "build-network-1":
                      if (
                        countNodesByType(nodes, "client-build") > 0 &&
                        countNodesByType(nodes, "server-build") > 0
                      ) {
                        setGameAfterModalClose("noGame");
                        setAlertMessage("good job");
                      } else {
                        setAlertMessage(
                          "potřebuješ aspoň jeden server a jednoho klienta"
                        );
                      }
                      break;
                    case "build-network-2":
                      if (
                        countNodesByType(nodes, "client-build") > 0 &&
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
                        countNodesByType(nodes, "client-build") > 2 &&
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
                    "klienti musi byt v blizkosti wifi nebo bts veze"
                  );
                }
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
          setAlertMessage("nesmi obsahovat artikulace");
        }
      } else {
        setAlertMessage("nesmi obsahovat mosty mezi krizovatkami");
      }
    } else {
      setAlertMessage("musi byt spojity");
    }
    setOpenModal(true);
  }
  return (
    <>
      <ServiceBox
        setAlertMessage={setAlertMessage}
        setIsLandingPage={setIsLandingPage}
        setOpenModal={setOpenModal}
        setGameAfterModalClose={setGameAfterModalClose}
      />
      <Buttons
        handleAddNode={handleAddNode}
        checkValidty={checkValidty}
        nodes={nodes}
        setIsLandingPage={setIsLandingPage}
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

function checkClientDistance(nodes, edges) {
  const clientNodes = new Set();
  const wifiNodes = new Set();
  const BTSNodes = new Set();
  const maxDistanceWifi = 150;
  const maxDistanceBTS = 250;

  // Store nodes with class "client-build", "wifi-build", and "bts-build"
  for (const node of nodes) {
    if (node.className === "client-build") {
      clientNodes.add(node.id);
    } else if (node.className === "wifi-build") {
      wifiNodes.add(node.id);
    } else if (node.className === "bts-build") {
      BTSNodes.add(node.id);
    }
  }

  // Check that all client nodes are within distance of at least one BTS or WiFi node
  for (const clientNode of clientNodes) {
    const clientPos = nodes.find((node) => node.id === clientNode).position;
    let isWithinDistance = false;

    // Check wifi nodes
    for (const wifiNode of wifiNodes) {
      const wifiPos = nodes.find((node) => node.id === wifiNode).position;
      const distance = Math.sqrt(
        (clientPos.x - wifiPos.x) ** 2 + (clientPos.y - wifiPos.y) ** 2
      );
      if (distance < maxDistanceWifi) {
        isWithinDistance = true;
        break;
      }
    }

    if (isWithinDistance) {
      continue;
    }

    // Check BTS nodes
    for (const BTSNode of BTSNodes) {
      const BTSPos = nodes.find((node) => node.id === BTSNode).position;
      const distance = Math.sqrt(
        (clientPos.x - BTSPos.x) ** 2 + (clientPos.y - BTSPos.y) ** 2
      );
      if (distance < maxDistanceBTS) {
        isWithinDistance = true;
        break;
      }
    }

    if (!isWithinDistance) {
      return false;
    }
  }

  return true;
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
    if (node.className !== "client-build" && !visited[node.id]) {
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
  const adjList = new Map();

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
  for (const node of nodes) {
    if (
      node.className === "server-build" ||
      node.className === "bts-build" ||
      node.className === "wifi-build"
    ) {
      if (adjList.get(node.id).length === 1) {
        leafNodes.add(node.id);
      }
    }
  }

  // Check if all nodes with class "server-build", "bts-build", or "wifi-build" are leaf nodes
  for (const node of nodes) {
    if (
      (node.className === "server-build" ||
        node.className === "bts-build" ||
        node.className === "wifi-build") &&
      !leafNodes.has(node.id)
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

function GoToTasks({
  setOpenModal,
  setIsLandingPage,
  setGameAfterModalClose,
  setAlertMessage,
}) {
  function handleGoToTasks() {
    setAlertMessage(
      "vitej v naprosto dokonalém vzdělávacím módu. Tady končí veškerá zábava a začíná pořádné vzdělání. Vlevo máš menu. V něm je spousta úkolů. Úkoly se postupně proklikej. Když budeš dávat pozor, tak na konci budeš machr na internet."
    );
    setOpenModal(true);
    setGameAfterModalClose("noGame");
    setIsLandingPage();
  }
  return (
    <div>
      <p>
        chystáš se přejít na úkoly a učit se novým vědomostem o internetu. Jsi
        na to připraven můj padawane?
      </p>
      <div className="go-to-task-buttons">
        <Button variant="outlined" onClick={() => setOpenModal(false)}>
          ZPĚT
        </Button>
        <Button variant="outlined" onClick={() => handleGoToTasks()}>
          STUDIUM
        </Button>
      </div>
    </div>
  );
}

function ServiceBox({
  setIsLandingPage,
  setAlertMessage,
  setGameAfterModalClose,
  setOpenModal,
}) {
  const [isHintClicked, setIsHintClicked] = useState(false);
  const [isTasksClicked, setIsTasksClicked] = useState(false);

  function handleShowHint() {
    setIsHintClicked(true);
    setAlertMessage("hint");
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  }

  function handleShowTasks() {
    setAlertMessage(
      <GoToTasks
        setIsLandingPage={setIsLandingPage}
        setOpenModal={setOpenModal}
        setGameAfterModalClose={setGameAfterModalClose}
        setAlertMessage={setAlertMessage}
      />
    );
    setGameAfterModalClose("noGame");
    setOpenModal(true);
    setIsTasksClicked(true);
  }

  return (
    <div className="lp-service-buttons-container">
      <Tooltip title="NÁPOVĚDA" placement="top">
        <IconButton onClick={() => handleShowHint()}>
          <Badge badgeContent="!" color="primary" invisible={isHintClicked}>
            <QuestionMarkIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="PŘEJDI NA ÚKOLY" placement="top">
        <IconButton onClick={() => handleShowTasks()}>
          <Badge badgeContent="!" color="primary" invisible={isTasksClicked}>
            <RuleIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

function Buttons({ handleAddNode, checkValidty, nodes, setIsLandingPage }) {
  const serversLeft = 8 - countNodesByType(nodes, "server-build");
  const gatewayLeft = 15 - countNodesByType(nodes, "gateway-build");
  const clientLeft = 9 - countNodesByType(nodes, "client-build");
  const wifiLeft = 8 - countNodesByType(nodes, "wifi-build");
  const btsLeft = 8 - countNodesByType(nodes, "bts-build");

  return (
    <div className="lp-add-nodes-buttons-container">
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
    </div>
  );
}

export default LandingPage;
