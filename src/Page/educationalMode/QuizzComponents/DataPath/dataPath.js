import ReactFlow, { Controls } from "reactflow";
import { whatIsPathNodes } from "../../../../Data/Flow/whatIsPath";
import { whatIsPathEdges } from "../../../../Data/Flow/edges/whatIsPath";
import "./style.css";

/**
 * Component that renders the special flow represents network for what is path game.
 * @returns {JSX.Element} - Returns a JSX element that renders the "What is Path" flowchart.
 */
function WhereDataTravel() {
  return (
    <div className="data-path-flow-container">
      <ReactFlow
        nodes={whatIsPathNodes}
        edges={whatIsPathEdges}
        selectNodesOnDrag={false}
        attributionPosition="top-right"
        className="what-is-path-bg-europe"
        defaultViewport={{ x: 100, y: -300, zoom: 0.5 }}
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

export default WhereDataTravel;
