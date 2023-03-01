import ABC from "./Quizzes/abc";
import SortFileSize from "./Quizzes/sortFileSize";
import SortConnectionTypeSpeed from "./Quizzes/sortConnectionTypeSpeed";
import Puzzle from "./Quizzes/puzzle";
import IPadress from "./Quizzes/IPadress";
import SortIPAdresses from "./Quizzes/sortIPAdresses";
import StartQuizz from "./Quizzes/startQuizz";
import TypingChallenge from "./Quizzes/typingChallenge";
import HowToConnect from "./Quizzes/howToConnect";

function Quizz({ setGame, taskData, id, closeModal }) {
  switch (taskData.type) {
    case "abc":
      return (
        <ABC
          a={taskData.a}
          b={taskData.b}
          c={taskData.c}
          question={taskData.question}
          correct={taskData.correct}
          id={id}
          setGame={() => setGame("abc")}
        />
      );
    case "howToConnect":
      return <HowToConnect />;
    case "createPacket":
      return (
        <StartQuizz
          setGame={() => setGame("createPacket")}
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
      return <TypingChallenge />;
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
    case "whatIsCabel":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsCabel")}
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
    case "whatIsBTS":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsBTS")}
          closeModal={closeModal}
        />
      );
    case "whatIsSatelit":
      return (
        <StartQuizz
          setGame={() => setGame("whatIsSatelit")}
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
      return <IPadress />;
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
      return <SortFileSize question={taskData.question} />;
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
        />
      );
    case "puzzle":
      return <Puzzle />;
    default:
      return null;
  }
}

export default Quizz;
