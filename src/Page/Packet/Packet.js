import "./PacketStyle.css";
import { motion } from "framer-motion";
import React from "react";
import { serversZoom2Data } from "../../Data/Flow/server/serverZoom2";
import { clientsZoom2Data } from "../../Data/Flow/client/clientsZoom2";
import { gatewaysZoom2Data } from "../../Data/Flow/gateway/gatewayZoom2";
import { problemWithPathGateway } from "../../Data/Flow/gateway/problemWithPathGateway";
import { whatIsCabelClient } from "../../Data/Flow/client/whatIsCabelClient";
import { whatIsCabelGateway } from "../../Data/Flow/gateway/whatIsCabelGateway";
import { whatIsCabelServer } from "../../Data/Flow/server/whatIsCabelServer";
import { whatIsSatelitNodes } from "../../Data/Flow/whatIsSatelit";
import { whatIsBTSNodes } from "../../Data/Flow/whatIsBTS";
import { whatIsWifiNodes } from "../../Data/Flow/whatIsWifi";
import { landingPageNodes } from "../../Data/Flow/creativeMode";
import { findServerNodes } from "../../Data/Flow/findServers";

// Function to get the coordinates of a specific node
function getCoordinates(id, nodes) {
  const nodeInNodes = nodes.find((s) => s.id === id);
  if (nodeInNodes) {
    return { x: nodeInNodes.position.x, y: nodeInNodes.position.y };
  }

  const nodeInFindServers = findServerNodes.find((s) => s.id === id);
  if (nodeInFindServers) {
    return { x: nodeInFindServers.position.x, y: nodeInFindServers.position.y };
  }

  const nodesLandingPage = landingPageNodes.find((s) => s.id === id);
  if (nodesLandingPage) {
    return { x: nodesLandingPage.position.x, y: nodesLandingPage.position.y };
  }
  const server = serversZoom2Data.find((s) => s.id === id);
  if (server) {
    return { x: server.position.x, y: server.position.y };
  }

  const client = clientsZoom2Data.find((c) => c.id === id);
  if (client) {
    return { x: client.position.x, y: client.position.y };
  }

  const gateway = gatewaysZoom2Data.find((g) => g.id === id);
  if (gateway) {
    return { x: gateway.position.x, y: gateway.position.y };
  }

  const bts = whatIsBTSNodes.find((g) => g.id === id);
  if (bts) {
    return { x: bts.position.x, y: bts.position.y };
  }
  const wifi = whatIsWifiNodes.find((g) => g.id === id);
  if (wifi) {
    return { x: wifi.position.x, y: wifi.position.y };
  }
  const satelit = whatIsSatelitNodes.find((g) => g.id === id);
  if (satelit) {
    return { x: satelit.position.x, y: satelit.position.y };
  }
  const clientWhatIsC = whatIsCabelClient.find((g) => g.id === id);
  if (clientWhatIsC) {
    return { x: clientWhatIsC.position.x, y: clientWhatIsC.position.y };
  }
  const gatewayWhatIsG = whatIsCabelGateway.find((g) => g.id === id);
  if (gatewayWhatIsG) {
    return { x: gatewayWhatIsG.position.x, y: gatewayWhatIsG.position.y };
  }
  const serverWhatIsS = whatIsCabelServer.find((g) => g.id === id);
  if (serverWhatIsS) {
    return { x: serverWhatIsS.position.x, y: serverWhatIsS.position.y };
  }

  const gatewayProblemWithPath = problemWithPathGateway.find(
    (g) => g.id === id
  );
  if (gatewayProblemWithPath) {
    return {
      x: gatewayProblemWithPath.position.x,
      y: gatewayProblemWithPath.position.y,
    };
  }

  return null;
}

// Function to compute x coordinates of specific node
function computeX(x, marginleft, nodes) {
  const twentyPercentOfViewportWidth = (window.innerWidth * marginleft) / 100;
  const xarray = [];
  const polomerServer = -20;
  for (let i = 0; i < x.length; i++) {
    xarray.push(
      getCoordinates(x[i], nodes).x -
        polomerServer +
        twentyPercentOfViewportWidth
    );
  }
  for (let i = x.length - 2; i >= 0; i--) {
    xarray.push(
      getCoordinates(x[i], nodes).x -
        polomerServer +
        twentyPercentOfViewportWidth
    );
  }
  return xarray;
}

// Function to compute y coordinates of specific node
function computeY(y, nodes) {
  const polomerServer = 20;
  const yarray = [];
  for (let i = 0; i < y.length; i++) {
    yarray.push(getCoordinates(y[i], nodes).y + polomerServer);
  }
  for (let i = y.length - 2; i >= 0; i--) {
    yarray.push(getCoordinates(y[i], nodes).y + polomerServer);
  }
  return yarray;
}

const Results = (props) => (
  <>
    <div id="results" className="search-results">
      <p>{props.content}</p>
      <p>from: {props.from}</p>
      <p>to: {props.to}</p>
    </div>
    <div className="arrow-down"></div>
  </>
);

// Function to compute the animation breakpoints
function computeTimes(length) {
  let times = [];
  for (let i = 0; i <= length; i++) {
    times.push(i / length);
  }
  return times;
}

function Packet({ content, from, to, path, speed, repeat, marginleft, nodes }) {
  const [showResults, setShowResults] = React.useState(false);
  const xCoordinates = computeX(path, marginleft, nodes);
  const yCoordinates = computeY(path, nodes);
  const onClick = () => setShowResults(!showResults);
  const pole = computeTimes(xCoordinates.length);
  return (
    <>
      <div>
        <motion.div
          key="my-component"
          onClick={onClick}
          className="paket"
          animate={{
            x: xCoordinates,
            y: yCoordinates,
          }}
          transition={{
            repeat: repeat,
            duration: speed,
            times: pole,
          }}
        >
          {showResults ? (
            <Results content={content} from={from} to={to} />
          ) : null}
        </motion.div>
      </div>
    </>
  );
}
export default Packet;
