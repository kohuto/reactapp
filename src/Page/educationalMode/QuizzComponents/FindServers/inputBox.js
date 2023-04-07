import { useState } from "react";
import Button from "@mui/material/Button";
import ClientInput from "./clientInput";
import "./style.css";

/**
 * Component that renders a form to find packets by client IP addresses.
 * @param {Object} props - The component props.
 * @param {Function} props.setOpenDialog - A function to open a dialog window.
 * @returns {JSX.Element} The component JSX element.
 */
function InputBox(props) {
  const correctClients = [
    { name: "Kiara", ip: "195.113.76.22" },
    { name: "Annika", ip: "195.113.89.35" },
    { name: "Eustác", ip: "192.168.1.1" },
  ];

  const finalMessage =
    "Perfektní! Nezpomeň, že v každém paketu najdeš informaci o tom, kdo paket poslal a komu má být paket doručen.";
  const incorrectServerMessage = "nějaký server je špatně";
  const [clients, setClients] = useState(
    correctClients.map((client) => ({ ...client, value: "" }))
  );

  const handleSubmit = () => {
    const hasIncorrectClient = clients.some(
      (client) => client.value !== client.ip
    );

    if (!hasIncorrectClient) {
      props.setOpenDialog(true, finalMessage, "noGame");
    } else {
      props.setOpenDialog(true, incorrectServerMessage);
    }
  };

  const handleClientChange = (name, value) => {
    const newClients = clients.map((client) =>
      client.name === name ? { ...client, value } : client
    );
    setClients(newClients);
  };

  return (
    <>
      <div className="find-server-container">
        {clients.map((client) => (
          <ClientInput
            key={client.name}
            label={client.name}
            value={client.value}
            onChange={(value) => handleClientChange(client.name, value)}
          />
        ))}
        <Button variant="outlined" onClick={handleSubmit}>
          ZKONTROLUJ
        </Button>
      </div>
    </>
  );
}

export default InputBox;
