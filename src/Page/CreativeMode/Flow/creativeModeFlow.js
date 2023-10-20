import { useCallback } from "react";
import { useRef } from "react";
import ReactFlow, { addEdge, updateEdge } from "reactflow";

import CustomNode from "./CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};
const CreativeModeFlow = ({
  nodes,
  edges,
  setEdges,
  setNodes,
  onNodesChange,
  onEdgesChange,
  isDeleteMode,
}) => {
  const edgeUpdateSuccessful = useRef(true);

  const handleNodeClick = (event, node) => {
    if (isDeleteMode) {
      console.log("kliknul jsem");
      setNodes((prevNodes) => prevNodes.filter((n) => n.id !== node.id));
    }
  };

  const handleEdgeClick = (event, edge) => {
    if (isDeleteMode) {
      console.log("kliknul jsem");
      setEdges((prevEdges) => prevEdges.filter((e) => e.id !== edge.id));
    }
  };

  const onEdgeUpdateStart = () => {
    edgeUpdateSuccessful.current = false;
  };

  const onEdgeUpdate = (oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  };

  const onEdgeUpdateEnd = (_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const defaultEdgeOptions = {
    type: "floating",
    style: { strokeWidth: 3, stroke: "black" },
  };
  return (
    <div className="creative-mode-flow-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnDrag={false}
        zoomOnScroll={false}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        attributionPosition="bottom-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={CustomConnectionLine}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
        connectionLineStyle={{ width: "10px" }}
      />
    </div>
  );
};

export default CreativeModeFlow;
