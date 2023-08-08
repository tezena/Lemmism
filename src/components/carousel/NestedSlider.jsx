import React from 'react'
import MessageCard from './messageCard'
import slidesData from './carouselData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    vertical:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


function NestedSlider() {
  return (
    <div className=' z-[30] absolute top-[3rem]  lg:w-96 lg:h-56  h-36 w-48 text-white    lg:top-24 lg:left-72  lg:p-3 mx-4' >
      <Slider style={{height:"100%"}} {...settings}>
      {slidesData.map((item,index)=>{return <MessageCard name={item.productName} mesg={item.message}  color={item.butnColor} />})}

    </Slider> 
    </div>
  )
}

export default NestedSlider