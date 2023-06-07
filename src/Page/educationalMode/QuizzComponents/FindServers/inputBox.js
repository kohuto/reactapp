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
function InputBox({ setFilledCorrectly, setIsIncorrect }) {
  const correctClients = [
    { name: "Kiara (104.169.110.92)", ip: "199.38.67.227" },
    { name: "Annika (60.150.25.71)", ip: "5.10.40.25" },
    { name: "Eustác (99.133.116.181)", ip: "199.38.67.227" },
  ];

  const [clients, setClients] = useState(
    correctClients.map((client) => ({ ...client, value: "" }))
  );

  const handleSubmit = () => {
    const hasIncorrectClient = clients.some(
      (client) => client.value !== client.ip
    );

    if (!hasIncorrectClient) {
      setFilledCorrectly();
    } else {
      setIsIncorrect();
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
