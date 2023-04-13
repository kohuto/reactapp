import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectVariants({ ipList, handleChange, value, label }) {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "12vw" }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          label={label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ipList.map((ip) => (
            <MenuItem key={ip} value={ip}>
              {ip}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
