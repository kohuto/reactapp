import ReactFlow from "reactflow";
import "./reactFlow.css";
import "reactflow/dist/style.css";

function SimpleFlow({ nodes, edges }) {
  return (
    <>
      <div className="simple-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          attributionPosition="top-right"
        />
      </div>
    </>
  );
}

export default SimpleFlow;
