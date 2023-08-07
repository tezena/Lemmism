import React from "react";
import { ReactDOM } from "react";
import { Row, Col } from "react-bootstrap";
import addressInfo from "./contactInfo";
import { PhoneInfo,emailInfo } from "./contactInfo"



function CoHero() {
    return (
        <div className=" h-50 px-sm-5 " style={{ backgroundColor: "#333333" }}>
            <h1 className="myColor pt-5 fs-1" > Get In Touch</h1> 
            <div className="row pb-5 px-sm-5">
            <div className="col-6  col-sm-4 ">
                    <div className=" h-2 w-2 mx-auto mt-5 " style={{width:"100px",height:"100px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                </div>
                <div className="text-part">
                    <h2 className="myColor pt-3 " >Address</h2>
                    {addressInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
            </div>
            <div className="col-6 col-sm-4  ">
                    <div className=" h-2  mx-auto mt-5 " style={{width:"100px",height:"100px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                </div>
                <div className="text-part">
                    <h2 className="myColor pt-3 " >Phone</h2>
                    {PhoneInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
                </div>
                <div className="col-6 mx-auto col-sm-4   ">
                    <div className=" h-2  mx-auto mt-5 " style={{width:"100px",height:"100px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                </div>
                <div className="text-part">
                    <h2 className="myColor pt-3 " >Email</h2>
                    {emailInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
                </div>
            </div>
            <div className="d-flex flex-row  flex-sm-column text-sm-start px-5 pb-5">
                <h2 className="myColor " >Social medias</h2>
                <div className="ms-5 d-flex     text-white text-sm-start">
                    <h3 className="px-2">icon1</h3 >
                    <h3 className="px-2">icon2</h3 >
                    <h3 className="px-2">icon3</h3 >
              </div>
            </div>
          
        </div>
    )
}

export default CoHero;