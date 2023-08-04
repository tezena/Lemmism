import React from "react";
import { ReactDOM } from "react";
import Navigation from "../components/NavBar";
import GalleryDisplay from "../components/GalleryDisplay";
import HeroSection from "../components/Hero";
import images from "../components/imges";


function Gallery() {
    return (
        <div className="vh-100">
            <Navigation />
            <HeroSection/>
            <GalleryDisplay images={images} />
            
        </div>
    )
}

export default Gallery;