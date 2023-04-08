import SortFileSize from "../../educationalMode/QuizzComponents/HowManyPackets/sortFileSize";
import Puzzle from "../../educationalMode/QuizzComponents/Puzzle/puzzle";
import IPadress from "../../educationalMode/QuizzComponents/MyIP/IPadress";
import SortIPAdresses from "../../educationalMode/QuizzComponents/SortIPAddresses/sortIPAdresses";
import HowToConnect from "../../educationalMode/QuizzComponents/HowToConnect/howToConnect";
import BandWidthComponent from "../../educationalMode/QuizzComponents/BandWidth/bandWidth";

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
        <BandWidthComponent
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
