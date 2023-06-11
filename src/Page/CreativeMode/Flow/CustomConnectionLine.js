import { getStraightPath } from "reactflow";

function CustomConnectionLine({ fromX, fromY, toX, toY }) {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return <path style={{ strokeWidth: 1, stroke: "grey" }} d={edgePath} />;
}

export default CustomConnectionLine;
