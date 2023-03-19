import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

function SortFileSize() {
  function CheckCorectness() {
    const deviation = 100;
    const count1 = 100;
    const count2 = 100;
    const count3 = 100;
    const count4 = 100;
    if (
      Math.abs(value1 - count1) < deviation &&
      Math.abs(value2 - count2) < deviation &&
      Math.abs(value3 - count3) < deviation &&
      Math.abs(value4 - count4) < deviation
    ) {
      var modal = document.getElementById("modal-window32");
      modal.style.display = "block";
    }
  }
  const [value1, setValue1] = useState(500); // set the initial value of the slider to 500
  const [value2, setValue2] = useState(500); // set the initial value of the slider to 500
  const [value3, setValue3] = useState(500); // set the initial value of the slider to 500
  const [value4, setValue4] = useState(500); // set the initial value of the slider to 500

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
            value={value1}
            handleChange={handleChange1}
          />
          <RangeSlider
            heading="text"
            value={value2}
            handleChange={handleChange2}
          />
          <RangeSlider
            heading="fotka"
            value={value3}
            handleChange={handleChange3}
          />
          <RangeSlider
            heading="obrázek"
            value={value4}
            handleChange={handleChange4}
          />
        </div>

        <div className="second-line">
          <Button variant="outlined" onClick={() => handleOpenFolder()}>
            SOUBORY
          </Button>

          <Button variant="outlined" onClick={() => CheckCorectness()}>
            ZKONTROLUJ
          </Button>
        </div>
      </div>
    </>
  );
}

function RangeSlider({ value, handleChange, heading }) {
  return (
    <div className="sort-file-input">
      <h3>{heading}</h3>
      <input
        type="range"
        min="0"
        max="1000"
        value={value}
        onChange={handleChange}
      />
      <p>{value}</p>
    </div>
  );
}

export default SortFileSize;
