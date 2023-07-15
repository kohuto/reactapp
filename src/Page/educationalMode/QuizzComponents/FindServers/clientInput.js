import TextField from "@mui/material/TextField";
import "./style.css";

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
