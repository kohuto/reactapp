import { useState } from "react";
function openModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "block";
}
function IPadress() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    // IPv4 pattern
    const IPv4 =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // IPv6 pattern
    const IPv6 =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;

    if (IPv4.test(inputValue) || IPv6.test(inputValue)) {
      openModal(34);
    } else {
      alert("input is not in format of IP address");
    }
  };

  return (
    <div className="input-box">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Check</button>
    </div>
  );
}

export default IPadress;
