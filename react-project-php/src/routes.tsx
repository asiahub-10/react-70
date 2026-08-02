import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/user/UserManage";
import UserCreate from "./views/pages/user/UserCreate";
import UserEdit from "./views/pages/user/UserEdit";
import NotFound from "./views/pages/NotFound";
import Login from "./views/pages/auth/Login";
import UserDetails from "./views/pages/user/UserDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/user",
        element: <UserManage />
      },
      {
        path: "/user-create",
        element: <UserCreate />
      },
      {
        path: "/user-edit/:id",
        element: <UserEdit />
      },
      {
        path: "/user-details/:id",
        element: <UserDetails />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
]); 