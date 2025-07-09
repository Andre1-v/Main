import "./Modal.scss";

function Modal({ children }) {
  //Initialisation-----------------------------------
  //State--------------------------------------------
  //Handlers-----------------------------------------
  //View---------------------------------------------
  return (
    <div className="ModalOverlay">
      <div className="ModalPane">
        <header>
          <p>{title}</p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Modal;
