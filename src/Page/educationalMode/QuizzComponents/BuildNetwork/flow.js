import { useCallback, useRef } from "react";
import ReactFlow, { addEdge, Controls, updateEdge } from "reactflow";

function Flow({ nodes, edges, setEdges, onNodesChange, onEdgesChange }) {
  const edgeUpdateSuccessful = useRef(true);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  return (
    <div className="build-network-flow-container">
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
        attributionPosition="bottom-right"
        onConnect={onConnect}
      >
        <Controls
          showFitView={false}
          showInteractive={false}
          position="bottom-right"
        />
      </ReactFlow>
    </div>
  );
}

export default Flow;
