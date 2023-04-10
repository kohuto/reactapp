import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import server from "../../../../images/nodes/server.png";
import bts from "../../../../images/nodes/btsvez.jpg";
import client from "../../../../images/nodes/klient.jpg";
import wifi from "../../../../images/nodes/wifi.jpg";
import gateway from "../../../../images/nodes/gateway.jpg";
import RuleIcon from "@mui/icons-material/Rule";

// Object that defines the different types of devices that can be added
const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged-build",
  CLIENT_UNPLUGGED: "client-unplugged-build",
  WIFI: "wifi-build",
  BTS: "bts-build",
  GATEWAY: "gateway-build",
  SERVER: "server-build",
};

/**
 * Component that renders buttons for adding nodes to a network.
 * @param {Object} props - Component props.
 * @param {Function} props.handleAddNode - Function to add a node to the network.
 * @param {Function} props.checkValidity - Function to check the validity of the network.
 * @param {Array} props.nodes - Array of nodes in the network.
 */
function AddNodeButtons({ handleAddNode, checkValidity, nodes }) {
  // Calculate the remaining number of nodes of each type that can be added
  const remainingNodes = {
    [DEVICE_TYPE.SERVER]: 7 - countNodesOfType(nodes, DEVICE_TYPE.SERVER),
    [DEVICE_TYPE.GATEWAY]: 7 - countNodesOfType(nodes, DEVICE_TYPE.GATEWAY),
    [DEVICE_TYPE.CLIENT_UNPLUGGED]:
      7 - countNodesOfType(nodes, DEVICE_TYPE.CLIENT_UNPLUGGED),
    [DEVICE_TYPE.WIFI]: 7 - countNodesOfType(nodes, DEVICE_TYPE.WIFI),
    [DEVICE_TYPE.BTS]: 7 - countNodesOfType(nodes, DEVICE_TYPE.BTS),
  };

  // Array of objects that define each button to be rendered
  const buttonData = [
    {
      title: "CHYTRÁ KŘIŽOVATKA",
      icon: gateway,
      badgeCount: remainingNodes[DEVICE_TYPE.GATEWAY],
      onClick: () => handleAddNode(DEVICE_TYPE.GATEWAY),
    },
    {
      title: "KLIENT",
      icon: client,
      badgeCount: remainingNodes[DEVICE_TYPE.CLIENT_UNPLUGGED],
      onClick: () => handleAddNode(DEVICE_TYPE.CLIENT_UNPLUGGED),
    },
    {
      title: "WIFI",
      icon: wifi,
      badgeCount: remainingNodes[DEVICE_TYPE.WIFI],
      onClick: () => handleAddNode(DEVICE_TYPE.WIFI),
    },
    {
      title: "SERVER",
      icon: server,
      badgeCount: remainingNodes[DEVICE_TYPE.SERVER],
      onClick: () => handleAddNode(DEVICE_TYPE.SERVER),
    },
    {
      title: "BTS VĚŽ",
      icon: bts,
      badgeCount: remainingNodes[DEVICE_TYPE.BTS],
      onClick: () => handleAddNode(DEVICE_TYPE.BTS),
    },
  ];

  return (
    <div className="build-network-button-container">
      {buttonData.map(({ title, icon, badgeCount, onClick }) => (
        <Tooltip title={title} placement="left" key={title}>
          <IconButton>
            <Badge badgeContent={badgeCount} color="primary">
              <img src={icon} onClick={onClick} />
            </Badge>
          </IconButton>
        </Tooltip>
      ))}
      <Tooltip title="ZKONTROLOVAT" placement="left">
        <IconButton onClick={checkValidity}>
          <RuleIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

function countNodesOfType(nodes, type) {
  return nodes.filter((node) => node.className === type).length;
}

export default AddNodeButtons;
