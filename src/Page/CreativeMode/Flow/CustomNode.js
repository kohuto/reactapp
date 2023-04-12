import { Handle, Position, useStore } from "reactflow";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id, isConnectable }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== id;
  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };

  return (
    <div className="customNode">
      <div className="customNodeBody">
        <span className="ip-address">{id}</span>
        <Handle
          className="targetHandle"
          style={{ zIndex: 2 }}
          position={Position.Bottom}
          type="source"
          isConnectable={isConnectable}
        />
        <Handle
          className="targetHandle"
          style={targetHandleStyle}
          position={Position.Bottom}
          type="target"
          isConnectable={isConnectable}
        />
      </div>
    </div>
  );
}
