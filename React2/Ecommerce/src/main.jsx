import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./Cart.jsx";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile.jsx";
import SingleProductPage from "./SingleProductPage.jsx";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },{
        path: "/product/:id",
        element:<SingleProductPage></SingleProductPage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
