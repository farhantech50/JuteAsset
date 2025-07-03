import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/main";
import HomePage from "@/pages/HomePage";
import Notfound from "@/pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This is your main layout
    children: [
      {
        index: true, // this means path: "/"
        element: <HomePage />,
      },
      {
        path: "products", // this means path: "/products"
        element: <HomePage />,
      },
      {
        path: "why", // this means path: "/why"
        element: <HomePage />,
      },

      {
        path: "contact", // this means path: "/contact"
        element: <HomePage />,
      },
      {
        path: "about", // this means path: "/about"
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
