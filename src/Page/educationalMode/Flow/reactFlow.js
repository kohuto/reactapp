import { useEffect } from "react";
import ReactFlow, { useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import "./reactFlow.css";
import { clientsZoom2Data } from "../../../Data/Flow/client/clientsZoom2";
import { serversZoom2Data } from "../../../Data/Flow/server/serverZoom2";
import { gatewaysZoom2Data } from "../../../Data/Flow/gateway/gatewayZoom2";
import { edgesData } from "../../../Data/Flow/edges/edges";
import BuildNetwork from "../QuizzComponents/BuildNetwork/buildNetwork";
import { clientsCreatePacket } from "../../../Data/Flow/client/clientsCreatePacket";
import { clientsFindServer } from "../../../Data/Flow/client/clientsFindServer";
import { problemWithPathEdges } from "../../../Data/Flow/edges/problemWithPathEdges";
import { problemWithPathGateway } from "../../../Data/Flow/gateway/problemWithPathGateway";
import { problemWithPathServer } from "../../../Data/Flow/server/problemWithPathServer";
import { setPathClient } from "../../../Data/Flow/client/setPathClient";
import { setPathEdges } from "../../../Data/Flow/edges/setPathEdges";
import { setPathGateway } from "../../../Data/Flow/gateway/setPathGateway";
import { setPathServer } from "../../../Data/Flow/server/setPathServer";
import { problemWithPathDestroyedPathEdges } from "../../../Data/Flow/edges/problemWithPathBrokenPathEdges";
import { whatIsCabelClient } from "../../../Data/Flow/client/whatIsCabelClient";
import { whatIsCabelEdges } from "../../../Data/Flow/edges/whatIsCabelEdges";
import { whatIsCabelGateway } from "../../../Data/Flow/gateway/whatIsCabelGateway";
import { whatIsCabelServer } from "../../../Data/Flow/server/whatIsCabelServer";
import { whatIsSatelitNodes } from "../../../Data/Flow/whatIsSatelit";
import { whatIsSatelitEdges } from "../../../Data/Flow/edges/whatIsSatelitEdges";
import { whatIsBTSNodes } from "../../../Data/Flow/whatIsBTS";
import { whatIsBTSEdges } from "../../../Data/Flow/edges/whatIsBTSEdges";
import { whatIsWifiNodes } from "../../../Data/Flow/whatIsWifi";

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
