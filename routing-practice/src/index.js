import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";

import TourDetail from "./components/TourDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="tours/:tourId" element={<TourDetail />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>There's nothing here!</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
