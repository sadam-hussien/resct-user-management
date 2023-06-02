import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import usersRoutes from "modules/users/index.routes";

const routers = [...usersRoutes];

export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
