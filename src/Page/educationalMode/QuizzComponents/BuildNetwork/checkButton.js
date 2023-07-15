import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
function CheckButton({ checkValidity }) {
  return (
    <div className="build-network-check-button">
      <Tooltip title="ZKONTROLOVAT" placement="left">
        <Button variant="outlined" onClick={checkValidity}>
          ZKONTROLOVAT
        </Button>
      </Tooltip>
    </div>
  );
}

export default CheckButton;
