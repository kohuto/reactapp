import { useEffect } from "react";
import ReactFlow, { useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom2Data } from "../../../Data/Flow/client/clientsZoom2";
import { serversZoom2Data } from "../../../Data/Flow/server/serverZoom2";
import { gatewaysZoom2Data } from "../../../Data/Flow/gateway/gatewayZoom2";
import { edgesData } from "../../../Data/Flow/edges/edges";
import { clientsFindServer } from "../../../Data/Flow/client/clientsFindServer";
import { setPathClient } from "../../../Data/Flow/client/setPathClient";
import { setPathEdges } from "../../../Data/Flow/edges/setPathEdges";
import { setPathGateway } from "../../../Data/Flow/gateway/setPathGateway";
import { setPathServer } from "../../../Data/Flow/server/setPathServer";
import { whatIsWifiNodes } from "../../../Data/Flow/whatIsWifi";

function Flow({ game, nodes, setNodes, onNodesChange, isDestroyed }) {
  const defaultNodes = [
    ...clientsZoom2Data,
    ...serversZoom2Data,
    ...gatewaysZoom2Data,
  ];

  const [edges, setEdges] = useEdgesState(edgesData);

  useEffect(() => {
    const gameToNodesAndEdges = {
      findServer: {
        nodes: [
          ...clientsFindServer,
          ...serversZoom2Data,
          ...gatewaysZoom2Data,
        ],
        edges: edgesData,
      },

      whatIsWiFi: {
        nodes: whatIsWifiNodes,
        edges: edgesData,
      },

      setPath: {
        nodes: [...setPathGateway, ...setPathClient, ...setPathServer],
        edges: setPathEdges,
      },

      default: {
        nodes: defaultNodes,
        edges: edgesData,
      },
    };

    const { nodes, edges } =
      gameToNodesAndEdges[game] || gameToNodesAndEdges.default;
    setNodes(nodes);
    setEdges(edges);
  }, [game, setNodes, setEdges, isDestroyed]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        onNodesChange={onNodesChange}
        attributionPosition="top-right"
      />
    </>
  );
}

export default Flow;
