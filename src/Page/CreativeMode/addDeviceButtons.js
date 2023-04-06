import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import serverImage from "../../images/nodes/server.png";
import btsImage from "../../images/nodes/btsvez.jpg";
import clientImage from "../../images/nodes/klient.jpg";
import wifiImage from "../../images/nodes/wifi.jpg";
import gatewayImage from "../../images/nodes/gateway.jpg";

/**
 * Counts the number of nodes of a specific type in the given array of nodes.
 *
 * @param {Object[]} nodes - An array of nodes.
 * @param {string} type - The type of node to count.
 * @returns {number} The number of nodes of the specified type.
 */
function countNodesByType(nodes, type) {
  let count = 0;
  for (const node of nodes) {
    if (node.className === type) {
      count++;
    }
  }
  return count;
}

/**
 * Renders a set of buttons for adding different types of nodes to a network.
 *
 * @param {Object} props - The component props.
 * @param {function} props.handleAddNode - The function to call when a node is added.
 * @param {Object[]} props.nodes - An array of nodes already in the network.
 * @returns {JSX.Element} The rendered component.
 */
function AddDeviceButtons({ handleAddNode, nodes }) {
  const serversLeft = 8 - countNodesByType(nodes, "server-build");
  const gatewaysLeft = 15 - countNodesByType(nodes, "gateway-build");
  const clientsLeft = 9 - countNodesByType(nodes, "client-build");
  const wifiLeft = 8 - countNodesByType(nodes, "wifi-build");
  const btsLeft = 8 - countNodesByType(nodes, "bts-build");

  return (
    <div className="lp-add-nodes-buttons-container">
      <Tooltip title="SERVER" placement="left">
        <IconButton>
          <Badge badgeContent={serversLeft} color="primary">
            <img
              src={serverImage}
              style={{ width: "60px", height: "40px" }}
              alt="Server button"
              onClick={() => handleAddNode("server-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip
        title="CHYTRÁ KŘIŽOVATKA"
        placement="left"
        style={{ marginTop: "1vh", marginBottom: "1vh" }}
      >
        <IconButton>
          <Badge badgeContent={gatewaysLeft} color="primary">
            <img
              src={gatewayImage}
              style={{ width: "60px", height: "20px" }}
              alt="Gateway button"
              onClick={() => handleAddNode("gateway-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="KLIENT" placement="left">
        <IconButton>
          <Badge badgeContent={clientsLeft} color="primary">
            <img
              src={clientImage}
              style={{ width: "60px", height: "40px" }}
              alt="Client button"
              onClick={() => handleAddNode("client-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="WIFI" placement="left">
        <IconButton>
          <Badge badgeContent={wifiLeft} color="primary">
            <img
              src={wifiImage}
              style={{ width: "60px", height: "40px" }}
              alt="WiFi button"
              onClick={() => handleAddNode("wifi-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="BTS VĚŽ" placement="left">
        <IconButton>
          <Badge badgeContent={btsLeft} color="primary">
            <img
              src={btsImage}
              style={{ width: "60px", height: "40px" }}
              alt="BTS Vez button"
              onClick={() => handleAddNode("bts-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default AddDeviceButtons;