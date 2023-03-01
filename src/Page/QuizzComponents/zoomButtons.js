import plus from "../../images/icons/plus.png";
import minus from "../../images/icons/minus.png";

function ZoomButtons({ zoomIn, zoomOut }) {
  return (
    <>
      <div className="zoom-buttons-container">
        <button onClick={zoomIn} className="zoom-button zoom-in">
          <img src={plus} alt="plus" />
        </button>
        <button onClick={zoomOut} className="zoom-button zoom-out">
          <img src={minus} alt="plus" />
        </button>
      </div>
    </>
  );
}

export default ZoomButtons;
