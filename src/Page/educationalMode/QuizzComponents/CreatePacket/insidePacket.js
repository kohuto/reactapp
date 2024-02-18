
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

function InsidePacket(props) {
  return (
    <>
      <FormControl variant="standard" style={{ width: '35%' }}>
        <InputLabel id="sender-select-label">Odesílatel</InputLabel>
        <Select
          labelId="sender-select-label"
          id="standard-basic"
          label="Odesílatel"
          value={props.senderIP[props.number]}
          onChange={(e) =>
            props.setSenderIP((prevSenderIP) => {
              const newSenderIP = [...prevSenderIP];
              newSenderIP[props.number] = e.target.value;
              return newSenderIP;
            })
          }
        >
          <MenuItem value={"214.17.55.99"}>214.17.55.99</MenuItem>
          <MenuItem value={"192.168.0.1"}>192.168.0.1</MenuItem>
          <MenuItem value={"10.0.0.1"}>10.0.0.1</MenuItem>
          <MenuItem value={"195.113.76.22"}>195.113.76.22</MenuItem>
          <MenuItem value={"15.103.46.12"}>15.103.46.12</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl variant="standard" style={{ width: '35%' }}>
        <InputLabel id="recipient-select-label">Příjemce</InputLabel>
        <Select
          labelId="recipient-select-label"
          id="standard-basic"
          label="Příjemce"
          value={props.recipientIP[props.number]}
          onChange={(e) =>
            props.setRecipientIP((prevRecipientIP) => {
              const newRecipientIP = [...prevRecipientIP];
              newRecipientIP[props.number] = e.target.value;
              return newRecipientIP;
            })
          }
        >
          {/* Možnosti jsou stejné jako u odesílatele */}
          <MenuItem value={"214.17.55.99"}>214.17.55.99</MenuItem>
          <MenuItem value={"192.168.0.1"}>192.168.0.1</MenuItem>
          <MenuItem value={"10.0.0.1"}>10.0.0.1</MenuItem>
          <MenuItem value={"195.113.76.22"}>195.113.76.22</MenuItem>
          <MenuItem value={"15.103.46.12"}>15.103.46.12</MenuItem>
        </Select>
      </FormControl>

      <br />
      <TextField
        id="standard-basic"
        label="Obsah paketu"
        variant="standard"
        value={props.content[props.content]}
        onChange={(e) =>
          props.setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[props.number] = e.target.value;
            return newContent;
          })
        }
      />
    </>
  );
}

export default InsidePacket;
