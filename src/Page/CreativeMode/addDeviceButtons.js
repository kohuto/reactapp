import server from "../../images/nodes/server.png";
import bts from "../../images/nodes/btsvez.jpg";
import client from "../../images/nodes/klient.jpg";
import wifi from "../../images/nodes/wifi.jpg";
import gateway from "../../images/nodes/gateway.jpg";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function countNodesByType(nodes, type) {
  let count = 0;

  for (const node of nodes) {
    if (node.className === type) {
      count++;
    }
  }

  return count;
}

function AddDeviceButtons({ handleAddNode, nodes }) {
  const serversLeft = 8 - countNodesByType(nodes, "server-build");
  const gatewayLeft = 15 - countNodesByType(nodes, "gateway-build");
  const clientLeft = 9 - countNodesByType(nodes, "client-build");
  const wifiLeft = 8 - countNodesByType(nodes, "wifi-build");
  const btsLeft = 8 - countNodesByType(nodes, "bts-build");

  return (
    <div className="lp-add-nodes-buttons-container">
      <Tooltip title="SERVER" placement="left">
        <IconButton>
          <Badge badgeContent={serversLeft} color="primary">
            <img
              src={server}
              style={{ width: "60px", height: "40px" }}
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
          <Badge badgeContent={gatewayLeft} color="primary">
            <img
              src={gateway}
              style={{ width: "60px", height: "20px" }}
              onClick={() => handleAddNode("gateway-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="KLIENT" placement="left">
        <IconButton>
          <Badge badgeContent={clientLeft} color="primary">
            <img
              src={client}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("client-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="WIFI" placement="left">
        <IconButton>
          <Badge badgeContent={wifiLeft} color="primary">
            <img
              src={wifi}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("wifi-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="BTS VĚŽ" placement="left">
        <IconButton>
          <Badge badgeContent={btsLeft} color="primary">
            <img
              src={bts}
              style={{ width: "60px", height: "40px" }}
              onClick={() => handleAddNode("bts-build")}
            />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default AddDeviceButtons;
