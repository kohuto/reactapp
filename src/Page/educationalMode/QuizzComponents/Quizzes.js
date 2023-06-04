import WhatIsServerComponent from "./WhatIsServer/whatIsServer";
import Client from "./WhatIsClient/whatIsClient";
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
import WhereDataTravel from "./DataPath/dataPath";
import BuildNetwork from "./BuildNetwork/buildNetwork";
import LatencyComponent from "./Latency/latency";
import { stockData } from "../../../Data/Quizzes/dataQuizzes";
import WhatIsPacketComponent from "./WhatIsPacket/whatIsPacket";
import WhatIsPathComponent from "./WhatIsPath/whatIsPath";
import WhatIsGatewayComponent from "./WhatIsGateway/whatIsGateway";
import HowToConnect from "./HowToConnect/howToConnect";
import SortFileSize from "./HowManyPackets/sortFileSize";

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
      return (
        <ClientServerCommunication
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "whereDataTravel":
      return <WhereDataTravel info={gameInfo} setGame={setGame} />;
    case "whatIsPath":
      return <WhatIsPathComponent info={gameInfo} setGame={setGame} />;
    case "whatIsGateway":
      return <WhatIsGatewayComponent info={gameInfo} setGame={setGame} />;
    case "dataIntoPackets":
      return (
        <DataIntoPackets
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "whatIsPacket":
      return <WhatIsPacketComponent info={gameInfo} setGame={setGame} />;
    case "createPacket":
      return (
        <CreatePacketComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "findServer":
      return (
        <FindPacketComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );

    case "sortFileSize":
      return <SortFileSize info={gameInfo} setGame={setGame} />;
    case "whatIsCabelTypeOfConnection":
      return <WhatIsWiFiComponent info={gameInfo} setGame={setGame} />;
    case "whatIsCabel":
      return <WhatIsCabelComponent info={gameInfo} setGame={setGame} />;
    case "whatIsWiFi":
      return (
        <WhatIsWiFiComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "whatIsBTS":
      return <WhatIsBTSComponent info={gameInfo} setGame={setGame} />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent info={gameInfo} setGame={setGame} />;
    case "raceAroundWorld":
      return (
        <LatencyComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "connectClientsWireless":
      return (
        <ConnectClientsWirelessComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "howToConnect":
      return <HowToConnect info={gameInfo} setGame={setGame} />;
    case "shortestPath":
      return (
        <ShortestPathComponent
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "countOfPaths":
      return (
        <CountPaths
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "problemWithPath":
      return (
        <ProblemWithPath
          setOpenDialog={setOpenDialog}
          info={gameInfo}
          setGame={setGame}
        />
      );
    case "build-network-1":
    case "build-network-2":
    case "build-network-3":
    case "build-network-4":
      return (
        <BuildNetwork
          setOpenDialog={setOpenDialog}
          game={game}
          info={gameInfo}
          setGame={setGame}
        />
      );
    default:
      return "";
  }
}

export default QuizzComponents;
