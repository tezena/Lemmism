import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GalleryDisplay from "./GalleryDisplay";
import "./../App.css"





function EduHero() {
    return (
        
        <div className=" h-50 " style={{backgroundColor:"#333333"}}>
            <Container className="row mx-0">
                <div className="col h-100 d-flex flex-row p-5">
                        <div className="w-50 h-100 p-5">
                             <img src="assets/images/img1.jpg" className=" w-100"/>
                        </div> 
                        <div className="w-50 h-100 p-3">
                            <img src="assets/images/img3.jpg"  className="h-25 w-100"/>
                            <img src="assets/images/img3.jpg" className="h-25 w-100"/>
                    </div>
                </div>
                <div className="col h-100 text-white py-5 ps-5 w-50">
                    <h1>Education</h1>
                    <div className=" p-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className=" d-flex  justify-content-between px-5 w-100 ">
                        <button className=" mybtn">Traditional</button>
                        <button className="  mybtn">Digital</button>
                        <button className="  mybtn">Digital</button>
                    </div>
                </div>
            </Container>
             

        </div>
    )
}

export default EduHero;