import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import { CarouselProvider } from "@/contexts/CarouselInViewContext";
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastContainer />
    <CarouselProvider>
      <App />
    </CarouselProvider>
  </ThemeProvider>
);
