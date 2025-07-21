import { useState } from "react";
import "./Modal.scss";

export function Modal({ show, title, children }) {
  //Initialisation-----------------------------------
  //State--------------------------------------------
  //Handlers-----------------------------------------
  //View---------------------------------------------
  return show ? (
    <div className="ModalOverlay">
      <div className="ModalPane">
        <header>
          <p>{title}</p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  ) : null;
}

export function useModal(isOpen, initialContent = null) {
  //Initialisation
  //State------------------------------------------------

  const [state, setState] = useState({ show: isOpen, content: initialContent });

  //Handler----------------------------------------------------
  const open = (content) => {
    setState({ show: true, content: content });
  };

  const close = () => setState({ ...state, show: false });

  //Return ---------------------------------------

  return [state.show, state.content, open, close];
}
