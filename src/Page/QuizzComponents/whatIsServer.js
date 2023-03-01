import ZoomButtons from "./zoomButtons";

function WhatIsServerComponent({ zoomIn, zoomOut }) {
  return (
    <>
      <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
}

export default WhatIsServerComponent;
