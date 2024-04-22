import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import DashboardPage from "./pages/dashboard";
import MoviesPage from "./pages/movies";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/movies", element: <MoviesPage /> },
    ],
  },
]);
