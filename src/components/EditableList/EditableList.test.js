import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import EditableList from "../EditableList";

// https://reactjs.org/link/switch-to-createroot
const user = userEvent.setup();

describe("EditableList component", () => {

  it("should render the EditableList component", () => {
    render(<EditableList />);
    expect(screen.getByText(/An Editable List/i)).toBeInTheDocument();
  });

  it("should have one list item", async () => {
    render(<EditableList />);
    const itemsArray = await screen.findAllByRole("textarea", { text: "" });
    expect(itemsArray.length).toEqual(1);
  });

  it("should have the correct placeholder text", () => {
    render(<EditableList />);
    expect(screen.getByPlaceholderText("Add an item")).toBeInTheDocument();
  });

  it("should have a button", () => {
    render(<EditableList />);
    expect(
      screen.getByRole("button", { name: /Add an item/i })
    ).toBeInTheDocument();
  });

  it("should create a new item when clicking the button", async () => {
    render(<EditableList />);

    await user.click(screen.getByRole("button", { name: /Add an item/i }));
    const itemsArray = await screen.findAllByRole("textarea", { text: "" });
    expect(itemsArray.length).toEqual(2);
  });

  it("should add item to end of list and add focus when clicking the button", async () => {
    render(<EditableList />);
    const itemsArrayBefore = await screen.findAllByRole("textarea", {
      text: "",
    });
    await user.click(screen.getByRole("button", { name: /Add an item/i }));
    const itemsArrayAfter = await screen.findAllByRole("textarea", {
      text: "",
    });
    expect(itemsArrayAfter.length).toEqual(2);
    expect(itemsArrayBefore[0].id).toEqual(itemsArrayAfter[0].id);
    expect(itemsArrayAfter[1]).toHaveFocus();
  });

  it("should insert a new item after the item textarea in which a user has pressed Enter", async () => {
    render(<EditableList />);
    await user.click(screen.getByRole("button", { name: /Add an item/i }));
    const itemsArray = await screen.findAllByRole("textarea", { text: "" });
    expect(itemsArray.length).toEqual(2);
    await user.click(itemsArray[0]);
    await user.keyboard("[Enter]");
    const itemsArrayAfter = await screen.findAllByRole("textarea", {
      text: "",
    });
    expect(itemsArrayAfter.length).toEqual(3);
    expect(itemsArrayAfter[1]).toHaveFocus();
    expect(itemsArray[0].id).toEqual(itemsArrayAfter[0].id);
    expect(itemsArray[1].id).toEqual(itemsArrayAfter[2].id);
  });

  it("should allow the user to update the item text", async () => {
    render(<EditableList />);
    await user.keyboard("new");
    const item = await screen.findByRole("textarea", { text: "new" });
    expect(item.value).toEqual("new");
  });

  it("should allow the user to delete an item", async () => {
    render(<EditableList />);
    await user.click(screen.getByRole("button", { name: /Add an item/i }));
    const itemsArrayBefore = await screen.findAllByRole("textarea", {
      text: "",
    });
    expect(itemsArrayBefore.length).toEqual(2);
    const checkboxArray = await screen.findAllByRole("checkbox");
    await user.click(checkboxArray[0]);
    const itemsArrayAfter = await screen.findAllByRole("textarea", {
      text: "",
    });
    expect(itemsArrayAfter.length).toEqual(1);
  });
});
