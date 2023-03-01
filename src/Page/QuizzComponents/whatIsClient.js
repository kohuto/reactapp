import ZoomButtons from "./zoomButtons";
function WhatIsClientComponent({ zoomIn, zoomOut }) {
  return (
    <>
      <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
}

export default WhatIsClientComponent;
