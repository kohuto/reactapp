import SortFileSize from "../../educationalMode/QuizzComponents/HowManyPackets/sortFileSize";
import Puzzle from "../../educationalMode/QuizzComponents/puzzle";
import IPadress from "../../educationalMode/QuizzComponents/IPadress";
import SortIPAdresses from "../../educationalMode/QuizzComponents/sortIPAdresses";
import TypingChallenge from "../../educationalMode/QuizzComponents/bandWidth";
import HowToConnect from "../../educationalMode/QuizzComponents/howToConnect";

function Quizz({ taskType, setOpenDialog, setOpenOverlayDialog }) {
  switch (taskType) {
    case "sortFileSize":
      return (
        <SortFileSize
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    case "typingChallenge":
      return (
        <TypingChallenge
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    case "howToConnect":
      return (
        <HowToConnect
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    case "IPadress":
      return (
        <IPadress
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    case "sortIPAdresses":
      return (
        <SortIPAdresses
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    case "puzzle":
      return (
        <Puzzle
          setOpenDialog={setOpenDialog}
          setOpenOverlayDialog={setOpenOverlayDialog}
        />
      );
    default:
      return null;
  }
}

export default Quizz;