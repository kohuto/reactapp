import { useRef } from "react";
import ReactFlow, { addEdge, updateEdge } from "reactflow";

/**
 * A component that renders a ReactFlow graph for creating nodes and edges.
 * @param {Object} props - The component props.
 * @param {Array} props.nodes - The nodes to render on the graph.
 * @param {Array} props.edges - The edges to render on the graph.
 * @param {function} props.setEdges - A function to update the edges.
 * @param {function} props.onNodesChange - A function to handle changes to the nodes.
 * @param {function} props.onEdgesChange - A function to handle changes to the edges.
 * @returns {JSX.Element} - A React component.
 */
function CreativeModeFlow({
  nodes,
  edges,
  setEdges,
  onNodesChange,
  onEdgesChange,
}) {
  const edgeUpdateSuccessful = useRef(true);

  /**
   * A function to handle adding a new edge to the graph.
   * @param {Object} params - The parameters of the new edge.
   */
  const onConnect = (params) => {
    setEdges((els) => addEdge(params, els));
  };

  /**
   * A function to handle the start of an edge update.
   */
  const onEdgeUpdateStart = () => {
    edgeUpdateSuccessful.current = false;
  };

  /**
   * A function to handle updating an existing edge on the graph.
   * @param {Object} oldEdge - The old edge object.
   * @param {Object} newConnection - The new connection object.
   */
  const onEdgeUpdate = (oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  };

  /**
   * A function to handle the end of an edge update.
   * @param {Object} _ - The event object.
   * @param {Object} edge - The updated edge object.
   */
  const onEdgeUpdateEnd = (_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  };

  return (
    <>
      <div className="creative-mode-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          snapToGrid
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          selectNodesOnDrag={true}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          attributionPosition="bottom-right"
          onConnect={onConnect}
        />
      </div>
    </>
  );
}

export default CreativeModeFlow;
