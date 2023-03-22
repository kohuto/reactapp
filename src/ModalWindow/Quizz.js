import SortFileSize from "./Quizzes/sortFileSize";
import Puzzle from "./Quizzes/puzzle";
import IPadress from "./Quizzes/IPadress";
import SortIPAdresses from "./Quizzes/sortIPAdresses";
import TypingChallenge from "./Quizzes/typingChallenge";
import HowToConnect from "./Quizzes/howToConnect";

function Quizz({
  taskType,
  setAlertMessage,
  setOpenModal,
  setGameAfterModalClose,
}) {
  switch (taskType) {
    case "sortFileSize":
      return (
        <SortFileSize
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "typingChallenge":
      return (
        <TypingChallenge
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "howToConnect":
      return (
        <HowToConnect
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "IPadress":
      return (
        <IPadress
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "sortIPAdresses":
      return (
        <SortIPAdresses
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    case "puzzle":
      return (
        <Puzzle
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
        />
      );
    default:
      return null;
  }
}

export default Quizz;
