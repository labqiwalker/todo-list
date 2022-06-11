import React from "react";
import { Route, Routes } from "react-router-dom";
import { TestPage } from "../pages/TestPage/TestPage";
import { TodoPage } from "../pages/TodoPage/TodoPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};
