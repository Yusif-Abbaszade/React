import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { DataProvider } from "./context/DataContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LangProvider } from "./context/LangContext.jsx";
import { PriceProvider } from "./context/PriceContext.jsx";
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <DataProvider>
        <ThemeProvider>
          <LangProvider>
            <PriceProvider>
              <App />
            </PriceProvider>
          </LangProvider>
        </ThemeProvider>
      </DataProvider>
    </CartProvider>
  </StrictMode>
);
