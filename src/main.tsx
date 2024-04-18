import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/dashboard/index.tsx";
import MovieListPage from "./pages/movie-list/index.tsx";
import Layout from "./layout.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/movies", element: <MovieListPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
