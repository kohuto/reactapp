import { useCallback, useState, useEffect } from "react";
import { useNodesState, useEdgesState, ReactFlowProvider } from "reactflow";
import "./creativeMode.css";
import { landingPageNodes } from "../../Data/Flow/landingPage";
import { landingPageEdges } from "../../Data/Flow/edges/landingPage";
import DefaultPackets from "../Packet";
import AddDeviceButtons from "./addDeviceButtons";
import ServiceButtons from "./serviceButtons";
import SendPacketBox from "./sendPacketBox";
import CreativeModeFlow from "./Flow/creativeModeFlow";

const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged-creative",
  CLIENT_UNPLUGGED: "client-unplugged-creative",
  WIFI: "wifi-creative",
  BTS: "bts-creative",
  GATEWAY: "gateway-creative",
  SERVER: "server-creative",
};

const TOO_MANY_DEVICES_ERROR = "vice uz jich nepridavej. Uz jich mas az moc";
/**
 * Represents the Creative Mode component.
 * @param {Object} props - The component props.
 * @param {Function} props.setOpenModal - A function to set the open modal state.
 * @param {Function} props.setIsCreativeMode - A function to set the creative mode state.
 * @returns {JSX.Element} - The rendered component.
 */

function CreativeMode({ setOpenModal, setIsCreativeMode }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(landingPageNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(landingPageEdges);

  /**
   *A hook to update the client nodes every 10ms.
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
   * A callback function to add a node to the nodes state.
   * @param {string} device - The type of device to add.
   */
  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 15) {
        setOpenModal(true, TOO_MANY_DEVICES_ERROR);
      } else {
        const newNode = {
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
        setOpenModal={setOpenModal}
        setPath={handleSetUserPacketPath}
      />
      <ServiceButtons
        setIsCreativeMode={setIsCreativeMode}
        setOpenModal={setOpenModal}
      />
      <AddDeviceButtons handleAddNode={handleAddNode} nodes={nodes} />

      <CreativeModeFlow
        setEdges={setEdges}
        edges={edges}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
    </>
  );
}

/**
 * Determines if a node is in range of a wifi or bts node.
 * @public
 * @param {string} nodeId - The ID of the node to check.
 * @param {Object[]} nodes - An array of node objects.
 * @returns {boolean} - True if the node is in range, false otherwise.
 */
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

/**
 * Generates a random IPv4 address string.
 * @returns {string} - The generated IPv4 address.
 */
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
