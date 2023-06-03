import WhatIsServerComponent from "./WhatIsServer/whatIsServer";
import FindPacketComponent from "./FindServers/findServers";
import CreatePacketComponent from "./CreatePacket/createPacket";
import ConnectClientsWirelessComponent from "./ConnectClientsWireless/connectClientsWireless";
import DataIntoPackets from "./DataIntoPacket/dataIntoPackets";
import WhatIsBTSComponent from "./WhatIsBTS/whatIsBTS";
import WhatIsCabelComponent from "./WhatIsCabel/whatIsCabel";
import WhatIsSatelitComponent from "./WhatIsSatelit/whatIsSatelit";
import ProblemWithPath from "./ProblemWithPath/problemWithPath";
import ShortestPathComponent from "./FastestPath/shortestPath";
import CountPaths from "./CountPaths/countPaths";
import WhatIsWiFiComponent from "./WhatIsWifi/whatIsWifi";
import ClientServerCommunication from "./ClientServerComunication/clientServerComunication";
import WhatIsPathComponent from "./DataPath/dataPath";
import BuildNetwork from "./BuildNetwork/buildNetwork";
import LatencyComponent from "./Latency/latency";
import Client from "./WhatIsClient/whatIsClient";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";

function QuizzComponents({ setOpenDialog, game, setGame }) {
  const gameInfo = stockData.find((item) => item.type === game);

  switch (game) {
    case "whatIsServer":
      return (
        <WhatIsServerComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "whatIsClient":
      return <Client info={gameInfo} setGame={setGame} />;
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
      return <ShortestPathComponent setOpenDialog={setOpenDialog} />;
    case "countOfPaths":
      return <CountPaths setOpenDialog={setOpenDialog} />;
    case "problemWithPath":
      return <ProblemWithPath setOpenDialog={setOpenDialog} />;
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
