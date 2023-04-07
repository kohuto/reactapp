import { useState } from "react";
import Button from "@mui/material/Button";
import RangeSlider from "./RangeSlider,";

/**
 * Component that allows the user to sort files by their size
 * @param {Object} props - Component props
 * @param {Function} props.setOpenDialog - Function to set the state of the dialog component
 * @param {Function} props.setOpenOverlayDialog - Function to set the state of the overlay dialog component
 * @returns {JSX.Element} - Rendered component
 */
function SortFileSize({ setOpenDialog, setOpenOverlayDialog }) {
  /**
   * Handles form submission
   */
  const handleSubmit = () => {
    const deviationText = 10;
    const deviationVideo = 500;
    const deviationImg = 10;
    const deviationMusic = 100;
    const videoCount = 61400;
    const textCount = 4;
    const musicCount = 3000;
    const imageCount = 31;

    const finalMessgae =
      "Perfektní! Čím větší zpráva, tím více paketů bude potřeba na její odeslání.";
    const incorrectAnswerMessage = "Něco jsi nespočítal správně";
    if (
      Math.abs(videoValue - videoCount) < deviationVideo &&
      Math.abs(textValue - textCount) < deviationText &&
      Math.abs(musicValue - musicCount) < deviationMusic &&
      Math.abs(imageValue - imageCount) < deviationImg
    ) {
      setOpenDialog(true, finalMessgae, "noGame");
    } else {
      setOpenOverlayDialog(true, incorrectAnswerMessage);
    }
  };

  /**
   * Array of slider objects to map over
   */
  const sliders = [
    { heading: "video", name: "videoValue", max: "70000" },
    { heading: "text", name: "textValue", max: "500" },
    { heading: "hudba", name: "musicValue", max: "10000" },
    { heading: "obrázek", name: "imageValue", max: "500" },
  ];

  const [values, setValues] = useState({
    videoValue: 0,
    textValue: 0,
    musicValue: 0,
    imageValue: 0,
  });

  /**
   * Handles change of slider values
   * @param {Object} event - Event object from slider input
   */
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  /**
   * Opens the Google Drive folder in a new tab
   */
  const handleOpenFolder = () => {
    window.open(
      "https://drive.google.com/drive/folders/1r9sUnjSo26zLOQhS15xEPKM1PN6LxN7K?usp=share_link",
      "_blank"
    );
  };

  const { videoValue, textValue, musicValue, imageValue } = values;

  return (
    <>
      <div className="container-sort">
        <div className="first-line">
          {sliders.map((slider) => (
            <RangeSlider
              key={slider.name}
              heading={slider.heading}
              name={slider.name}
              value={values[slider.name]}
              handleChange={handleChange}
              max={slider.max}
            />
          ))}
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

export default SortFileSize;
