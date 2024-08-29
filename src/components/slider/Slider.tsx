import { useState } from "react";
import "./slider.scss";

type ImageProps = {
  images: string[];
};

const Slider = ({ images }: ImageProps) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: string) => {
    if (imageIndex === null) return;

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  const firstImage: string = images[0];
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt="" />
          </div>
          <div className="image-container">
            <img src={images[imageIndex]} alt="slider left arrow" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" className="right" alt="slider right arrow" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="big-image">
        <img src={firstImage} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
