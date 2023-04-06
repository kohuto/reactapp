import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const CLIENT_CLASSNAME = "client-build";
const CLIENT_PLUGGED_CLASSNAME = "client-plugged";
const SERVER_CLASSNAME = "server-build";
const BTS_CLASSNAME = "bts-build";
const WIFI_CLASSNAME = "wifi-build";

/**
 * Component for sending packets between nodes in a network simulation.
 * @param {Object[]} nodes - The list of nodes in the network.
 * @param {Object[]} edges - The list of edges connecting the nodes in the network.
 * @param {function} setOpenModal - A function for opening/closing a modal.
 * @param {function} setPath - A function for setting the path between the sender and recipient nodes.
 */
function SendPacketBox({ nodes, edges, setOpenModal, setPath }) {
  const [recipientIpAddress, setRecipientIpAddress] = useState("");
  const [senderIpAddress, setSenderIpAddress] = useState("");
  const invalidIPMessage = "Zadejte platnou IP adresu odesílatele a příjemce.";
  const invalidSenderRecipientMessage =
    "Odesílatel musí být klient a příjemce musí být server.";
  const unplugedClientMessage =
    "Klient musí být připojený k wifi nebo bts věži.";
  const noPathMessage =
    "Nelze doručit. Mezi odesílatelem a příjemcem není cesta.";

  /**
   * Handles sending a packet between nodes in the network.
   */
  function handleSend() {
    if (
      isValidIpAddress(senderIpAddress) &&
      isValidIpAddress(recipientIpAddress)
    ) {
      if (
        isSenderValid(nodes, senderIpAddress) &&
        isRecipientValid(nodes, recipientIpAddress)
      ) {
        if (isClientPlugged(nodes, senderIpAddress)) {
          if (
            hasPath(
              edges,
              getWirelessDeviceIpAddress(nodes, senderIpAddress),
              recipientIpAddress
            )
          ) {
            setPath(
              findPath(
                edges,
                getWirelessDeviceIpAddress(nodes, senderIpAddress),
                recipientIpAddress
              )
            );
            return;
          } else {
            setOpenModal(true, noPathMessage);
          }
        } else {
          setOpenModal(true, unplugedClientMessage);
        }
      } else {
        setOpenModal(true, invalidSenderRecipientMessage);
      }
    } else {
      setOpenModal(true, invalidIPMessage);
    }
    setSenderIpAddress("");
    setRecipientIpAddress("");
  }

  /**
   * Validates an IP address.
   * @param {string} ipAddress - The IP address to validate.
   * @returns {boolean} True if the IP address is valid, false otherwise.
   * @public
   */
  function isValidIpAddress(ipAddress) {
    const ipAddressRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if (!ipAddressRegex.test(ipAddress)) {
      return false;
    }
    const octets = ipAddress.split(".");
    for (let i = 0; i < octets.length; i++) {
      const octet = parseInt(octets[i]);
      if (isNaN(octet) || octet < 0 || octet > 255) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if the sender IP address is valid and corresponds to a client node.
   * @param {Array} nodes - Array of node objects.
   * @param {string} senderIpAddress - The IP address of the sender.
   * @returns {boolean} - True if the sender IP address is valid, false otherwise.
   */
  function isSenderValid(nodes, senderIpAddress) {
    const senderNode = nodes.find((node) => node.id === senderIpAddress);
    return (
      senderNode &&
      (senderNode.className === CLIENT_CLASSNAME ||
        senderNode.className === CLIENT_PLUGGED_CLASSNAME)
    );
  }

  /**
   * Checks if the recipient IP address is valid and corresponds to a server node.
   * @param {Array} nodes - Array of node objects.
   * @param {string} recipientIpAddress - The IP address of the recipient.
   * @returns {boolean} - True if the recipient IP address is valid, false otherwise.
   */
  function isRecipientValid(nodes, recipientIpAddress) {
    const recipientNode = nodes.find((node) => node.id === recipientIpAddress);
    return recipientNode && recipientNode.className === SERVER_CLASSNAME;
  }

  /**
   * Checks if the client IP address corresponds to a node that is plugged into the network.
   * @param {Array} nodes - Array of node objects.
   * @param {string} clientIpAddress - The IP address of the client.
   * @returns {boolean} - True if the client is plugged in, false otherwise.
   */
  function isClientPlugged(nodes, clientIpAddress) {
    const clientNode = nodes.find((node) => node.id === clientIpAddress);
    if (clientNode && clientNode.className === CLIENT_PLUGGED_CLASSNAME) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Gets the IP address of a wireless device that is within range of the client node.
   * @param {Array} nodes - Array of node objects.
   * @param {string} clientIpAddress - The IP address of the client.
   * @returns {string|null} - The IP address of the wireless device if one is within range, null otherwise.
   */
  function getWirelessDeviceIpAddress(nodes, clientIpAddress) {
    const clientNode = nodes.find((node) => node.id === clientIpAddress);
    if (clientNode && clientNode.className === CLIENT_PLUGGED_CLASSNAME) {
      const nearbyNodes = nodes.filter((node) => {
        const distance = Math.sqrt(
          Math.pow(clientNode.position.x - node.position.x, 2) +
            Math.pow(clientNode.position.y - node.position.y, 2)
        );
        return (
          (node.className === BTS_CLASSNAME ||
            node.className === WIFI_CLASSNAME) &&
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

  /**
   * Finds a path between two nodes in the network using breadth-first search.
   * @param {Array} edges - Array of edge objects.
   * @param {string} id1 - The ID of the starting node.
   * @param {string} id2 - The ID of the target node.
   * @returns {Array|null} - An array of node IDs representing the path from id1 to id2, or null if no path exists.
   */
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

  /**
   * Checks if there is a path between two nodes in the network using breadth-first search.
   * @param {Array} edges - Array of edge objects.
   * @param {string} startNodeId - The ID of the starting node.
   * @param {string} endNodeId - The ID of the target node.
   * @returns {boolean} - True if there is a path between the nodes, false otherwise.
   */
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

  /**
   * Renders a component for sending a packet in the network simulation.
   * @returns {JSX.Element} - A React component.
   */
  return (
    <div className="lp-send-packet-container">
      <div className="lp-send-packet-first-column">
        <div>
          <TextField
            id="sender-ip-address"
            label="IP Adresa odesílatele"
            variant="standard"
            value={senderIpAddress}
            onChange={(e) => setSenderIpAddress(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="recipient-ip-address"
            label="IP Adresa příjemce"
            variant="standard"
            value={recipientIpAddress}
            onChange={(e) => setRecipientIpAddress(e.target.value)}
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
