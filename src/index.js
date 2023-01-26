import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePages = lazy(() => import("./pages/home/index.jsx"));
const FavouritePages = lazy(() => import("./pages/favourite"));
const NotFoundPages = lazy(() => import("./pages/not-found"));
const RestaurantDetailPages = lazy(() => import("./pages/restaurant-detail"));
const RestaurantsPages = lazy(() => import("./pages/restaurants"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <NotFoundPages />,
  },
  {
    path: "/favourite",
    element: <FavouritePages />,
  },
  {
    path: "/restaurants",
    element: <RestaurantsPages />,
    errorElement: <NotFoundPages />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantDetailPages />,
    errorElement: <NotFoundPages />,
  },
  {
    path: "*",
    element: <NotFoundPages />,
    errorElement: <NotFoundPages />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
