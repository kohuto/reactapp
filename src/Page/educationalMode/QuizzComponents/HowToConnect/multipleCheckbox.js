import Checkbox from "@mui/material/Checkbox";

/**
 * A component that renders a group of checkboxes with labels.
 * @param {Object} props - The component props.
 * @param {Function} props.handleCheckboxChange - A callback function to handle checkbox state changes.
 * @param {Object} props.checkboxes - An object representing the state of the checkboxes.
 * @returns {JSX.Element} - The rendered component.
 */
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
