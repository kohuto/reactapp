import TextField from "@mui/material/TextField";

function InsidePacket(props) {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Odesílatel"
        variant="standard"
        value={props.senderIP[props.number]}
        onChange={(e) =>
          props.setSenderIP((prevSenderIP) => {
            const newSenderIP = [...prevSenderIP];
            newSenderIP[props.number] = e.target.value;
            return newSenderIP;
          })
        }
      />
      <br />
      <TextField
        id="standard-basic"
        label="Příjemce"
        variant="standard"
        value={props.recipientIP[props.number]}
        onChange={(e) =>
          props.setRecipientIP((prevRecipientIP) => {
            const newRecipientIP = [...prevRecipientIP];
            newRecipientIP[props.number] = e.target.value;
            return newRecipientIP;
          })
        }
      />
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
