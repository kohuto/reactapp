import { useCallback, useState, useEffect, useRef } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  updateEdge,
} from "reactflow";
import "../landingPage.css";
import { landingPageNodes } from "../../Flow/data/landingPage";
import { landingPageEdges } from "../../Flow/data/edges/landingPage";
import DefaultPackets from "../../Packet";
import AddDeviceButtons from "./addDeviceButtons";
import ServiceButtons from "./serviceButtons";
import SendPacketBox from "./sendPacketBox";
import CreativeModeFlow from "./creativeModeFlow";

function CreativeMode({
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
      <ServiceButtons
        setAlertMessage={setAlertMessage}
        setIsLandingPage={setIsLandingPage}
        setOpenModal={setOpenModal}
        setGameAfterModalClose={setGameAfterModalClose}
      />
      <AddDeviceButtons handleAddNode={handleAddNode} nodes={nodes} />

      <ReactFlowProvider>
        <CreativeModeFlow
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

export default CreativeMode;
