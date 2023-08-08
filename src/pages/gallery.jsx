import React from "react";
import { ReactDOM } from "react";
import Navigation from "../components/NavBar";
import GalleryDisplay from "../components/Gallery/GalleryDisplay";
import HeroSection from "../components/Gallery/Hero";
import images from "../components/imges";


function Gallery() {
    return (
        <div className="vh-100">
            <HeroSection/>
            <GalleryDisplay images={images} />
            
        </div>
    )
}

export default Gallery;