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
  onNodesChange,
  onEdgesChange,
}) => {
  const edgeUpdateSuccessful = useRef(true);

  const handleNodeClick = (event, node) => {
    console.log("kliknul jsem");
    const id = node.id;
    const index = nodes.findIndex((node) => node.id === id);
    if (index !== -1) {
      nodes.splice(index, 1);
    }
  };
  const handleEdgeClick = (event, edge) => {
    console.log("kliknul jsem");
    const id = edge.id;
    const index = edges.findIndex((edge) => edge.id === id);
    if (index !== -1) {
      edges.splice(index, 1);
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
