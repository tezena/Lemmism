import React from "react";
import {ChevronLeft,ChevronRight} from "react-feather" 

function Buttons(props){
    return <div  className="absolute inset-0 flex justify-between items-center group ">
     <div >
      <button onClick={props.prev} className=" text-gray-100 hidden group-hover:block">
         <ChevronLeft size={30}/> </button>
    </div>
    <div>
    <button  onClick={props.next} className=" text-gray-100 hidden group-hover:block">
       <ChevronRight size={30} /> </button>
    </div>
   </div>
}


export default Buttons;