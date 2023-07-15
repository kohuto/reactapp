import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import serverImage from "../../images/nodes/server_komplet.svg";
import btsImage from "../../images/nodes/BTSvez.svg";
import clientImage from "../../images/nodes/notebook.svg";
import wifiImage from "../../images/nodes/wifi.svg";
import gatewayImage from "../../images/nodes/chytrakrizovatka_kratka.svg";

const DEVICE_TYPE = {
  CLIENT_PLUGGED: "client-plugged-creative",
  CLIENT_UNPLUGGED: "client-unplugged-creative",
  WIFI: "wifi-creative",
  BTS: "bts-creative",
  GATEWAY: "gateway-creative",
  SERVER: "server-creative",
};

function countNodesByType(nodes, type) {
  return nodes.filter((node) => node.className.includes(type)).length;
}

function AddDeviceButtons({ handleAddNode, nodes }) {
  const serversLeft = 15 - countNodesByType(nodes, DEVICE_TYPE.SERVER);
  const gatewaysLeft = 15 - countNodesByType(nodes, DEVICE_TYPE.GATEWAY);
  const clientsLeft =
    16 -
    countNodesByType(nodes, DEVICE_TYPE.CLIENT_UNPLUGGED) -
    countNodesByType(nodes, DEVICE_TYPE.CLIENT_PLUGGED);
  const wifiLeft = 15 - countNodesByType(nodes, DEVICE_TYPE.WIFI);
  const btsLeft = 15 - countNodesByType(nodes, DEVICE_TYPE.BTS);

  return (
    <div className="lp-add-nodes-buttons-container">
      <Tooltip title="SERVER" placement="left">
        <IconButton>
          <Badge badgeContent={serversLeft} color="primary">
            <img
              src={serverImage}
              style={{ width: "60px", height: "40px" }}
              alt="Server button"
              onClick={() => handleAddNode(DEVICE_TYPE.SERVER)}
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
              onClick={() => handleAddNode(DEVICE_TYPE.GATEWAY)}
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
              onClick={() => handleAddNode(DEVICE_TYPE.CLIENT_UNPLUGGED)}
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
              onClick={() => handleAddNode(DEVICE_TYPE.WIFI)}
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
              onClick={() => handleAddNode(DEVICE_TYPE.BTS)}
            />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default AddDeviceButtons;
