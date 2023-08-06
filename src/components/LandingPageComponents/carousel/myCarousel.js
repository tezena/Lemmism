import React,{useState}  from "react";
// import DotFilled from "../Bars/DotFilled"
import Buttons from "./Button";
import TopTitle from "./messageCard";
import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 import CarouselBanner from "./CarouselBanner";
 import slidesData from "./carouselData";
 import NestedSlider from "./NestedSlider";


 const settings = {
  dots: true,
  infinite: true,
  arrows:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};




function Carousel(){
    return(
      <div>
        
      </div>
      <div className='  w-[100%] lg:h-96 h-56 relative '>
      <Slider {...settings}>
      {slidesData.map((item,index)=>{return <CarouselBanner img={item.url}/>})}
    </Slider>
    <NestedSlider/> 
</div>
        <div className=" lg:h-[460px] w-full  overflow-hidden relative h-56 ">
          <h1>working</h1>
           <Slider  {...settings}>
            {slides.map((slide,index)=> {return <div className="bg-red-100 h-full w-full" >{slide.productName}</div> })}

        </Slider> 
        <div style={{backgroundImage:`url(${slides[current].url})`,
                     backgrounAttachment:"fixed"}} 
        className="w-full h-full  bg-center bg-cover duration-1000 transition-transform  ease-out origin-left ">
           </div>
          
         <Buttons next={next} prev={prev}/>
         <TopTitle  name={slides[current].productName}  mesg={slides[current].message} color={slides[current].butnColor} />
         <div className="relative bottom-8 right-0 left-0 ">
         <div className="flex justify-center gap-2 "> 
          {slides.map((slide,slideIndex)=>(
            <DotFilled index={slideIndex} setCur={setCurrent} curr={current} />
          ))}
         </div>
         </div>
         
      </div>
           
    )
}

export default Carousel;