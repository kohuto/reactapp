import ReactFlow from "reactflow";
import "./reactFlow.css";
import "reactflow/dist/style.css";
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
