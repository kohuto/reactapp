import { useEffect, useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom1Data } from "../Flow/data/client/clientsZoom1";
import { clientsZoom2Data } from "../Flow/data/client/clientsZoom2";
import { clientsZoom0Data } from "../Flow/data/client/clientsZoom0";
import { serversZoom1Data } from "../Flow/data/server/serverZoom1";
import { serversZoom2Data } from "../Flow/data/server/serverZoom2";
import { serversZoom0Data } from "../Flow/data/server/serverZoom0";
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
function Flow({ game, zoom, nodes, setNodes, onNodesChange }) {
  const defaultNodes = clientsZoom2Data
    .concat(serversZoom2Data)
    .concat(gatewaysZoom2Data);

  const whatIsWifiNodes = defaultNodes.concat(wifiData);
  const whatIsBTSNodes = defaultNodes.concat(btsData);
  const whatIsSatelitNodes = defaultNodes.concat(satelitsData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesData);

  useEffect(() => {
    // update nodes when the game prop changes
    switch (game) {
      case "whatIsServer":
        setNodes(
          zoom === 0
            ? serversZoom0Data
            : zoom === 1
            ? serversZoom1Data
            : serversZoom2Data
        );
        break;
      case "whatIsClient":
        setNodes(
          zoom === 0
            ? clientsZoom0Data.concat(serversZoom0Data)
            : zoom === 1
            ? clientsZoom1Data.concat(serversZoom1Data)
            : clientsZoom2Data.concat(serversZoom2Data)
        );
        break;
      case "whatIsGateway":
        setNodes(
          zoom === 0
            ? clientsZoom0Data
                .concat(serversZoom0Data)
                .concat(gatewaysZoom0Data)
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
        className="background1"
        onConnect={onConnect}
      />
    </>
  );
}

export default Flow;
