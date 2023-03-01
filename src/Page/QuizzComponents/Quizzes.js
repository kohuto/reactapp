import "./Components.css";
import WhatIsServerComponent from "./whatIsServer";
import WhatIsClientComponent from "./whatIsClient";
import FindPacketComponent from "./findServers";
import CreatePacketComponent from "./createPacket";
import ConnectClientsWirelessComponent from "./connectClientsWireless";
import DataIntoPackets from "./dataIntoPackets";
import WhatIsBTSComponent from "./whatIsBTS";
import WhatIsCabelComponent from "./whatIsCabel";
import WhatIsSatelitComponent from "./whatIsSatelit";
import ProblemWithPath from "./problemWithPath";
import ShortestPathComponent from "./shortestPath";
import CountPaths from "./countPaths";
import CircleImage from "./raceAroundWorld";
import SetPaths from "./setPaths";
import ZoomButtons from "./zoomButtons";
import WhatIsWiFiComponent from "./wirelessDevice";

function QuizzComponents({ setGame, game, zoomIn, zoomOut, zoom }) {
  switch (game) {
    case "whatIsServer":
      return (
        <WhatIsServerComponent zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />
      );
    case "whatIsClient":
      return (
        <WhatIsClientComponent zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />
      );
    case "whatIsGateway":
      return <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />;
    case "whatIsRoad":
      return <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />;
    case "dataIntoPackets":
      return <DataIntoPackets setGame={() => setGame("noGame")} />;
    case "createPacket":
      return <CreatePacketComponent setGame={() => setGame("noGame")} />;
    case "findPacket":
      return <FindPacketComponent setGame={() => setGame("noGame")} />;
    case "whatIsCabel":
      return <WhatIsCabelComponent />;
    case "whatIsWiFi":
      return <WhatIsWiFiComponent />;
    case "whatIsBTS":
      return <WhatIsBTSComponent />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent />;
    case "raceAroundWorld":
      return (
        <CircleImage images="../../images/Globe-Transparent-Background-PNG.png" />
      );
    case "connectClientsWireless":
      return (
        <ConnectClientsWirelessComponent setGame={() => setGame("noGame")} />
      );
    case "setPathsOfPackets":
      return <SetPaths />;
    case "shortestPath":
      return <ShortestPathComponent />;
    case "countOfPaths":
      return <CountPaths />;
    case "problemWithPath":
      return <ProblemWithPath />;
    default:
      return "";
  }
}

export default QuizzComponents;
