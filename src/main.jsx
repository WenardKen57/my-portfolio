import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import NavBar from "./NavBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
            <NavBar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>

  </StrictMode>
);
