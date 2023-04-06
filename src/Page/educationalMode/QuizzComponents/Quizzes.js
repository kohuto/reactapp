import "./Components.css";
import WhatIsServerComponent from "./WhatIsServer/whatIsServer";
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
import SetPaths from "./setPaths";
import WhatIsWiFiComponent from "./whatIsWifi";
import RaceAroundWorld from "./latency";
import ClientServerCommunication from "./ClientServerComunication/clientServerComunication";
import WhatIsPathComponent from "./whatIsPath";
import BuildNetwork from "./buildNetwork";

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
      return (
        <ClientServerCommunication setOpenDialog={setOpenDialog} game={game} />
      );
    case "whatIsCabel":
      return <WhatIsCabelComponent />;

    case "whatIsPath":
      return <WhatIsPathComponent />;
    case "dataIntoPackets":
      return <DataIntoPackets setOpenDialog={setOpenDialog} game={game} />;
    case "createPacket":
      return (
        <CreatePacketComponent setOpenDialog={setOpenDialog} game={game} />
      );
    case "findServer":
      return <FindPacketComponent setOpenDialog={setOpenDialog} game={game} />;
    case "whatIsCabelTypeOfConnection":
      return <WhatIsWiFiComponent />;
    case "whatIsWiFi":
      return <WhatIsWiFiComponent setOpenDialog={setOpenDialog} game={game} />;
    case "whatIsBTS":
      return <WhatIsBTSComponent />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent />;
    case "raceAroundWorld":
      return <RaceAroundWorld setOpenDialog={setOpenDialog} game={game} />;
    case "connectClientsWireless":
      return (
        <ConnectClientsWirelessComponent
          setOpenDialog={setOpenDialog}
          game={game}
        />
      );
    case "setPath":
      return <SetPaths setOpenDialog={setOpenDialog} game={game} />;
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
