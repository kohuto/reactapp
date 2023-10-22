import { useCallback, useState } from "react";
import ReactFlow, { useEdgesState, addEdge, useNodesState } from "reactflow";
import { whatIsWifiNodes } from "../../../../Data/Flow/whatIsWifi";
import { whatIsWifiEdges } from "../../../../Data/Flow/edges/whatIsWifiEdges";
import "../../../CreativeMode/creativeMode.css";
import "./style.css";
import WhatIsWifiFlow from "./what-is-wifi-flow";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";

// IP addresses used in the component
const GATEWAY_IP = "242.47.214.213";
const SOCKET_IP = "212.68.73.2";
const WIFI_IP = "136.200.123.175";

function WhatIsWiFiComponent({ info, setGame }) {
  const [edges, setEdges, onEdgesChange] = useEdgesState(whatIsWifiEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState(whatIsWifiNodes);
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [isWifiInSocket, setIsWifiInSocket] = useState(false);
  const [isIncorret, setIsIncorrect] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isCorrectConnected, setIsCorrectConnected] = useState(false);
  const finalMessage =
    "Perfektní! Podařilo se ti zapojit wifi router a nyní se pomocí wifi signálu můžeš připojit k internetu.";
  const switchOnWifiMessage = "Nyní zapni wifi.";
  const plugWifiMessage =
    "Nyní musíš wifi router zapojit do sítě. Na počítači sice vidíme wifi router jako dostupný, není ale připojen k chytré křižovatce, proto se nemůžeme připojit k internetu.";
  const wifiIntoSocketMessage =
    "Prvně zapoj wifi router do zásuvky (klikni na router a přetáhni kabel do zásuvky).";

  const onConnect = useCallback(
    (params) => {
      const { source, target } = params;
      const isWifiPlugged = edges.some(
        (edge) => edge.source === WIFI_IP || edge.target === WIFI_IP
      );

      if (isWifiPlugged) {
        // wifi is in socket
        if (isSwitchedOn) {
          if (
            (source === GATEWAY_IP && target === WIFI_IP) ||
            (source === WIFI_IP && target === GATEWAY_IP)
          ) {
            // wifi is switched on and trying to connect it into gateway
            setEdges((els) => addEdge(params, els));
            setIsCorrectConnected(true);
          } else {
            setAlertMessage("chces wifi do gateway");
            setIsIncorrect(true);
          }
        } else {
          // wifi is in socket, but is not switched on
          setAlertMessage(switchOnWifiMessage);
          setIsIncorrect(true);
        }
      } else {
        if (
          (source === WIFI_IP && target === SOCKET_IP) ||
          (source === SOCKET_IP && target === WIFI_IP)
        ) {
          // wifi is not in socket but trying to put it into socket
          setEdges((els) => addEdge(params, els));
          setIsWifiInSocket(true);
          setAlertMessage(switchOnWifiMessage);
          setIsIncorrect(true);
        } else {
          setAlertMessage(wifiIntoSocketMessage);
          setIsIncorrect(true);
        }
      }
    },
    [edges, isSwitchedOn]
  );

  /* handle click button switch on of wifi */
  function handleToggleSwitch() {
    if (isWifiInSocket) {
      setIsSwitchedOn((prevSwitch) => !prevSwitch);
      if (isSwitchedOn) {
        setAlertMessage(plugWifiMessage);
        setIsIncorrect(true);
      }
    } else {
      setAlertMessage(wifiIntoSocketMessage);
      setIsIncorrect(true);
    }
  }

  return (
    <div className="what-is-wifi-container">
      <div className="switch-on-off-button">
        <button onClick={handleToggleSwitch}>
          {isSwitchedOn ? "Vypnout" : "Zapnout"}
        </button>
      </div>
      <div className="wifi-list">
        <h1>Dostupné wifi sítě</h1>
        <p>{isSwitchedOn ? WIFI_IP : "Žádné dostupné sítě"}</p>
      </div>
      <WhatIsWifiFlow
        setEdges={setEdges}
        setNodes={setNodes}
        edges={edges}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
      {isIncorret && (
        <AlertDialog
          content={alertMessage}
          closeAction={() => setIsIncorrect(false)}
        />
      )}
      {isCorrectConnected && (
        <NextLevelModal
          content={finalMessage}
          game={info.type}
          setGame={setGame}
        />
      )}
    </div>
  );
}

export default WhatIsWiFiComponent;
