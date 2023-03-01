import "./PacketStyle.css";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { serversZoom2Data } from "../Flow/data/server/serverZoom2";
import { clientsZoom2Data } from "../Flow/data/client/clientsZoom2";
import { gatewaysZoom2Data } from "../Flow/data/gateway/gatewayZoom2";

function getCoordinates(id) {
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

  return null;
}

function computeX(x) {
  //x is array of ip adresses of nodes
  const twentyPercentOfViewportWidth = window.innerWidth * 0.2;
  const xarray = [];
  const polomerServer = 10;
  for (let i = 0; i < x.length; i++) {
    xarray.push(
      getCoordinates(x[i]).x - polomerServer + twentyPercentOfViewportWidth
    );
  }
  for (let i = x.length - 2; i >= 0; i--) {
    xarray.push(
      getCoordinates(x[i]).x - polomerServer + twentyPercentOfViewportWidth
    );
  }
  return xarray;
}

function computeY(y) {
  const polomerServer = 10;
  const yarray = [];
  for (let i = 0; i < y.length; i++) {
    yarray.push(getCoordinates(y[i]).y + polomerServer);
  }
  for (let i = y.length - 2; i >= 0; i--) {
    yarray.push(getCoordinates(y[i]).y + polomerServer);
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

function computeTimes(length) {
  let times = [];
  for (let i = 1; i <= length; i++) {
    times.push(i / length);
  }
  return times;
}

function Packet({ content, from, to, path, color, speed }) {
  const [showResults, setShowResults] = React.useState(false);
  const xCoordinates = computeX(path);
  const yCoordinates = computeY(path);
  const onClick = () => setShowResults(!showResults);
  const pole = computeTimes(xCoordinates.length);
  return (
    <>
      <div>
        <motion.div
          id="1"
          key="my-component"
          onClick={onClick}
          className="paket"
          animate={{
            x: xCoordinates,
            y: yCoordinates,
          }}
          transition={{
            repeat: Infinity,
            duration: speed,
            times: pole,
          }}
          style={{ backgroundColor: color }}
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
