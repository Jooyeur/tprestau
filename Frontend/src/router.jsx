import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Categories from "./pages/Categories/Categories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);
