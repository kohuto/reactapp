import { useState } from "react";
import Button from "@mui/material/Button";
import BasicModal from "../../../DialogWindow/basicModal";
import AlertDialog from "../../../DialogWindow/Templates/dialogWindow";
import NextLevelModal from "../../../DialogWindow/Templates/nextLevelModal";
import TextField from "@mui/material/TextField";
import files from "../../../../images/sortFileSize.png";
import "./style.css";

const FINAL_MESSAGE =
  "Perfektní! Čím větší zpráva, tím více paketů bude potřeba na její odeslání.";
const ERROR_MESSAGE = "Něco jsi nespočítal správně";
function SortFileSize({ info, setGame }) {
  /**
   * Handles form submission
   */
  const [isFilledCorrectly, setIsFilledCorrectly] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleSubmit = () => {
    const deviationText = 50;
    const deviationVideo = 50;
    const deviationImg = 50;
    const deviationMusic = 50;
    const videoCount = 61400;
    const textCount = 4;
    const musicCount = 3000;
    const imageCount = 31;

    // deviation for each value is allowed
    if (
      Math.abs(video - videoCount) < deviationVideo &&
      Math.abs(text - textCount) < deviationText &&
      Math.abs(music - musicCount) < deviationMusic &&
      Math.abs(image - imageCount) < deviationImg
    ) {
      setIsFilledCorrectly(true);
    } else {
      setIsIncorrect(true);
    }
  };

  const [video, setVideo] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [music, setMusic] = useState("");
  return (
    <>
      <BasicModal content={info.content} />
      {isFilledCorrectly && (
        <NextLevelModal
          content={FINAL_MESSAGE}
          setGame={setGame}
          game={info.type}
        />
      )}
      {isIncorrect && (
        <AlertDialog
          content={ERROR_MESSAGE}
          closeAction={() => setIsIncorrect(false)}
        />
      )}
      <div className="sort-file-size-img-container">
        <img src={files} className="sort-file-size-files-image" />
      </div>
      <div className="container-sort">
        <div className="first-line">
          <TextField
            id="standard-basic"
            label="video.mp4"
            variant="standard"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="text.txt"
            variant="standard"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="obrázek.jpeg"
            variant="standard"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="hudba.mp3"
            variant="standard"
            value={music}
            onChange={(e) => setMusic(e.target.value)}
          />
        </div>
        <div className="second-line">
          <Button variant="outlined" onClick={handleSubmit}>
            ZKONTROLUJ
          </Button>
        </div>
      </div>
    </>
  );
}

export default SortFileSize;
