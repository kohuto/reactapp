import "./Components.css";
import WhatIsServerComponent from "./whatIsServer";
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
import ClientServerCommunication from "./clientServerComunication";
import WhatIsPathComponent from "./whatIsPath";
import BuildNetwork from "./buildNetwork";

function QuizzComponents({
  game,
  setOpenModal,
  setAlertMessage,
  setGameAfterModalClose,
  setIsDistroyedProblemWithPath,
  isDestroyed,
}) {
  switch (game) {
    case "whatIsServer":
      return (
        <WhatIsServerComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "client-server-communication":
      return (
        <ClientServerCommunication
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "whatIsCabel":
      return <WhatIsCabelComponent />;

    case "whatIsPath":
      return <WhatIsPathComponent />;
    case "dataIntoPackets":
      return (
        <DataIntoPackets
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "createPacket":
      return (
        <CreatePacketComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "findServer":
      return (
        <FindPacketComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "whatIsCabelTypeOfConnection":
      return <WhatIsWiFiComponent />;
    case "whatIsWiFi":
      return (
        <WhatIsWiFiComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "whatIsBTS":
      return <WhatIsBTSComponent />;
    case "whatIsSatelit":
      return <WhatIsSatelitComponent />;
    case "raceAroundWorld":
      return (
        <RaceAroundWorld
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "connectClientsWireless":
      return (
        <ConnectClientsWirelessComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "setPath":
      return (
        <SetPaths
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "shortestPath":
      return (
        <ShortestPathComponent
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "countOfPaths":
      return (
        <CountPaths
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "problemWithPath":
      return (
        <ProblemWithPath
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
          setIsDistroyedProblemWithPath={setIsDistroyedProblemWithPath}
          isDestroyed={isDestroyed}
        />
      );
    case "build-network-1":
    case "build-network-2":
    case "build-network-3":
    case "build-network-4":
      return (
        <BuildNetwork
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          game={game}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    default:
      return "";
  }
}

export default QuizzComponents;
