
import "./style.css";

import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

function ClientInput(props) {
  return (
    <>
      <FormControl variant="standard" style={{ width: '90%' }}>
        <InputLabel id="sender-select-label">{props.label}</InputLabel>
        <Select
          labelId="sender-select-label"
          id={`standard-basic-${props.label}`}
          label={props.label}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          <MenuItem value={"5.10.40.25"}>5.10.40.25</MenuItem>
          <MenuItem value={"50.251.205.152"}>50.251.205.152</MenuItem>
          <MenuItem value={"199.38.67.227"}>199.38.67.227</MenuItem>
        </Select>
      </FormControl>
      <br />
    </>
  );
}

export default ClientInput;
