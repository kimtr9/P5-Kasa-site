import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>


    )
  
}

