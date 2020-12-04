import { useState, useEffect, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../scss/gallerySmall.scss";

// `https:picsum.photos/v2/list?page=3&limit=6`
// const url = `https:pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&q={term}page=1&per_page=6`;

const GallerySmall = ({ term = "mountain" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const asdfRef = useRef();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `https:pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&q={term}page=1&per_page=6`
  //     ).catch((err) => console.log(err));
  //     const data = await res.json();
  //     setImages(data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [term]);

  return (
    <div className="gallery-container">
      <div className="details-content-title">
        <h1>Gallery</h1>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="photo-grid-item">
          {images.map((image, index) => (
            <div
              key={index}
              className="photo-container"
              ref={asdfRef}
              onClick={() => console.log(asdfRef.current)}
            >
              <div
                className="photo"
                style={{ backgroundImage: `url(${image.download_url})` }}
              >
                {index}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GallerySmall;
