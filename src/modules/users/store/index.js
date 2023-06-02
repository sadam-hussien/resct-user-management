import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user_reducer",
  initialState: {
    users: [
      {
        id: 1,
        name: "ahmed",
        email: "ahmed@gmail.com",
        phone: "01234556622",
        gender: "male",
      },
      {
        id: 2,
        name: "fatma",
        email: "fatma@gmail.com",
        phone: "01234556622",
        gender: "female",
      },
      {
        id: 287266,
        name: "gezoqydyh",
        email: "kisoje@mailinator.com",
        phone: "+1 (531) 602-8661",
      },
      {
        id: 266869,
        name: "cugarah",
        email: "guti@mailinator.com",
        phone: "+1 (485) 791-6563",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users.splice(
        state.users.findIndex(
          (item) => parseInt(item.id) === parseInt(action.payload)
        ),
        1
      );
    },
    editUser: (state, action) => {
      const itemIndex = state.users.findIndex(
        (item) => parseInt(item.id) === parseInt(action.payload.id)
      );
      state.users[itemIndex] = { ...state.users[itemIndex], ...action.payload };
    },
  },
});

export default userReducer.reducer;

export const { addUser, removeUser, editUser } = userReducer.actions;
