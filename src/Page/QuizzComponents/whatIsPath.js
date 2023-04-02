import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  Controls,
} from "reactflow";
import { whatIsPathNodes } from "../../Flow/data/whatIsPath";
import { whatIsPathEdges } from "../../Flow/data/edges/whatIsPath";

function WhatIsPathComponent() {
  return (
    <>
      <div
        style={{
          height: "95vh",
          width: "80%",
          marginLeft: "20%",
        }}
      >
        <ReactFlow
          nodes={whatIsPathNodes}
          edges={whatIsPathEdges}
          selectNodesOnDrag={false}
          attributionPosition="top-right"
          className="mojeuzasna"
        >
          <Controls
            showFitView={false}
            showInteractive={false}
            position="bottom-right"
          />
        </ReactFlow>
      </div>
    </>
  );
}

export default WhatIsPathComponent;