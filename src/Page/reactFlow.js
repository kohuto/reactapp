import { useEffect, useCallback, useRef, useState } from "react";
import ReactFlow, { useEdgesState, addEdge, Controls } from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom2Data } from "../Flow/data/client/clientsZoom2";
import { serversZoom2Data } from "../Flow/data/server/serverZoom2";
import { gatewaysZoom2Data } from "../Flow/data/gateway/gatewayZoom2";
import { edgesData } from "../Flow/data/edges/edges";
import { shortestPathEdges } from "../Flow/data/edges/shortestPathEdges";
import BuildNetwork from "./QuizzComponents/buildNetwork";
import { clientsCreatePacket } from "../Flow/data/client/clientsCreatePacket";
import { clientsFindServer } from "../Flow/data/client/clientsFindServer";
import { shortestPathGateway } from "../Flow/data/gateway/shortestPathGateway";
import { shortestPathClient } from "../Flow/data/client/shortestPathClient";
import { shortestPathServer } from "../Flow/data/server/shortestPathServer";
import { countPathGateway } from "../Flow/data/gateway/countPathsGateway";
import { countPathsEdges } from "../Flow/data/edges/countPathsEdges";
import { countPathsClient } from "../Flow/data/client/countPathsClient";
import { countPathsServer } from "../Flow/data/server/countPathsServer";
import { problemWithPathClient } from "../Flow/data/client/problemWithPathClient";
import { problemWithPathEdges } from "../Flow/data/edges/problemWithPathEdges";
import { problemWithPathGateway } from "../Flow/data/gateway/problemWithPathGateway";
import { problemWithPathServer } from "../Flow/data/server/problemWithPathServer";
import { setPathClient } from "../Flow/data/client/setPathClient";
import { setPathEdges } from "../Flow/data/edges/setPathEdges";
import { setPathGateway } from "../Flow/data/gateway/setPathGateway";
import { setPathServer } from "../Flow/data/server/setPathServer";
import { problemWithPathDestroyedPathEdges } from "../Flow/data/edges/problemWithPathBrokenPathEdges";
import { whatIsCabelClient } from "../Flow/data/client/whatIsCabelClient";
import { whatIsCabelEdges } from "../Flow/data/edges/whatIsCabelEdges";
import { whatIsCabelGateway } from "../Flow/data/gateway/whatIsCabelGateway";
import { whatIsCabelServer } from "../Flow/data/server/whatIsCabelServer";
import { whatIsSatelitNodes } from "../Flow/data/whatIsSatelit";
import { whatIsSatelitEdges } from "../Flow/data/edges/whatIsSatelitEdges";
import { whatIsBTSNodes } from "../Flow/data/whatIsBTS";
import { whatIsBTSEdges } from "../Flow/data/edges/whatIsBTSEdges";
import { whatIsWifiNodes } from "../Flow/data/whatIsWifi";

function Flow({ game, zoom, nodes, setNodes, onNodesChange, isDestroyed }) {
  const defaultNodes = clientsZoom2Data
    .concat(serversZoom2Data)
    .concat(gatewaysZoom2Data);

  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesData);

  useEffect(() => {
    // update nodes when the game prop changes
    switch (game) {
      case "whatIsClient":
        setNodes(clientsZoom2Data.concat(serversZoom2Data));
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
      case "whatIsCabel":
        setNodes(
          whatIsCabelClient.concat(whatIsCabelGateway).concat(whatIsCabelServer)
        );
        setEdges(whatIsCabelEdges);
        break;
      case "whatIsWiFi":
        setNodes(whatIsWifiNodes);
        break;
      case "whatIsBTS":
        setNodes(whatIsBTSNodes);
        setEdges(whatIsBTSEdges);
        break;
      case "whatIsSatelit":
        setNodes(whatIsSatelitNodes);
        setEdges(whatIsSatelitEdges);
        break;
      case "setPath":
        setEdges(setPathEdges);
        setNodes(setPathGateway.concat(setPathClient).concat(setPathServer));
        break;
      case "shortestPath":
        setEdges(shortestPathEdges);
        setNodes(
          shortestPathGateway
            .concat(shortestPathClient)
            .concat(shortestPathServer)
        );
        break;
      case "countOfPaths":
        setEdges(countPathsEdges);
        setNodes(
          countPathGateway.concat(countPathsClient).concat(countPathsServer)
        );
        break;
      case "problemWithPath":
        setEdges(
          isDestroyed ? problemWithPathDestroyedPathEdges : problemWithPathEdges
        );
        setNodes(
          problemWithPathGateway
            .concat(problemWithPathServer)
            .concat(problemWithPathClient)
        );
        break;
      case "buildNetwork":
        setNodes([]);
        break;
      default:
        setNodes(defaultNodes);
        setEdges(edgesData);
    }
  }, [game, setNodes, zoom, setEdges, isDestroyed]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const zoomGames = ["whatIsClient", "whatIsPath"];
  return (
    <>
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
        className={`${zoomGames.includes(game) && "mojeuzasna"}`}
        onConnect={onConnect}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        attributionPosition="top-right"
      >
        {game == "whatIsClient" && <Controls />}
      </ReactFlow>
    </>
  );
}

export default Flow;
