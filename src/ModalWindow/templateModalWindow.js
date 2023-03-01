import "./modalWindow.css";

function closeModal(i) {
  var modal = document.getElementById("modal-window" + i);
  modal.style.display = "none";
}

function ModalWindowTemplate({ setGame, ID, content }) {
  const id = "modal-window" + ID;
  const handleClose = (event) => {
    closeModal(ID);
    setGame("noGame");
  };
  return (
    <>
      <div id={id} className="modal-window">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {content}
        </div>
      </div>
    </>
  );
}

export default ModalWindowTemplate;
