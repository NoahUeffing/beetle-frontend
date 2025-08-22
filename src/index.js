import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import {
  PRODUCTS_PAGE,
  PRODUCT_DETAIL_PAGE,
  HOME_PAGE,
  ABOUT_PAGE,
  LOGIN_PAGE,
  FAVOURITES_PAGE,
  PROFILE_PAGE,
} from "./constants";

const router = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: PRODUCTS_PAGE, element: <Products /> },
      { path: PRODUCT_DETAIL_PAGE, element: <Product /> },
      { path: ABOUT_PAGE, element: <About /> },
      { path: LOGIN_PAGE, element: <Login /> },
      { path: FAVOURITES_PAGE, element: <Favourites /> },
      { path: PROFILE_PAGE, element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
