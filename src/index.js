import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import About from "./pages/About";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {path: "/products", element: <Products />},
      {path: "/products/:id", element: <Product />},
      {path: "/about", element: <About />},
      {path: "/login", element: <Login />},
      {path: "/favourites", element: <Favourites />},
      {path: "/profile", element: <Profile />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
