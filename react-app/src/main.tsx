import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.tsx";
import User from "./UserManage.tsx";
import Home from "./Home.tsx";

const links = createBrowserRouter([
  // { path: "/", element: <App /> },
  // { path: "/user", element: <User /> },
  // { path: "/test", element: <h1>Test <b>Page</b></h1> },
  { 
    path: "/", 
    element: <App />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/user", element: <User /> },
      { path: "/test", element: <h1>Test <b>Page</b></h1> },
    ] 
  },
  { 
    path: "*", 
    element: <h1 className="text-danger text-center py-5">404 Page not found!</h1> 
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
);
