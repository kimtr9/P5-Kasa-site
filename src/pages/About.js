import React from "react";
import Banner from "../components/Banner";
import backgroundImgAbout from '../images/background-pic-about.png'



export default function About() {
    return (
        <div> 
            <Banner
            backgroundImg={backgroundImgAbout}
            text="" />
        </div>
    )
}