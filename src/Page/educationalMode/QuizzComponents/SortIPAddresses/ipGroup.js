import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function IpGroup({ value, handleChange, label }) {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          row
        >
          <FormControlLabel value="IPv6" control={<Radio />} label="IPv6" />
          <FormControlLabel value="IPv4" control={<Radio />} label="IPv4" />
          <FormControlLabel
            value="Neplatná"
            control={<Radio />}
            label="Neplatná"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default IpGroup;
