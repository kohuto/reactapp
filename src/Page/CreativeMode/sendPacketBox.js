import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function SendPacketBox({
  nodes,
  edges,
  setAlertMessage,
  setGameAfterModalClose,
  setOpenModal,
  setPath,
}) {
  const [ipAdressRecipient, setIpAdressRecipient] = useState("");
  const [ipAdressReciver, setIpAdressReciver] = useState("");
  function handleSend() {
    if (ipAdressRecipient.length > 0 && ipAdressReciver.length > 0) {
      if (
        hasNodeClass(nodes, ipAdressRecipient, "client-build") ||
        hasNodeClass(nodes, ipAdressRecipient, "client-plugged")
      ) {
        if (hasNodeClass(nodes, ipAdressRecipient, "client-plugged")) {
          if (hasNodeClass(nodes, ipAdressReciver, "server-build")) {
            if (
              hasPath(
                edges,
                getIpOfWirelessDevice(nodes, ipAdressRecipient),
                ipAdressReciver
              )
            ) {
              setPath(
                findPath(
                  edges,
                  getIpOfWirelessDevice(nodes, ipAdressRecipient),
                  ipAdressReciver
                )
              );
              return;
            } else {
              setAlertMessage(
                "nelze doručit. Mezi odesílatelem a příjemcem není cesta"
              );
            }
          } else {
            setAlertMessage("příjemce musí být server");
          }
        } else {
          setAlertMessage(
            "klient musí být v blízkosti wifi, nebo bts věže. Poznáš to tak, že má nad hlavou wifi ikonu"
          );
        }
      } else {
        console.log(hasNodeClass(nodes, ipAdressRecipient, "client-build"));
        setAlertMessage("odesílatel musí být klient");
      }
    } else {
      setAlertMessage(
        "První vyplň ip adresu odesílatele a příjemce. Ip adresa je číslo pod obrázkem."
      );
    }
    setIpAdressRecipient("");
    setIpAdressReciver("");
    setGameAfterModalClose("noGame");
    setOpenModal(true);
  }

  return (
    <div className="lp-send-packet-container">
      <div className="lp-send-packet-first-column">
        <div>
          <TextField
            id="standard-basic"
            label="IP Adresa odesílatele"
            variant="standard"
            value={ipAdressRecipient}
            onChange={(e) => setIpAdressRecipient(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="IP Adresa příjemce"
            variant="standard"
            value={ipAdressReciver}
            onChange={(e) => setIpAdressReciver(e.target.value)}
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

function hasNodeClass(nodes, nodeId, classname) {
  // find the node with the given ID in the nodes array
  const node = nodes.find((node) => node.id === nodeId);

  // check if the node has the className property set to "client-build"
  if (node && node.className === classname) {
    return true;
  }

  // if the node is not found or doesn't have the className property, return false
  return false;
}

function getIpOfWirelessDevice(nodes, nodeId) {
  // find the node with the given ID in the nodes array
  const node = nodes.find((node) => node.id === nodeId);

  // find the first node that matches the specified criteria
  let result = null;
  if (node && node.className === "client-plugged") {
    const matchingNode = nodes.find((otherNode) => {
      const distance = Math.sqrt(
        Math.pow(node.position.x - otherNode.position.x, 2) +
          Math.pow(node.position.y - otherNode.position.y, 2)
      );
      return (
        (otherNode.className === "bts-build" && distance <= 100) ||
        (otherNode.className === "wifi-build" && distance <= 100)
      );
    });

    // if a matching node was found, return its IP address
    if (matchingNode) {
      result = matchingNode.id;
    }
  }

  return result;
}

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

  // perform a breadth-first search starting from id1
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

function hasPath(edges, startNodeId, endNodeId) {
  // create a set of visited node IDs and a queue of nodes to visit
  const visited = new Set();
  const queue = [startNodeId];

  // loop through the queue until it is empty
  while (queue.length > 0) {
    // get the next node to visit from the queue
    const nodeId = queue.shift();

    // mark the node as visited
    visited.add(nodeId);

    // check if the node is the end node
    if (nodeId === endNodeId) {
      return true;
    }

    // get the edges that connect to the current node
    const edgesFromNode = edges.filter(
      (edge) => edge.source === nodeId || edge.target === nodeId
    );

    // loop through the edges and add the neighboring nodes to the queue
    for (const edge of edgesFromNode) {
      const neighborId = edge.source === nodeId ? edge.target : edge.source;
      if (!visited.has(neighborId)) {
        queue.push(neighborId);
      }
    }
  }

  // if the end node was not found, there is no path
  return false;
}

export default SendPacketBox;
