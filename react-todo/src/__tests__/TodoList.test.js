import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList testing component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
  });

  test("adds a todo item", () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    fireEvent.change(getByPlaceholderText("Add new todo"), {
      target: { value: "ALX Test Todo" },
    });
    fireEvent.click(getByText("Add"));
  });
});
