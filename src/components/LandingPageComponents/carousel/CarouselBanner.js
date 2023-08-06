import React from 'react'

function CarouselBanner(props) {
  return (
    <div  style={{backgroundImage:`url(${props.img})`,
                  backgroundAttachment:"fixed", backgroundSize:"cover",backgroundPosition:"center"}} className='w-[100%] lg:h-96 h-56 '>
      
    </div>
  )
}

export default CarouselBanner
