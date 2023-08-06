import React, { useState }  from "react";
import {Link}  from "react-router-dom"


function MessageCard(props){
    const [isHoved,setIsHoved]=useState(false)
    
    return <div  className=" text-left lg:space-y-3   lg:h-56  h-36 w-full ml-2 ">
            <div> <h1 className=" text-[1.2rem] capitalized font-bold lg:text-5xl " > {props.name} </h1></div>
            <div> <h3 className=" text-[.8rem] lg:text-lg lg:font-semibold font-semibold ">{props.mesg}</h3></div>
            <div className="mt-2 " onMouseEnter={()=>setIsHoved(true)}  onMouseLeave={()=>setIsHoved(false)} > 
           <Link to='/subsubcatagory'> <button  style={{backgroundColor:isHoved?"black":`${props.color}`,
              }}className={" rounded-sm py-1 px-3 text-[0.6rem] lg:text-sm lg:font-bold font-bold " }>Buy Now</button>  </Link> </div>
    </div>
}


export default MessageCard;