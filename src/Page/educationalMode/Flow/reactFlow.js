import { useEffect } from "react";
import ReactFlow, { useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom2Data } from "../../../Flow/data/client/clientsZoom2";
import { serversZoom2Data } from "../../../Flow/data/server/serverZoom2";
import { gatewaysZoom2Data } from "../../../Flow/data/gateway/gatewayZoom2";
import { edgesData } from "../../../Flow/data/edges/edges";
import { shortestPathEdges } from "../../../Flow/data/edges/shortestPathEdges";
import BuildNetwork from "../../QuizzComponents/buildNetwork";
import { clientsCreatePacket } from "../../../Flow/data/client/clientsCreatePacket";
import { clientsFindServer } from "../../../Flow/data/client/clientsFindServer";
import { shortestPathGateway } from "../../../Flow/data/gateway/shortestPathGateway";
import { shortestPathClient } from "../../../Flow/data/client/shortestPathClient";
import { shortestPathServer } from "../../../Flow/data/server/shortestPathServer";
import { countPathGateway } from "../../../Flow/data/gateway/countPathsGateway";
import { countPathsEdges } from "../../../Flow/data/edges/countPathsEdges";
import { countPathsClient } from "../../../Flow/data/client/countPathsClient";
import { countPathsServer } from "../../../Flow/data/server/countPathsServer";
import { problemWithPathClient } from "../../../Flow/data/client/problemWithPathClient";
import { problemWithPathEdges } from "../../../Flow/data/edges/problemWithPathEdges";
import { problemWithPathGateway } from "../../../Flow/data/gateway/problemWithPathGateway";
import { problemWithPathServer } from "../../../Flow/data/server/problemWithPathServer";
import { setPathClient } from "../../../Flow/data/client/setPathClient";
import { setPathEdges } from "../../../Flow/data/edges/setPathEdges";
import { setPathGateway } from "../../../Flow/data/gateway/setPathGateway";
import { setPathServer } from "../../../Flow/data/server/setPathServer";
import { problemWithPathDestroyedPathEdges } from "../../../Flow/data/edges/problemWithPathBrokenPathEdges";
import { whatIsCabelClient } from "../../../Flow/data/client/whatIsCabelClient";
import { whatIsCabelEdges } from "../../../Flow/data/edges/whatIsCabelEdges";
import { whatIsCabelGateway } from "../../../Flow/data/gateway/whatIsCabelGateway";
import { whatIsCabelServer } from "../../../Flow/data/server/whatIsCabelServer";
import { whatIsSatelitNodes } from "../../../Flow/data/whatIsSatelit";
import { whatIsSatelitEdges } from "../../../Flow/data/edges/whatIsSatelitEdges";
import { whatIsBTSNodes } from "../../../Flow/data/whatIsBTS";
import { whatIsBTSEdges } from "../../../Flow/data/edges/whatIsBTSEdges";
import { whatIsWifiNodes } from "../../../Flow/data/whatIsWifi";

/**
 * The Flow component represents a network that is rendered using the ReactFlow library.
 *
 * @param {Object} props - The component props.
 * @param {string} props.game - The current game being played.
 * @param {Array} props.nodes - The current nodes in the flowchart.
 * @param {function} props.setNodes - The function used to set the nodes in the flowchart.
 * @param {function} props.onNodesChange - The function called when the nodes in the flowchart are changed.
 * @param {boolean} props.isDestroyed - A boolean value indicating whether the flowchart has been destroyed.
 * @returns {JSX.Element} - A JSX element representing the Flow component.
 */
function Flow({ game, nodes, setNodes, onNodesChange, isDestroyed }) {
  // Define an array of default nodes for the flowchart.
  const defaultNodes = [
    ...clientsZoom2Data,
    ...serversZoom2Data,
    ...gatewaysZoom2Data,
  ];

  // Get the edges to be used in the flowchart.
  const [edges, setEdges] = useEdgesState(edgesData);

  // Set the nodes and edges in the flowchart based on the current game.
  useEffect(() => {
    // Define an object that maps each game to its corresponding nodes and edges.
    const gameToNodesAndEdges = {
      whatIsClient: {
        nodes: [...clientsZoom2Data, ...serversZoom2Data],
        edges: edgesData,
      },
      createPacket: {
        nodes: [
          ...clientsCreatePacket,
          ...serversZoom2Data,
          ...gatewaysZoom2Data,
        ],
        edges: edgesData,
      },
      findServer: {
        nodes: [
          ...clientsFindServer,
          ...serversZoom2Data,
          ...gatewaysZoom2Data,
        ],
        edges: edgesData,
      },
      whatIsCabel: {
        nodes: [
          ...whatIsCabelClient,
          ...whatIsCabelGateway,
          ...whatIsCabelServer,
        ],
        edges: whatIsCabelEdges,
      },
      whatIsWiFi: {
        nodes: whatIsWifiNodes,
        edges: edgesData,
      },
      whatIsBTS: {
        nodes: whatIsBTSNodes,
        edges: whatIsBTSEdges,
      },
      whatIsSatelit: {
        nodes: whatIsSatelitNodes,
        edges: whatIsSatelitEdges,
      },
      setPath: {
        nodes: [...setPathGateway, ...setPathClient, ...setPathServer],
        edges: setPathEdges,
      },
      shortestPath: {
        nodes: [
          ...shortestPathGateway,
          ...shortestPathClient,
          ...shortestPathServer,
        ],
        edges: shortestPathEdges,
      },
      countOfPaths: {
        nodes: [...countPathGateway, ...countPathsClient, ...countPathsServer],
        edges: countPathsEdges,
      },
      problemWithPath: {
        nodes: [
          ...problemWithPathGateway,
          ...problemWithPathServer,
          ...problemWithPathClient,
        ],
        edges: isDestroyed
          ? problemWithPathDestroyedPathEdges
          : problemWithPathEdges,
      },
      buildNetwork: {
        nodes: [],
        edges: edgesData,
      },
      default: {
        nodes: defaultNodes,
        edges: edgesData,
      },
    };

    // Get the nodes and edges for the current game or use the default nodes and edges.
    const { nodes, edges } =
      gameToNodesAndEdges[game] || gameToNodesAndEdges.default;
    setNodes(nodes);
    setEdges(edges);
  }, [game, setNodes, setEdges, isDestroyed]);

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
        attributionPosition="top-right"
      />
    </>
  );
}

export default Flow;
