import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <div id="food-order-modal">
      <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
}
