import "./Components.css";
import WhatIsServerComponent from "./WhatIsServer/whatIsServer";
import FindPacketComponent from "./FindServers/findServers";
import CreatePacketComponent from "./CreatePacket/createPacket";
import ConnectClientsWirelessComponent from "./ConnectClientsWireless/connectClientsWireless";
import DataIntoPackets from "./DataIntoPacket/dataIntoPackets";
import WhatIsBTSComponent from "./WhatIsBTS/whatIsBTS";
import WhatIsCabelComponent from "./whatIsCabel";
import WhatIsSatelitComponent from "./WhatIsSatelit/whatIsSatelit";
import ProblemWithPath from "./problemWithPath";
import ShortestPathComponent from "./shortestPath";
import CountPaths from "./countPaths";
import WhatIsWiFiComponent from "./WhatIsWifi/whatIsWifi";
import ClientServerCommunication from "./ClientServerComunication/clientServerComunication";
import WhatIsPathComponent from "./DataPath/dataPath";
import BuildNetwork from "./buildNetwork";
import LatencyComponent from "./Latency/latency";

function QuizzComponents({
  game,
  setOpenDialog,
  setIsDistroyedProblemWithPath,
  isDestroyed,
}) {
  switch (game) {
    case "whatIsServer":
      return <WhatIsServerComponent setOpenDialog={setOpenDialog} />;
    case "client-server-communication":
      return <ClientServerCommunication setOpenDialog={setOpenDialog} />;
    case "whatIsPath":
      return <WhatIsPathComponent />;
    case "dataIntoPackets":
      return <DataIntoPackets setOpenDialog={setOpenDialog} />;
    case "createPacket":
      return <CreatePacketComponent setOpenDialog={setOpenDialog} />;
    case "findServer":
      return <FindPacketComponent setOpenDialog={setOpenDialog} />;
    case "whatIsCabelTypeOfConnection":
      return <WhatIsWiFiComponent />;
    case "whatIsCabel":
      return <WhatIsCabelComponent />;
    case "whatIsWiFi":
      return <WhatIsWiFiComponent setOpenDialog={setOpenDialog} />;
    case "whatIsBTS":
      return <WhatIsBTSComponent />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent />;
    case "raceAroundWorld":
      return <LatencyComponent setOpenDialog={setOpenDialog} />;
    case "connectClientsWireless":
      return <ConnectClientsWirelessComponent setOpenDialog={setOpenDialog} />;
    case "shortestPath":
      return (
        <ShortestPathComponent setOpenDialog={setOpenDialog} game={game} />
      );
    case "countOfPaths":
      return <CountPaths setOpenDialog={setOpenDialog} game={game} />;
    case "problemWithPath":
      return (
        <ProblemWithPath
          setOpenDialog={setOpenDialog}
          game={game}
          setIsDistroyedProblemWithPath={setIsDistroyedProblemWithPath}
          isDestroyed={isDestroyed}
        />
      );
    case "build-network-1":
    case "build-network-2":
    case "build-network-3":
    case "build-network-4":
      return <BuildNetwork setOpenDialog={setOpenDialog} game={game} />;
    default:
      return "";
  }
}

export default QuizzComponents;
