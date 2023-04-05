import React, { useCallback, useState, useEffect, useRef } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
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
import DefaultPackets from "../Packet";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Flow({
  nodes,
  edges,
  setEdges,
  game,
  onNodesChange,
  onEdgesChange,
  setAlertMessage,
  setGameAfterModalClose,
  setOpenModal,
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

  const onNodeClick = (event, node) => {
    if (node.className === "client-plugged") {
      console.log("klik na plugged");
      setAlertMessage("fuck");
      setGameAfterModalClose("noGame");
      setOpenModal(true);
      //setIsChatVisible(true);
    }
  };

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
          onNodeClick={onNodeClick}
        ></ReactFlow>
      </div>
    </>
  );
}

function CreativeMode({
  setAlertMessage,
  setOpenModal,
  game,
  setGameAfterModalClose,
  setIsLandingPage,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(landingPageNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(landingPageEdges);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

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
      if (nodeCount >= 15) {
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

  const [userPacketPath, setUserPacketPath] = useState([]);

  /* <DefaultPackets
    packetsData={landingPagePacketsData}
    repeat={Infinity}
    marginleft={0}
  />*/

  function handleSetUserPacketPath(path) {
    setUserPacketPath(path);
  }
  const userPacketData = [
    {
      id: "user-packet-7848975",
      path: userPacketPath,
      content: "01010101",
      from: "135.127.3.223",
      to: "29.52.143.155",
      speed: 10,
    },
  ];
  return (
    <>
      {userPacketPath.length > 0 && (
        <DefaultPackets
          packetsData={userPacketData}
          repeat={0}
          marginleft={0}
          nodes={nodes}
        />
      )}
      <SendPacketBox
        nodes={nodes}
        edges={edges}
        setAlertMessage={setAlertMessage}
        setGameAfterModalClose={setGameAfterModalClose}
        setOpenModal={setOpenModal}
        setPath={handleSetUserPacketPath}
      />
      <ServiceBox
        setAlertMessage={setAlertMessage}
        setIsLandingPage={setIsLandingPage}
        setOpenModal={setOpenModal}
        setGameAfterModalClose={setGameAfterModalClose}
      />
      <Buttons
        handleAddNode={handleAddNode}
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
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      </ReactFlowProvider>
    </>
  );
}

function hasNodeClass(nodes, nodeId, classname) {
  // find the node with the given ID in the nodes array
  const node = nodes.find((node) => node.id === nodeId);

  // check if the node has the className property set to "client-build"
  if (node && node.className === classname) {
    return true;
  }

  // if the node is not found or doesn't have the className property, return false
  return false;
}

function getIpOfWirelessDevice(nodes, nodeId) {
  // find the node with the given ID in the nodes array
  const node = nodes.find((node) => node.id === nodeId);

  // find the first node that matches the specified criteria
  let result = null;
  if (node && node.className === "client-plugged") {
    const matchingNode = nodes.find((otherNode) => {
      const distance = Math.sqrt(
        Math.pow(node.position.x - otherNode.position.x, 2) +
          Math.pow(node.position.y - otherNode.position.y, 2)
      );
      return (
        (otherNode.className === "bts-build" && distance <= 100) ||
        (otherNode.className === "wifi-build" && distance <= 100)
      );
    });

    // if a matching node was found, return its IP address
    if (matchingNode) {
      result = matchingNode.id;
    }
  }

  return result;
}

function findPath(edges, id1, id2) {
  // create a map of nodes to their neighbors
  const neighbors = new Map();
  edges.forEach((edge) => {
    if (!neighbors.has(edge.source)) {
      neighbors.set(edge.source, []);
    }
    if (!neighbors.has(edge.target)) {
      neighbors.set(edge.target, []);
    }
    neighbors.get(edge.source).push(edge.target);
    neighbors.get(edge.target).push(edge.source);
  });

  // perform a breadth-first search starting from id1
  const queue = [{ id: id1, path: [id1] }];
  const visited = new Set([id1]);
  while (queue.length > 0) {
    const { id, path } = queue.shift();
    if (id === id2) {
      return path; // found the target node, return the path
    }
    for (const neighbor of neighbors.get(id) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ id: neighbor, path: [...path, neighbor] });
      }
    }
  }

  return null; // id2 is not reachable from id1
}

function SendPacketBox({
  nodes,
  edges,
  setAlertMessage,
  setGameAfterModalClose,
  setOpenModal,
  setPath,
}) {
  const [ipAdressRecipient, setIpAdressRecipient] = useState("");
  const [ipAdressReciver, setIpAdressReciver] = useState("");
  function handleSend() {
    if (ipAdressRecipient.length > 0 && ipAdressReciver.length > 0) {
      if (
        hasNodeClass(nodes, ipAdressRecipient, "client-build") ||
        hasNodeClass(nodes, ipAdressRecipient, "client-plugged")
      ) {
        if (hasNodeClass(nodes, ipAdressRecipient, "client-plugged")) {
          if (hasNodeClass(nodes, ipAdressReciver, "server-build")) {
            if (
              hasPath(
                edges,
                getIpOfWirelessDevice(nodes, ipAdressRecipient),
                ipAdressReciver
              )
            ) {
              setPath(
                findPath(
                  edges,
                  getIpOfWirelessDevice(nodes, ipAdressRecipient),
                  ipAdressReciver
                )
              );
              return;
            } else {
              setAlertMessage(
                "nelze doručit. Mezi odesílatelem a příjemcem není cesta"
              );
            }
          } else {
            setAlertMessage("příjemce musí být server");
          }
        } else {
          setAlertMessage(
            "klient musí být v blízkosti wifi, nebo bts věže. Poznáš to tak, že má nad hlavou wifi ikonu"
          );
        }
      } else {
        console.log(hasNodeClass(nodes, ipAdressRecipient, "client-build"));
        setAlertMessage("odesílatel musí být klient");
      }
    } else {
      setAlertMessage(
        "První vyplň ip adresu odesílatele a příjemce. Ip adresa je číslo pod obrázkem."
      );
    }
    setIpAdressRecipient("");
    setIpAdressReciver("");
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  }

  return (
    <div className="lp-send-packet-container">
      <div className="lp-send-packet-first-column">
        <div>
          <TextField
            id="standard-basic"
            label="IP Adresa odesílatele"
            variant="standard"
            value={ipAdressRecipient}
            onChange={(e) => setIpAdressRecipient(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="IP Adresa příjemce"
            variant="standard"
            value={ipAdressReciver}
            onChange={(e) => setIpAdressReciver(e.target.value)}
          />
        </div>
      </div>
      <div className="lp-send-packet-second-column">
        <Tooltip title="POŠLI PAKET" placement="top">
          <IconButton onClick={() => handleSend()}>
            <SendIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
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

function hasPath(edges, startNodeId, endNodeId) {
  // create a set of visited node IDs and a queue of nodes to visit
  const visited = new Set();
  const queue = [startNodeId];

  // loop through the queue until it is empty
  while (queue.length > 0) {
    // get the next node to visit from the queue
    const nodeId = queue.shift();

    // mark the node as visited
    visited.add(nodeId);

    // check if the node is the end node
    if (nodeId === endNodeId) {
      return true;
    }

    // get the edges that connect to the current node
    const edgesFromNode = edges.filter(
      (edge) => edge.source === nodeId || edge.target === nodeId
    );

    // loop through the edges and add the neighboring nodes to the queue
    for (const edge of edgesFromNode) {
      const neighborId = edge.source === nodeId ? edge.target : edge.source;
      if (!visited.has(neighborId)) {
        queue.push(neighborId);
      }
    }
  }

  // if the end node was not found, there is no path
  return false;
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
      "Vítej v hlavní části aplikace. V levé části obrazovky vidíš menu, ve kterém najdeš velké množství úkolů, díky který se dozvíš, jak funguje internet. Úkoly jsou rozděleny do 5 kategorií a je doporučeno je procházet postupně. Pokud se chceš vrátit zpátky do kretivního módu, klikni v menu na tlačítko KREATIVNÍ MÓD. Zavři toto okno a vrhni se na úkoly."
    );
    setOpenModal(true);
    setGameAfterModalClose("noGame");
    setIsLandingPage();
  }
  return (
    <div>
      <p>
        Jestli chceš opravdu přejít na část s úkoly, zmáčkni tlačítko ÚKOLY.
      </p>
      <div className="go-to-task-buttons">
        <Button variant="outlined" onClick={() => setOpenModal(false)}>
          ZPĚT
        </Button>
        <Button variant="outlined" onClick={() => handleGoToTasks()}>
          ÚKOLY
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
    setAlertMessage(
      "Toto je interaktivní mód, ve kterém je skoro vše dovoleno. Vpravo nahoře můžeš přidat různé prvky do sítě. Přidání provedeš tak, že na daný prvek klikneš, on se poté objeví v mapě. S přidanými prvky můžeš hýbat a umisťovat je na libovolnou pozici. Také můžeš přidávat nové cesty tak, že klikneš na jeden z černých puntíků u prvku a poté kllikneš na černý puntík u jiného prvku, se kterým ho chceš propojit. Vlevo dole můžeš poslat paket. Paket pošleš tak, že napíšeš IP adresu odesílatele (klient, který je připojený k internetu) a IP adresu příjemce (server). Vpravo dole je tlačítko, které tě přemístí do hlavní části aplikace, ve které je připraveno velké množství úkolů."
    );
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

export default CreativeMode;
