import React from "react";

import ReactDOM from "react-dom";

import { Modal } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "store/global";

import { modalTypes } from "constants";

export default function ModalEl({ children, edit, add, view, message }) {
  // get modal from store
  const dispatch = useDispatch();

  const { modal } = useSelector((state) => state.global);

  const handleClose = () => {
    dispatch(closeModal());
  };

  // handle children
  const ModalChildren = () => {
    if (modal.data.modal_type === modalTypes.add) {
      return React.cloneElement(add, {
        handleClose,
        data: modal,
      });
    } else if (modal.data.modal_type === modalTypes.edit) {
      return React.cloneElement(edit, {
        handleClose,
        data: modal,
      });
    } else if (modal.data.modal_type === modalTypes.view) {
      return React.cloneElement(view, {
        handleClose,
        data: modal,
      });
    } else if (modal.data.modal_type === modalTypes.message) {
      return React.cloneElement(message, {
        handleClose,
        data: modal,
      });
    }
    return React.cloneElement(children, {
      handleClose,
      data: modal,
    });
  };

  const Content = (
    <Modal
      show={modal.isShow}
      onHide={handleClose}
      className="custom-modal"
      dialogClassName="custom-dialog-modal"
      aria-labelledby="example-custom-modal-styling-title"
      centered
      backdrop="static"
      keyboard={false}
    >
      <div className="modal-container-content">
        <Modal.Header className="d-flex align-items-center justify-content-between mb-4">
          <Modal.Title className="text-capitalize">
            {modal.data?.title}
          </Modal.Title>
          {/* <i
            onClick={handleClose}
            className="las la-long-arrow-alt-right cursor-pointer"
          /> */}
        </Modal.Header>
        <Modal.Body className="">
          {modal.isShow && <ModalChildren />}
        </Modal.Body>
      </div>
    </Modal>
  );
  return ReactDOM.createPortal(Content, document.getElementById("root-modal"));
}
