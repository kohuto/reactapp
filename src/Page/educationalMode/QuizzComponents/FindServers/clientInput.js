import TextField from "@mui/material/TextField";
import "./style.css";

/**
 * Component that renders a text input for a client IP address.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the input.
 * @param {string} props.value - The value of the input.
 * @param {Function} props.onChange - A function to handle the input change event.
 * @returns {JSX.Element} The component JSX element.
 */
function ClientInput(props) {
  return (
    <>
      <TextField
        id={`standard-basic-${props.label}`}
        label={props.label}
        variant="standard"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <br />
    </>
  );
}

export default ClientInput;
