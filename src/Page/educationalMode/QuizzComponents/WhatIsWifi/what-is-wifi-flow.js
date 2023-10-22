import { useCallback } from "react";
import { useRef } from "react";
import ReactFlow, { addEdge, updateEdge } from "reactflow";

import CustomNode from "../../../CreativeMode/Flow/CustomNode";
import FloatingEdge from "../../../CreativeMode/Flow/FloatingEdge";
import CustomConnectionLine from "../../../CreativeMode/Flow/CustomConnectionLine";
const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};
const WhatIsWifiFlow = ({
  nodes,
  edges,
  setEdges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}) => {
  const edgeUpdateSuccessful = useRef(true);

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

  /*  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );*/

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
        connectionLineStyle={{ width: "10px" }}
      />
    </div>
  );
};

export default WhatIsWifiFlow;
