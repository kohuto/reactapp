import React, { useState } from "react";

function CheckBoxes({ handleCheckboxChange, checkboxes }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        WiFi
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        Kabel
      </label>
      <br />
      <label>
        <input
          type="checkbox"
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
