import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
// import IconClose from "../../assets/icon-close.svg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onOverlayClick}></div>
  );
};

const ModalOverlay = (props) => {
  return <div className={classes.modalOverlay}>{props.children}</div>;
};

// const CloseIcon = (props) => {
//   return (
//     <img
//       src={IconClose}
//       alt="Close modal"
//       className={classes.closeIcon}
//       onClick={props.onClick}
//     />
//   );
// };
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOverlayClick={props.onOverlayClick} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <CloseOutlinedIcon
            style={{ fontSize: "2.2rem" }}
            className={classes.closeIcon}
            onClick={props.onOverlayClick}
          />
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
