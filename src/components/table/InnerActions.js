import { useDispatch } from "react-redux";

import { openModal } from "store/global";

import { modalTypes } from "constants";

import { Button } from "react-bootstrap";

export default function InnerActions({ data, actions }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center main-table-inner-actions gap-3">
      {/* view  */}
      {actions.view && (
        <Button
          type="button"
          className="main-table-inner-actions-view"
          onClick={() =>
            dispatch(
              openModal({
                modal_type: modalTypes.view,
                title: actions.view.modalTitle,
                btnTitle: actions.view.modalBtnTitle,
                ...data,
              })
            )
          }
        >
          <i className="las la-eye"></i>
          {/* <span>view</span> */}
        </Button>
      )}

      {/* edit  */}
      {actions.edit && (
        <Button
          type="button"
          className="main-table-inner-actions-edit"
          onClick={() =>
            dispatch(
              openModal({
                modal_type: modalTypes.edit,
                title: actions.edit.modalTitle,
                btnTitle: actions.edit.modalBtnTitle,
                ...data,
              })
            )
          }
        >
          <i className="las la-edit"></i>
          {/* <span>edit</span> */}
        </Button>
      )}
      {actions.delete && (
        <Button
          type="button"
          className=" main-table-inner-actions-delete"
          onClick={() => {
            const isConfirm = window.confirm(
              `are you sure you want to delete ${data.name}`
            );
            if (isConfirm) {
              actions.delete.deleteFn(data.id);
            }
          }}
        >
          <i className="las la-trash"></i>
          {/* <span>delete</span> */}
        </Button>
      )}
    </div>
  );
}
