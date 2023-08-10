import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Masonry from 'react-masonry-css';
import './Gallery.css'
import images from "../imges";
import Hove from "./Hove";
import  { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function GalleryDisplay (){
  const [currentImage, setCurrentImage] = React.useState(null);

  const handleMouseOver = (image) => {
    setCurrentImage(image);
  }

  const handleMouseOut = () => {
    setCurrentImage(null);
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };



  // for animation
  const picVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0.8, }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  return (

    <div  className="px-5  ">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column "
      >
        {images.map((image, idx) => (
          <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={picVariants}
            key={idx}
            className="image-container"
            onMouseOver={() => handleMouseOver(image)}
            onMouseOut={handleMouseOut}
          >
            
            <img src={image.src} alt={image.alt} className="img-fluid" />
 
            {currentImage === image && (
              <div className="image-info">
                <Hove/>
              </div>
            )}
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}


export default GalleryDisplay;