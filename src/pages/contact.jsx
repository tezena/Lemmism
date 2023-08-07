import React from "react";
import { ReactDOM } from "react";
import CoHero from "../components/contact/conHero";
import MessageUs from "../components/contact/messageUs";



function Contact() {
    return (
        <div className="h-100">
            <CoHero />
            <MessageUs/>
        </div>
    )
}


export default Contact;