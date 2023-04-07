import TextField from "@mui/material/TextField";

/**
 * Represents the component that displays a form to fill in the details of a packet.
 * @param {Object} props - The props that are passed to this component.
 * @param {Array} props.id - The array of packet IDs.
 * @param {function} props.setId - The function to update the packet IDs.
 * @param {Array} props.order - The array of packet order.
 * @param {function} props.setOrder - The function to update the packet order.
 * @param {Array} props.senderIP - The array of packet sender IP addresses.
 * @param {function} props.setSenderIP - The function to update the packet sender IP addresses.
 * @param {Array} props.recipientIP - The array of packet recipient IP addresses.
 * @param {function} props.setRecipientIP - The function to update the packet recipient IP addresses.
 * @param {Array} props.content - The array of packet content.
 * @param {function} props.setContent - The function to update the packet content.
 * @param {number} props.number - The index number of the packet.
 */
function InsidePacket(props) {
  return (
    <>
      <TextField
        id="standard-basic"
        label="ID paketu"
        variant="standard"
        value={props.id[props.number]}
        onChange={(e) =>
          props.setId((prevId) => {
            const newId = [...prevId];
            newId[props.number] = e.target.value;
            return newId;
          })
        }
      />
      <br />
      <TextField
        id="standard-basic"
        label="Pořadí"
        variant="standard"
        value={props.order[props.number]}
        onChange={(e) =>
          props.setOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            newOrder[props.number] = e.target.value;
            return newOrder;
          })
        }
      />
      <br />
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
