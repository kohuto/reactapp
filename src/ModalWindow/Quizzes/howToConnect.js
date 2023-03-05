import React, { useState } from "react";
import CheckboxGroup from "./multipleCheckbox";
import { motion } from "framer-motion";
function openModal(i) {
  var modal = document.getElementById("modal-window32");
  modal.style.display = "block";
}
function CheckBoxes() {
  function isCheckboxChecked() {
    if (
      checkboxes1.checkbox1 &&
      !checkboxes1.checkbox2 &&
      checkboxes1.checkbox3 &&
      !checkboxes2.checkbox1 &&
      !checkboxes2.checkbox2 &&
      checkboxes2.checkbox3 &&
      checkboxes3.checkbox1 &&
      checkboxes3.checkbox2 &&
      !checkboxes4.checkbox3
    )
      openModal(4);
  }
  const [checkboxes1, setCheckboxes1] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [checkboxes2, setCheckboxes2] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [checkboxes3, setCheckboxes3] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [checkboxes4, setCheckboxes4] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange1 = (event) => {
    const { name } = event.target;
    setCheckboxes1({
      ...checkboxes1,
      [name]: !checkboxes1[name],
    });
  };

  const handleCheckboxChange2 = (event) => {
    const { name } = event.target;
    setCheckboxes2({
      ...checkboxes2,
      [name]: !checkboxes2[name],
    });
  };

  const handleCheckboxChange3 = (event) => {
    const { name } = event.target;
    setCheckboxes3({
      ...checkboxes3,
      [name]: !checkboxes3[name],
    });
  };
  const handleCheckboxChange4 = (event) => {
    const { name } = event.target;
    setCheckboxes4({
      ...checkboxes4,
      [name]: !checkboxes4[name],
    });
  };

  return (
    <div className="how-to-connect-container">
      <div className="how-to-connect-column">
        <h5>mobil doma</h5>
        <CheckboxGroup
          checkboxes={checkboxes1}
          handleCheckboxChange={handleCheckboxChange1}
        />
      </div>
      <div className="how-to-connect-column">
        <h5> mobil v lese</h5>
        <CheckboxGroup
          checkboxes={checkboxes2}
          handleCheckboxChange={handleCheckboxChange2}
        />
      </div>
      <div className="how-to-connect-column">
        <h5> počítač ve škole</h5>
        <CheckboxGroup
          checkboxes={checkboxes3}
          handleCheckboxChange={handleCheckboxChange3}
        />
      </div>
      <div className="how-to-connect-column">
        <h5>notebook doma</h5>
        <CheckboxGroup
          checkboxes={checkboxes4}
          handleCheckboxChange={handleCheckboxChange4}
        />
      </div>
      <div className="start-quizz-button" onClick={isCheckboxChecked}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          ZKONTROLOVAT
        </motion.div>
      </div>
    </div>
  );
}

export default CheckBoxes;
