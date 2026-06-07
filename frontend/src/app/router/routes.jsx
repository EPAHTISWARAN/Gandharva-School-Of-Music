import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../../pages/Home";
import Courses from "../../pages/Courses";
import About from "../../pages/About";
import Events from "../../pages/Events";
import Enquiry from "../../pages/Enquiry";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "enquiry",
        element: <Enquiry />,
      },
    ],
  },
]);