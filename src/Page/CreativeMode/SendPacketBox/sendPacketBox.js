import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import SelectVariants from "./selectVariants";

const CLIENT_PLUGGED_CLASSNAME = "client-plugged-creative";
const SERVER_CLASSNAME = "server-creative";
const BTS_CLASSNAME = "bts-creative";
const WIFI_CLASSNAME = "wifi-creative";

function SendPacketBox({ nodes, edges, setPath, setErrorMessage, setIsError }) {
  const [recipientIpAddress, setRecipientIpAddress] = useState("");
  const [senderIpAddress, setSenderIpAddress] = useState("");
  const invalidSenderRecipientMessage =
    "Odesílatel musí být klient a příjemce musí být server.";
  const unplugedClientMessage =
    "Klient musí být v dosahu wifi nebo bts věže. V tu chvíli má nad hlavou ikonu WiFi";
  const noPathMessage =
    "Nelze doručit. Mezi odesílatelem a příjemcem není cesta.";

  function handleSend() {
    if (!isInputsFilled(senderIpAddress, recipientIpAddress)) {
      setErrorMessage(invalidSenderRecipientMessage);
      setIsError(true);
      return;
    }

    if (!isClientPlugged(nodes, senderIpAddress)) {
      setErrorMessage(unplugedClientMessage);
      setIsError(true);
      return;
    }

    const path = findPath(
      edges,
      getWirelessDeviceIpAddress(nodes, senderIpAddress),
      recipientIpAddress
    );
    if (path === null) {
      setErrorMessage(noPathMessage);
      setIsError(true);
    } else setPath(path);
  }

  function isInputsFilled(senderIpAddress, recipientIpAddress) {
    return senderIpAddress.length > 0 && recipientIpAddress.length > 0;
  }

  function isClientPlugged(nodes, clientIpAddress) {
    const clientNode = nodes.find((node) => node.id === clientIpAddress);
    if (clientNode && clientNode.className.includes(CLIENT_PLUGGED_CLASSNAME)) {
      return true;
    } else {
      return false;
    }
  }

  // get all connected client nodes
  function getWirelessDeviceIpAddress(nodes, clientIpAddress) {
    const clientNode = nodes.find((node) => node.id === clientIpAddress);
    if (clientNode && clientNode.className.includes(CLIENT_PLUGGED_CLASSNAME)) {
      const nearbyNodes = nodes.filter((node) => {
        const distance = Math.sqrt(
          Math.pow(clientNode.position.x - node.position.x, 2) +
            Math.pow(clientNode.position.y - node.position.y, 2)
        );
        return (
          (node.className.includes(BTS_CLASSNAME) ||
            node.className.includes(WIFI_CLASSNAME)) &&
          distance <= 100
        );
      });
      if (nearbyNodes.length > 0) {
        return nearbyNodes[0].id;
      } else {
        return null;
      }
    } else {
      return clientIpAddress;
    }
  }

  // get shortest path of nodes from client to server
  function findPath(edges, id1, id2) {
    // create a map of nodes to their neighbors
    const neighbors = new Map();
    edges.forEach((edge) => {
      if (!neighbors.has(edge.source)) {
        neighbors.set(edge.source, []);
      }
      if (!neighbors.has(edge.target)) {
        neighbors.set(edge.target, []);
      }
      neighbors.get(edge.source).push(edge.target);
      neighbors.get(edge.target).push(edge.source);
    });

    const queue = [{ id: id1, path: [id1] }];
    const visited = new Set([id1]);
    while (queue.length > 0) {
      const { id, path } = queue.shift();
      if (id === id2) {
        return path; // found the target node, return the path
      }
      for (const neighbor of neighbors.get(id) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({ id: neighbor, path: [...path, neighbor] });
        }
      }
    }

    return null; // id2 is not reachable from id1
  }

  // get ip address of nodes of specific type
  function GetNodesTypeIpList(nodes, type) {
    const nodesType = nodes.filter(
      (node) => node.className && node.className.includes(type)
    );
    const nodesTypeIds = nodesType.map((node) => node.id);
    return nodesTypeIds;
  }

  return (
    <div className="lp-send-packet-container">
      <div className="lp-send-packet-first-column">
        <div>
          <SelectVariants
            ipList={GetNodesTypeIpList(nodes, CLIENT_PLUGGED_CLASSNAME)}
            handleChange={setSenderIpAddress}
            value={senderIpAddress}
            label="IP Adresa odesílatele"
          />
        </div>
        <div>
          <SelectVariants
            ipList={GetNodesTypeIpList(nodes, SERVER_CLASSNAME)}
            handleChange={setRecipientIpAddress}
            value={recipientIpAddress}
            label="IP Adresa příjemce"
          />
        </div>
      </div>
      <div className="lp-send-packet-second-column">
        <Tooltip title="POŠLI PAKET" placement="top">
          <IconButton onClick={() => handleSend()}>
            <SendIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default SendPacketBox;
