import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "../views/Home";
import Resume from "../views/Resume";
import FourOhFour from "../views/FourOhFour";
import "./styles.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<FourOhFour />} />
      <Route path="*/*" element={<FourOhFour />} />

    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
