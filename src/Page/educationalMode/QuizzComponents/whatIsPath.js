import ReactFlow, { Controls } from "reactflow";
import { whatIsPathNodes } from "../../../Data/Flow/whatIsPath";
import { whatIsPathEdges } from "../../../Data/Flow/edges/whatIsPath";

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
          className="what-is-path-europe"
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
