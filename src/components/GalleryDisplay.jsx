import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Masonry from 'react-masonry-css';
import '../Gallery.css'
import images from "./imges";

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

  return (
    <div className="container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="image-container"
            onMouseOver={() => handleMouseOver(image)}
            onMouseOut={handleMouseOut}
          >
            <img src={image.src} alt={image.alt} className="img-fluid" />
            {currentImage === image && (
              <div className="image-info">
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
}


export default GalleryDisplay;