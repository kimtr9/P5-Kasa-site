import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accomodation from "./pages/Accomodation"

export default function AppRouter() {
    return (

        <BrowserRouter>
            <Header />
            <Routes> 
                <Route path="/" element={<Home />} />

                <Route path="/accomodation/:id" element={ <Accomodation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>


    )
  
}

