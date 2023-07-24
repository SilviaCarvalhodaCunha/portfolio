import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <NavBar />
        <AppRouter/>
        <Footer />
      </GlobalStyle>    
    </BrowserRouter>
  </React.StrictMode>
);
