import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Main";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This is your main layout
    children: [
      {
        index: true, // this means path: "/"
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
