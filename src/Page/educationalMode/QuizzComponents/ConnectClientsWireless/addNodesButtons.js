import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import bts from "../../../../images/nodes/BTSvez.svg";
import wifi from "../../../../images/nodes/wifi.svg";

const DEVICE_TYPE = {
  WIFI: "wifi",
  BTS: "bts",
};

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
    <>
      <div className="connect-client-wireless-button-label">
        Přidej zařízení:
      </div>
      {buttonData.map(({ title, icon, badgeCount, onClick }, index) => (
        <Tooltip key={index} title={title} placement="left">
          <IconButton onClick={onClick}>
            <Badge badgeContent={badgeCount} color="primary">
              <img src={icon} alt={title} />
            </Badge>
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
}

function countNodesByType(nodes, type) {
  return nodes.filter((node) => node.className === type).length;
}

export default AddNodeButtons;
