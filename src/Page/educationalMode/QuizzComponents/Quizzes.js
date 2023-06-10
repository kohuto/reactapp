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
import BandWidthComponent from "./BandWidth/bandWidth";
import IPaddress from "./MyIP/IPadress";
import SortIPAdresses from "./SortIPAddresses/sortIPAdresses";
import Puzzle from "./Puzzle/puzzle";
import BuildNetwork1 from "./BuildNetwork1/buildNetwork1";
import BuildNetwork2 from "./BuildNetwork2/buildNetwork";
import BuildNetwork3 from "./BuildNetwork3/buildNetwork";

function QuizzComponents({ setOpenDialog, game, setGame }) {
  const gameInfo = stockData.find((item) => item.type === game);

  switch (game) {
    case "whatIsServer":
      return <WhatIsServerComponent info={gameInfo} setGame={setGame} />;
    case "whatIsClient":
      return <Client info={gameInfo} setGame={setGame} />;
    case "client-server-communication":
      return <ClientServerCommunication info={gameInfo} setGame={setGame} />;
    case "whereDataTravel":
      return <WhereDataTravel info={gameInfo} setGame={setGame} />;
    case "whatIsPath":
      return <WhatIsPathComponent info={gameInfo} setGame={setGame} />;
    case "whatIsGateway":
      return <WhatIsGatewayComponent info={gameInfo} setGame={setGame} />;
    case "dataIntoPackets":
      return <DataIntoPackets info={gameInfo} setGame={setGame} />;
    case "whatIsPacket":
      return <WhatIsPacketComponent info={gameInfo} setGame={setGame} />;
    case "createPacket":
      return <CreatePacketComponent info={gameInfo} setGame={setGame} />;
    case "findServer":
      return <FindPacketComponent info={gameInfo} setGame={setGame} />;
    case "sortFileSize":
      return <SortFileSize info={gameInfo} setGame={setGame} />;
    case "whatIsCabelTypeOfConnection":
      return <WhatIsWiFiComponent info={gameInfo} setGame={setGame} />;
    case "whatIsCabel":
      return <WhatIsCabelComponent info={gameInfo} setGame={setGame} />;
    case "whatIsWiFi":
      return <WhatIsWiFiComponent info={gameInfo} setGame={setGame} />;
    case "whatIsBTS":
      return <WhatIsBTSComponent info={gameInfo} setGame={setGame} />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent info={gameInfo} setGame={setGame} />;
    case "raceAroundWorld":
      return <LatencyComponent info={gameInfo} setGame={setGame} />;
    case "typingChallenge":
      return <BandWidthComponent info={gameInfo} setGame={setGame} />;
    case "connectClientsWireless":
      return (
        <ConnectClientsWirelessComponent info={gameInfo} setGame={setGame} />
      );
    case "howToConnect":
      return <HowToConnect info={gameInfo} setGame={setGame} />;
    case "IPadress":
      return <IPaddress info={gameInfo} setGame={setGame} />;
    case "sortIPAdresses":
      return <SortIPAdresses info={gameInfo} setGame={setGame} />;
    case "shortestPath":
      return <ShortestPathComponent info={gameInfo} setGame={setGame} />;
    case "countOfPaths":
      return <CountPaths info={gameInfo} setGame={setGame} />;
    case "problemWithPath":
      return <ProblemWithPath info={gameInfo} setGame={setGame} />;
    case "puzzle":
      return <Puzzle info={gameInfo} setGame={setGame} />;
    case "build-network-1":
      return <BuildNetwork1 game={game} info={gameInfo} setGame={setGame} />;
    case "build-network-2":
      return <BuildNetwork2 info={gameInfo} setGame={setGame} />;
    case "build-network-3":
      return <BuildNetwork3 info={gameInfo} setGame={setGame} />;
    case "build-network-4":
      return <BuildNetwork info={gameInfo} setGame={setGame} />;
    default:
      return "";
  }
}

export default QuizzComponents;
