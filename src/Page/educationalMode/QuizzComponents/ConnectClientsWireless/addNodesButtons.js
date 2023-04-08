import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import bts from "../../../../images/nodes/btsvez.jpg";
import wifi from "../../../../images/nodes/wifi.jpg";

const DEVICE_TYPE = {
  WIFI: "wifi",
  BTS: "bts",
};
/**
 * Renders a set of buttons for adding nodes to a wireless network.
 * @param {Object} props - The component props.
 * @param {function} props.handleAddNode - The function to call when a node is added.
 * @param {Object[]} props.nodes - An array of nodes in the network.
 * @returns {JSX.Element} - The rendered component.
 */
function AddNodeButtons({ handleAddNode, nodes }) {
  // Calculate the number of available nodes of each type.
  const remainingWifiNodes = 2 - countNodesByType(nodes, DEVICE_TYPE.WIFI);
  const remainingBtsNodes = 2 - countNodesByType(nodes, DEVICE_TYPE.BTS);

  // Define the data for each button.
  const buttonData = [
    {
      title: "WIFI",
      icon: wifi,
      badgeCount: remainingWifiNodes,
      onClick: () => handleAddNode(DEVICE_TYPE.WIFI),
    },
    {
      title: "BTS VĚŽ",
      icon: bts,
      badgeCount: remainingBtsNodes,
      onClick: () => handleAddNode(DEVICE_TYPE.BTS),
    },
  ];
  return (
    <div className="connect-client-wireless-button-container">
      {buttonData.map(({ title, icon, badgeCount, onClick }, index) => (
        <Tooltip key={index} title={title} placement="left">
          <IconButton onClick={onClick}>
            <Badge badgeContent={badgeCount} color="primary">
              <img src={icon} alt={title} />
            </Badge>
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
}

/**
 * Counts the number of nodes in an array that match a given type.
 * @param {Object[]} nodes - An array of nodes to search.
 * @param {string} type - The type of node to count.
 * @returns {number} - The number of nodes that match the given type.
 */
function countNodesByType(nodes, type) {
  return nodes.filter((node) => node.className === type).length;
}

export default AddNodeButtons;
