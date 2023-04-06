import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
function CheckBoxes({ handleCheckboxChange, checkboxes }) {
  return (
    <div>
      <label>
        <Checkbox
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        WiFi
      </label>
      <br />
      <label>
        <Checkbox
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        Kabel
      </label>
      <br />
      <label>
        <Checkbox
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        Data
      </label>
    </div>
  );
}

export default CheckBoxes;
