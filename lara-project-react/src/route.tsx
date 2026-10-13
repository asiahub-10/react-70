import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ManageUser from "./pages/user/ManageUser.tsx";
import CreateUser from "./pages/user/CreateUser.tsx";
import ShowUser from "./pages/user/ShowUser.tsx";
import EditUser from "./pages/user/EditUser.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import { needAuth, notAuth } from "./utils/Auth.ts";
import AccessDenied from "./pages/error/AccessDenied.tsx";
import Test from "./pages/Test.tsx";
import A from "./pages/context-pages/A.tsx";

export const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <ManageUser />,
      },
      {
        path: "/users/create",
        element: <CreateUser />,
      },
      {
        path: "/users/:id",
        element: <ShowUser />,
      },
      {
        path: "/users/:id/edit",
        element: <EditUser />,
      },
      {
        path: "/context",
        element: <A />,
      },
    ],
    loader: needAuth,
  },
  {
    path: "/login",
    element: <Login />,
    loader: notAuth,

  },
  {
    path: "/register",
    element: <Register />,
    loader: notAuth,
  },
  {
    path: "/access-denied",
    element: <AccessDenied />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  }
]);
