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
import SetPaths from "./setPaths";
import ZoomButtons from "./zoomButtons";
import WhatIsWiFiComponent from "./whatIsWifi";
import RaceAroundWorld from "./raceAroundWorld";
import WirelessDevices from "./wirelessDevice";
import ClientServerCommunication from "./clientServerComunication";
import WhatIsPathComponent from "./whatIsPath";
import BuildNetwork from "./buildNetwork";

function QuizzComponents({
  setGame,
  game,
  zoomIn,
  zoomOut,
  zoom,
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
    case "whatIsClient":
      return (
        <WhatIsClientComponent zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />
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
      return (
        <WhatIsCabelComponent zoomIn={zoomIn} zoomOut={zoomOut} zoom={zoom} />
      );

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
        <ConnectClientsWirelessComponent setGame={() => setGame("noGame")} />
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
