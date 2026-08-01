import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/user/UserManage";
import UserCreate from "./views/pages/user/UserCreate";

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
    ]
  },
]); 