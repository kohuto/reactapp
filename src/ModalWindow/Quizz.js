import ABC from "./Quizzes/abc";
import SortFileSize from "./Quizzes/sortFileSize";
import SortConnectionTypeSpeed from "./Quizzes/sortConnectionTypeSpeed";
import Puzzle from "./Quizzes/puzzle";
import IPadress from "./Quizzes/IPadress";
import SortIPAdresses from "./Quizzes/sortIPAdresses";
import StartQuizz from "./Quizzes/startQuizz";
import TypingChallenge from "./Quizzes/typingChallenge";
import HowToConnect from "./Quizzes/howToConnect";

function Quizz({
  setGame,
  taskData,
  closeModal,
  setOpenEndGame,
  setOpenInform,
  setAlertMessage,
}) {
  switch (taskData.type) {
    case "howToConnect":
      return (
        <HowToConnect
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "createPacket":
      return (
        <StartQuizz
          setGame={() => setGame("createPacket")}
          closeModal={closeModal}
        />
      );
    case "client-server-communication":
      return (
        <StartQuizz
          setGame={() => setGame("client-server-communication")}
          closeModal={closeModal}
        />
      );
    case "setPathsOfPackets":
      return (
        <StartQuizz
          setGame={() => setGame("setPathsOfPackets")}
          closeModal={closeModal}
        />
      );
    case "raceAroundWorld":
      return (
        <StartQuizz
          setGame={() => setGame("raceAroundWorld")}
          closeModal={closeModal}
        />
      );
    case "whatIsBTS":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsBTS")}
          closeModal={closeModal}
        />
      );
    case "typingChallenge":
      return (
        <TypingChallenge
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "whatIsSatelit":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsSatelit")}
          closeModal={closeModal}
        />
      );
    case "whatIsWiFi":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsWiFi")}
          closeModal={closeModal}
        />
      );
    case "whatIsCabel":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsCabel")}
          closeModal={closeModal}
        />
      );
    case "countOfPaths":
      return (
        <StartQuizz
          setGame={() => setGame("countOfPaths")}
          closeModal={closeModal}
        />
      );
    case "problemWithPath":
      return (
        <StartQuizz
          setGame={() => setGame("problemWithPath")}
          closeModal={closeModal}
        />
      );
    case "shortestPath":
      return (
        <StartQuizz
          setGame={() => setGame("shortestPath")}
          closeModal={closeModal}
        />
      );
    case "dataIntoPackets":
      return (
        <StartQuizz
          setGame={() => setGame("dataIntoPackets")}
          closeModal={closeModal}
        />
      );
    case "sortIPAdresses":
      return (
        <SortIPAdresses
          setGame={() => setGame("sortIPAdresses")}
          closeModal={closeModal}
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "connectClientsWireless":
      return (
        <StartQuizz
          setGame={() => setGame("connectClientsWireless")}
          closeModal={closeModal}
        />
      );
    case "IPadress":
      return (
        <IPadress
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "findServer":
      return (
        <StartQuizz
          setGame={() => setGame("findServer")}
          closeModal={closeModal}
        />
      );
    case "findPacket":
      return (
        <StartQuizz
          setGame={() => setGame("findPacket")}
          closeModal={closeModal}
        />
      );
    case "whatIsServer":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsServer")}
          closeModal={closeModal}
        />
      );
    case "whatIsClient":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsClient")}
          closeModal={closeModal}
        />
      );

    case "whatIsRoad":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsRoad")}
          closeModal={closeModal}
        />
      );
    case "whatIsGateway":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsGateway")}
          closeModal={closeModal}
        />
      );
    case "sortFileSize":
      return (
        <SortFileSize
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "chytraKrizovatka":
      return (
        <StartQuizz
          setGame={() => setGame("chytraKrizovatka")}
          closeModal={closeModal}
        />
      );
    case "server":
      return (
        <StartQuizz setGame={() => setGame("server")} closeModal={closeModal} />
      );
    case "sortConnectionTypeSpeed":
      return (
        <SortConnectionTypeSpeed
          setGame={() => setGame("sortConnectionTypeSpeed")}
          closeModal={closeModal}
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    case "puzzle":
      return (
        <Puzzle
          setAlertMessage={setAlertMessage}
          setOpenInform={setOpenInform}
          setOpenEndGame={setOpenEndGame}
        />
      );
    default:
      return null;
  }
}

export default Quizz;
