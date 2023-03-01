import React, { useState } from "react";
import "./Sidebar.css";
import klient from "../images/nodes/klient.jpg";
import server from "../images/nodes/server.jpg";
import gateway from "../images/nodes/gateway.jpg";
function InteractiveSidebar({
  setIsLandingPage,
  nodes,
  setNodes,
  onNodesChange,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  function handleClick() {
    switch (hoveredItem) {
      case 1:
        handleAddNode("client");
        break;
      case 2:
        handleAddNode("gateway");
        break;
      case 3:
        handleAddNode("server");
        break;
      case 4:
        setIsLandingPage();
        break;
    }
  }
  const handleHover = (item) => {
    setHoveredItem(item);
  };
  const handleAddNode = (device) => {
    let newNode = {};
    switch (device) {
      case "server":
        newNode = {
          id: `${"2001:718:1e05:604::512" + nodes.length + 1}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "server-build",
          data: { label: `${"2001:718:1e05:604::5122" + nodes.length}` },
        };
        break;
      case "gateway":
        newNode = {
          id: `${"2000:718:1e05:604::5" + nodes.length}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "gateway-build",
          data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
        };
        break;
      case "client":
        newNode = {
          id: `${"2000:718:1e05:604::5" + nodes.length}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "client-build",
          data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
        };
        break;
      case "bts":
        newNode = {
          id: `${"2000:718:1e05:604::5" + nodes.length}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "bts-build",
          data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
        };
        break;
      case "wifi":
        newNode = {
          id: `${"2000:718:1e05:604::5" + nodes.length}`,
          type: "default",
          position: { x: 300, y: 300 },
          className: "wifi-build",
          data: { label: `${"2000:718:1e05:604::5" + nodes.length}` },
        };
        break;
    }
    setNodes([...nodes, newNode]);
  };
  const menuItems = [
    {
      id: 1,
      text: "klient",
      icon: klient,
    },
    {
      id: 2,
      text: "gateway",
      icon: gateway,
    },
    {
      id: 3,
      text: "server",
      icon: server,
    },
    {
      id: 4,
      text: "quizz",
      icon: "icon4.png",
    },
  ];

  return (
    <div className="container">
      <div className="navigation-menu-interactive">
        <div className="menu-items-interactive">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item-interactive ${
                hoveredItem === item.id ? "active-interactive" : ""
              }`}
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={() => handleHover(null)}
              onClick={handleClick}
            >
              <div className="menu-item-icon-interactive">
                <img src={item.icon} alt={item.text} />
                {hoveredItem === item.id && (
                  <div className="menu-item-text-interactive">{item.text}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteractiveSidebar;
