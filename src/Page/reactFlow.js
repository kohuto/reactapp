import { useEffect, useCallback, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Panel,
  useViewport,
} from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom1Data } from "../Flow/data/client/clientsZoom1";
import { clientsZoom2Data } from "../Flow/data/client/clientsZoom2";
import { clientsZoom0Data } from "../Flow/data/client/clientsZoom0";
import { serversZoom1Data } from "../Flow/data/server/serverZoom1";
import { serversZoom2Data } from "../Flow/data/server/serverZoom2";
import { gatewaysZoom1Data } from "../Flow/data/gateway/gatewayZoom1";
import { gatewaysZoom2Data } from "../Flow/data/gateway/gatewayZoom2";
import { gatewaysZoom0Data } from "../Flow/data/gateway/gatewayZoom0";
import { btsData } from "../Flow/data/bts";
import { wifiData } from "../Flow/data/wifi";
import { satelitsData } from "../Flow/data/satelits";
import { edgesData } from "../Flow/data/edges";
import { edgesValueData } from "../Flow/data/edgesValue";
import WhatIsWiFiComponent from "./QuizzComponents/wirelessDevice";
import BuildNetwork from "./QuizzComponents/buildNetwork";
import { clientsCreatePacket } from "../Flow/data/client/clientsCreatePacket";
import { clientsFindServer } from "../Flow/data/client/clientsFindServer";

function ViewportLogger() {
  const { x, y, zoom } = useViewport();

  useEffect(() => {
    console.log(x, y, zoom);
  }, [x, y, zoom]);

  return null;
}
function Flow({ game, zoom, nodes, setNodes, onNodesChange }) {
  const [variant, setVariant] = useState("cross");
  const defaultNodes = clientsZoom2Data
    .concat(serversZoom2Data)
    .concat(gatewaysZoom2Data);

  const whatIsWifiNodes = defaultNodes.concat(wifiData);
  const whatIsBTSNodes = defaultNodes.concat(btsData);
  const whatIsSatelitNodes = defaultNodes.concat(satelitsData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesData);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // Add variables for original node positions
  const [originalPositions, setOriginalPositions] = useState([]);

  /* useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    function handleResize() {
    setWindowSize([window.innerWidth, window.innerHeight]);
    setNodes((prevNodes) => {
      return prevNodes.map((node) => ({
        ...node,
        position: {
          x: node.position.x + 100,
          y: node.position.y + 100,
        },
      }));
    });
  }*/

  useEffect(() => {
    // update nodes when the game prop changes
    switch (game) {
      case "whatIsClient":
        setNodes(clientsZoom2Data.concat(serversZoom2Data));
        break;
      case "whatIsCabel":
        setNodes(
          zoom === 0
            ? clientsZoom0Data.concat(gatewaysZoom0Data)
            : zoom === 1
            ? clientsZoom1Data
                .concat(serversZoom1Data)
                .concat(gatewaysZoom1Data)
            : clientsZoom2Data
                .concat(serversZoom2Data)
                .concat(gatewaysZoom2Data)
        );
        setEdges([]);
        break;
      case "createPacket":
        setNodes(
          clientsCreatePacket.concat(serversZoom2Data).concat(gatewaysZoom2Data)
        );
        break;
      case "findServer":
        setNodes(
          clientsFindServer.concat(serversZoom2Data).concat(gatewaysZoom2Data)
        );
        break;
      case "whatIsWiFi":
        setNodes(whatIsWifiNodes);
        break;
      case "whatIsBTS":
        setNodes(whatIsBTSNodes);
        break;
      case "whatIsSatelit":
        setNodes(whatIsSatelitNodes);
        break;
      case "shortestPath":
        setEdges(edgesValueData);
        break;
      case "buildNetwork":
        setNodes([]);
        break;
      default:
        setNodes(defaultNodes);
        setEdges(edgesData);
    }
  }, [game, setNodes, zoom, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const zoomGames = ["whatIsClient", "whatIsCabel"];
  return (
    <>
      {game === "wirelessDevices" && (
        <WhatIsWiFiComponent game={game} setNodes={setNodes} nodes={nodes} />
      )}
      {game === "buildNetwork" && (
        <BuildNetwork game={game} setNodes={setNodes} nodes={nodes} />
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        onNodesChange={onNodesChange}
        className={`${
          !zoomGames.includes(game)
            ? ""
            : zoom === 0
            ? "background1"
            : zoom === 1
            ? "background2"
            : zoom === 2
            ? "background3"
            : ""
        }`}
        onConnect={onConnect}
      ></ReactFlow>
    </>
  );
}

export default Flow;
