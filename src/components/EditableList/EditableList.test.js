import React from 'react';
import { createRoot } from 'react-dom/client';
// import {createRoot} from "react-dom/client"
// import {  } from "@testing-library/react";
import EditableList from "../EditableList";

// https://reactjs.org/link/switch-to-createroot

describe("EditableList component", () => {
  it("Should render the EditableList component", () => {
    const div = document.createElement("div");
    const root = createRoot(div); // createRoot(container!) if you use TypeScript
    root.render(<EditableList />);
  });
});
