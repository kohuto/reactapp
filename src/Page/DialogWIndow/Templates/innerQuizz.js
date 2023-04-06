import SortFileSize from "../../educationalMode/QuizzComponents/sortFileSize";
import Puzzle from "../../educationalMode/QuizzComponents/puzzle";
import IPadress from "../../educationalMode/QuizzComponents/IPadress";
import SortIPAdresses from "../../educationalMode/QuizzComponents/sortIPAdresses";
import TypingChallenge from "../../educationalMode/QuizzComponents/bandWidth";
import HowToConnect from "../../educationalMode/QuizzComponents/howToConnect";

function Quizz({
  taskType,
  setAlertMessage,
  setOpenModal,
  setGameAfterModalClose,
  game,
  setOpenOverlayModal,
  setOverlayDialogMessage,
}) {
  switch (taskType) {
    case "sortFileSize":
      return (
        <SortFileSize
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    case "typingChallenge":
      return (
        <TypingChallenge
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    case "howToConnect":
      return (
        <HowToConnect
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    case "IPadress":
      return (
        <IPadress
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    case "sortIPAdresses":
      return (
        <SortIPAdresses
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    case "puzzle":
      return (
        <Puzzle
          setAlertMessage={setAlertMessage}
          setOpenModal={setOpenModal}
          setGameAfterModalClose={setGameAfterModalClose}
          game={game}
          setOpenOverlayModal={setOpenOverlayModal}
          setOverlayDialogMessage={setOverlayDialogMessage}
        />
      );
    default:
      return null;
  }
}

export default Quizz;
