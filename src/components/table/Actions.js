import React from "react";

import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { openModal } from "store/global";

import { modalTypes } from "constants";

export default function Actions({ actions, selectedRows }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <h2 className="m-0 text-capitalize table-main-title">{actions.title}</h2>
      <Button
        variant="primary"
        type="button"
        onClick={() =>
          dispatch(
            openModal({
              modal_type: modalTypes.add,
              title: actions.addActionModalTitle,
              btnTitle: actions.addActionModalBtnTitle,
            })
          )
        }
        className="my-btn"
      >
        {actions.addActionTitle}
      </Button>
    </div>
  );
}
