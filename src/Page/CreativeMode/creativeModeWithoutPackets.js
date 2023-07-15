import { useCallback, useState, useEffect } from "react";
import { useNodesState, useEdgesState } from "reactflow";
import "./creativeMode.css";
import { landingPageNodes } from "../../Data/Flow/creativeMode";
import { landingPageEdges } from "../../Data/Flow/edges/landingPage";
import DefaultPackets from "../Packet";
import AddDeviceButtons from "./addDeviceButtons";
import SendPacketBox from "./SendPacketBox/sendPacketBox";
import CreativeModeFlow from "./Flow/creativeModeFlow";
import AlertDialog from "../DialogWindow/Templates/dialogWindow";
import BasicModal from "../DialogWindow/basicModal";

const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged-creative",
  CLIENT_UNPLUGGED: "client-unplugged-creative",
  WIFI: "wifi-creative",
  BTS: "bts-creative",
  GATEWAY: "gateway-creative",
  SERVER: "server-creative",
};

const TOO_MANY_DEVICES_ERROR = "Více už jich nepřidávej.";

function CreativeModeWithoutPackets({ info }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(landingPageNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(landingPageEdges);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // change client class name if its in BTS range
  useEffect(() => {
    const intervalId = setInterval(() => {
      const clientInfoNodes = nodes.filter((node) =>
        node.className.includes(DEVICE_TYPE.CLIENT_PLUGGED)
      );
      const clientBuildNodes = nodes.filter((node) =>
        node.className.includes(DEVICE_TYPE.CLIENT_UNPLUGGED)
      );

      const tempClientNodes = clientInfoNodes.concat(clientBuildNodes);
      tempClientNodes.forEach((node) => {
        if (isNodeInRange(node.id, nodes)) {
          node.className = [DEVICE_TYPE.CLIENT_PLUGGED];
        } else {
          node.className = [DEVICE_TYPE.CLIENT_UNPLUGGED];
        }
      });

      tempClientNodes.forEach((tempNode) => {
        const index = nodes.findIndex((node) => node.id === tempNode.id);
        if (index !== -1) {
          nodes.splice(index, 1);
        }
        nodes.push(tempNode);
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [nodes]);

  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) =>
        node.className.includes(device)
      );
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 15) {
        setErrorMessage(TOO_MANY_DEVICES_ERROR);
        setIsError(true);
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
      {<BasicModal content={info.content} />}
      {isError && (
        <AlertDialog
          content={errorMessage}
          closeAction={() => setIsError(false)}
        />
      )}
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
        setErrorMessage={setErrorMessage}
        setIsError={setIsError}
        setPath={handleSetUserPacketPath}
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

// check if node is in BTS or WiFi range
function isNodeInRange(nodeId, nodes) {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) =>
    node.className.includes(DEVICE_TYPE.WIFI)
  );
  const btsNodes = nodes.filter((node) =>
    node.className.includes(DEVICE_TYPE.BTS)
  );

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

//get random IPv4 address
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

export default CreativeModeWithoutPackets;
