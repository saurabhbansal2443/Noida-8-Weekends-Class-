import React, {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./Cart.jsx";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile.jsx";
import SingleProductPage from "./SingleProductPage.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import appStore from "./utils/Store/appstore.js";
import {Provider} from 'react-redux'
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import AuthWrapper from "./AuthWrapper.jsx";
const FoodApp = lazy(()=> import ("./FoodApp.jsx"))


let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper><App></App></AuthWrapper>,
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
      },{
        path:"/food",
        element:(<Suspense fallback={<ShimmerUI></ShimmerUI>}>
          <FoodApp></FoodApp>
        </Suspense>)
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },{
    path : "/login",
    element :<Login></Login>
  },{
    path : "/signup",
    element : <Signup></Signup>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
  <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
);
