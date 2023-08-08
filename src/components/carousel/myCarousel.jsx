import React,{useState}  from "react";
import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 import CarouselBanner from "./banner";



 const settings = {
  dots: false,
  infinite: true,
  arrows:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const slidesData=[
    {
        url:"assets/images/img3.jpg"
    },
    {
        url:"assets/images/img2.jpg"
    },
    {
        url:"assets/images/img1.jpg"
    }
]



function Carousel(){
    return(
      <div className='  w-100' style={{}}>
      <Slider {...settings}>
      {slidesData.map((item,index)=>{return <CarouselBanner img={item.url}/>})}
    </Slider>
</div>)

}

export default Carousel;

