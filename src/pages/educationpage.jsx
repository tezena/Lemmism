import React from "react";
import { ReactDOM } from "react";
import Navigation from "../components/NavBar";
import EduHero from "../components/EduHero";
import Card from "../components/Blog/Card";
import DisplayCard from "../components/Blog/dipayCard";
import edu from "../components/Blog/eduData";


function Education() {
    return (
        <div className="vh-100 ">
            <Navigation />
            <EduHero />
            <DisplayCard data={edu}/>      
        </div>
    )
}

export default Education;