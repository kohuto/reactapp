import { useCallback, useEffect, useState } from "react";
import { useNodesState } from "reactflow";
import { connectClientWirelessNodes } from "../../../../Data/Flow/connectClientWireless";
import ReactFlow from "reactflow";
import AddNodeButtons from "./addNodesButtons";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import "./style.css";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";

const FINAL_MESSAGE =
  "Perfektní! Všichni klienti jsou připojení. \n Při umisťování jsi viděl, že každé zařízení má jiný dosah. Jaký je ale jejich reálný dosah? \n Doma používáme WiFi router, který může WiFi signál vysílat do vzdálenosti 50–100 metrů, ale může být i menší, pokud máte tlusté zdi. Dosah signálu vysílaného BTS věží je až 5 km. Na těžko dostupných místech využíváme satelity, které komunikují z oběžné dráhy v různé výšce. Ty nejnižší jsou ve výšce 200 km. Ty nejvyšší jsou až 36 000 km nad zemí. Pro přenos dat na větší vzdálenosti používáme kabely.";
const NO_MORE_NODES_MESSAGE = "více už ne";
const FINAL_COUNT_PLUGGED_CLIENT = 10;
const DEVICE_TYPE = {
  CLIENT_PLUGGED: "notebook-connected",
  CLIENT_UNPLUGGED: "notebook",
  WIFI: "wifi",
  BTS: "bts",
};

function ConnectClientsWirelessComponent({ setGame, info }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    connectClientWirelessNodes
  );

  const [isFinished, setIsFinished] = useState(false);
  const [isTooMuchNodes, setIsTooMuchNodes] = useState(false);

  /**
   * This useEffect hook updates the positions and classes of the client nodes every 10 milliseconds. It also
   * checks if the game is over and opens a dialog window if necessary. The cleanup function clears the interval
   * when the component unmounts or when the nodes state changes.
   */
  useEffect(() => {
    // Check if the game is over
    if (
      countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED) ===
      FINAL_COUNT_PLUGGED_CLIENT
    ) {
      setIsFinished(true);
    }

    // Continuously update the positions of the client nodes
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

  const handleAddNode = useCallback(
    (device) => {
      const deviceNodes = nodes.filter((node) => node.className === device);
      const nodeCount = deviceNodes.length;
      const ipv4Address = generateIpv4Address();
      if (nodeCount >= 2) {
        setIsTooMuchNodes(true);
      } else {
        const newNode = {
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

  return (
    <>
      <div className="connect-client-wireless-add-device-container">
        <AddNodeButtons handleAddNode={handleAddNode} nodes={nodes} />
      </div>
      {isFinished && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      {isTooMuchNodes && (
        <AlertDialog
          content={NO_MORE_NODES_MESSAGE}
          closeAction={() => setIsTooMuchNodes(false)}
        />
      )}

      <div className="connect-client-wireless-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={[]}
          onNodesChange={onNodesChange}
          snapToGrid
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          selectNodesOnDrag={true}
          attributionPosition="bottom-right"
        />
      </div>
    </>
  );
}

function countNodesByType(nodes, type) {
  return nodes.filter((node) => node.className === type).length;
}

const isNodeInRange = (nodeId, nodes) => {
  const node = nodes.find((node) => node.id === nodeId);
  const wifiNodes = nodes.filter((node) => node.className === DEVICE_TYPE.WIFI);
  const btsNodes = nodes.filter((node) => node.className === DEVICE_TYPE.BTS);
  const WIFI_RANGE = 100;
  const BTS_RANGE = 200;

  // Check if node is at most 100 away from some wifi nodes
  const isInRangeOfWifi = wifiNodes.some((wifiNode) => {
    const distance = Math.sqrt(
      Math.pow(node.position.x - wifiNode.position.x, 2) +
        Math.pow(node.position.y - wifiNode.position.y, 2)
    );
    return distance <= WIFI_RANGE;
  });

  // Check if node is at most 200 away from some bts nodes
  const isInRangeOfBts = btsNodes.some((btsNode) => {
    const distance = Math.sqrt(
      Math.pow(node.position.x - btsNode.position.x, 2) +
        Math.pow(node.position.y - btsNode.position.y, 2)
    );
    return distance <= BTS_RANGE;
  });

  return isInRangeOfWifi || isInRangeOfBts;
};

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

export default ConnectClientsWirelessComponent;
