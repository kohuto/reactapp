import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

function SortFileSize({ setOpenEndGame, setOpenInform, setAlertMessage }) {
  const handleSubmit = () => {
    const deviationText = 10;
    const deviationVideo = 500;
    const deviationImg = 10;
    const deviationMusic = 100;
    const videoCount = 61400;
    const textCount = 4;
    const musicCount = 3000;
    const imageCount = 31;
    if (
      Math.abs(videoValue - videoCount) < deviationVideo &&
      Math.abs(textValue - textCount) < deviationText &&
      Math.abs(musicValue - musicCount) < deviationMusic &&
      Math.abs(imageValue - imageCount) < deviationImg
    ) {
      setAlertMessage("správně spočítáno");
      setOpenEndGame(true);
    } else {
      setAlertMessage("něco jsi nespočítal správně");
      setOpenInform(true);
    }
  };
  const [videoValue, setValue1] = useState(0); // set the initial value of the slider to 500
  const [textValue, setValue2] = useState(0); // set the initial value of the slider to 500
  const [musicValue, setValue3] = useState(0); // set the initial value of the slider to 500
  const [imageValue, setValue4] = useState(0); // set the initial value of the slider to 500

  function handleChange1(event) {
    setValue1(event.target.value);
  }
  function handleChange2(event) {
    setValue2(event.target.value);
  }
  function handleChange3(event) {
    setValue3(event.target.value);
  }
  function handleChange4(event) {
    setValue4(event.target.value);
  }

  const handleOpenFolder = () => {
    window.open(
      "https://drive.google.com/drive/folders/1r9sUnjSo26zLOQhS15xEPKM1PN6LxN7K?usp=share_link",
      "_blank"
    );
  };

  return (
    <>
      <div className="container-sort">
        <div className="first-line">
          <RangeSlider
            heading="video"
            value={videoValue}
            handleChange={handleChange1}
            max="70000"
          />
          <RangeSlider
            heading="text"
            value={textValue}
            handleChange={handleChange2}
            max="500"
          />
          <RangeSlider
            heading="hudba"
            value={musicValue}
            handleChange={handleChange3}
            max="10000"
          />
          <RangeSlider
            heading="obrázek"
            value={imageValue}
            handleChange={handleChange4}
            max="500"
          />
        </div>

        <div className="second-line">
          <Button variant="outlined" onClick={() => handleOpenFolder()}>
            SOUBORY
          </Button>

          <Button variant="outlined" onClick={handleSubmit}>
            ZKONTROLUJ
          </Button>
        </div>
      </div>
    </>
  );
}

function RangeSlider({ value, handleChange, heading, max }) {
  return (
    <div className="sort-file-input">
      <h3>{heading}</h3>
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>{value}</p>
    </div>
  );
}

export default SortFileSize;
