import React from "react";
import { Route, Routes } from "react-router-dom";
import { TodoPage } from "../pages/TodoPage/TodoPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
};
