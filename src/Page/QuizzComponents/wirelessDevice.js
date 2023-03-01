function selectWifiElements() {
  const wifiElements = document.querySelectorAll(".wifi");
  const clientElements = document.querySelectorAll(".client");
  const allConected = true;
  // convert clientElements NodeList to an array
  const clients = Array.from(clientElements);

  // loop through each wifi element
  // potrebujes spocitat nejmensi vzdalenost k wifi  (vzdalenost k nejblizsimu routeru)
  wifiElements.forEach((wifi) => {
    // loop through each client element
    clients.forEach((client) => {
      const rect1 = wifi.getBoundingClientRect();
      const rect2 = client.getBoundingClientRect();
      const distance = Math.sqrt(
        (rect1.x - rect2.x) ** 2 + (rect1.y - rect2.y) ** 2
      );

      if (distance > 100) {
        allConected = false;
        console.log(`Client ${client.id} is within 50px of wifi element`);
      }
    });
  });

  return allConected;
}

function WhatIsWiFiComponent({ game, nodes, setNodes }) {
  const handleAddNode = (device) => {
    let newNode = {};

    switch (device) {
      case "wifi":
        newNode = {
          id: `${"2001:718:1e05:604::512" + nodes.length + 1}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "wifi",
          data: { label: `${"2001:718:1e05:604::5122" + nodes.length}` },
        };

        break;
      case "bts":
        newNode = {
          id: `${"2000:718:1e05:604::5" + nodes.length}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "bts",
          data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
        };
    }
    setNodes([...nodes, newNode]);

    //selectWifiElements();
  };

  return (
    <>
      <button
        onClick={() => handleAddNode("wifi")}
        style={{
          position: "absolute",
          top: "90vh",
          right: "5vw",
          zIndex: "25",
          width: "50px",
        }}
      >
        Add WiFI
      </button>
    </>
  );
}

export default WhatIsWiFiComponent;
