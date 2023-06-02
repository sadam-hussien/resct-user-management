import { Modal, Table } from "components";

import { users_columns } from "../columns";

import { Add, Edit, View } from "../components";

import { useDispatch, useSelector } from "react-redux";

import { removeUser } from "../store";

import { Container } from "react-bootstrap";

export default function Users() {
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  return (
    <section className="users-page">
      <Container>
        <Table
          data={users}
          columns={users_columns}
          selection
          actions={{
            addActionModalTitle: "add new user",
            addActionModalBtnTitle: "add user",
            addActionTitle: "new user",
            title: "users",
          }}
          innerActions={{
            view: {
              modalTitle: "view user",
              // modalBtnTitle: ""
            },
            edit: {
              modalTitle: "edit user",
              modalBtnTitle: "update",
            },
            delete: {
              deleteFn: (id) => dispatch(removeUser(id)),
            },
          }}
        />
      </Container>
      <Modal edit={<Edit />} add={<Add />} view={<View />} />
    </section>
  );
}
