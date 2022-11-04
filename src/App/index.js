import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "../views/Home";
import Resume from "../views/Resume";
import "./styles.css";

// import Home, { homeLoader } from "../views/Home";
// import Resume, { resumeLoader } from "../views/Resume";


const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </>
      )
    );
    
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <Home />,
    //     loader: homeLoader,
    //     children: [
    //       {
    //         path: "resume",
    //         element: <Resume />,
    //         loader: resumeLoader,
    //       },
    //     ],
    //   },
    // ]);

    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/resume" element={<Resume />} />
    //   </Routes>
    // </Router>

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
