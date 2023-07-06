import { getStraightPath } from "reactflow";

function CustomConnectionLine({ fromX, fromY, toX, toY }) {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
    lineWidth: 10,
  });

  return (
    <path
      style={{ strokeWidth: 1, stroke: "grey", width: "10px" }}
      d={edgePath}
    />
  );
}

export default CustomConnectionLine;
