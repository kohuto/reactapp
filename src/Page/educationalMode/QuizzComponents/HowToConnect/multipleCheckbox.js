import Checkbox from "@mui/material/Checkbox";

function CheckBoxes({ handleCheckboxChange, checkboxes }) {
  // checkboxes labels
  const checkboxLabels = ["WiFi", "Kabel", "Data"];

  return (
    <div>
      {checkboxLabels.map((label, index) => (
        <div key={index}>
          <label>
            <Checkbox
              name={`checkbox${index + 1}`}
              checked={checkboxes[`checkbox${index + 1}`]}
              onChange={handleCheckboxChange}
            />
            {label}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
}

export default CheckBoxes;
