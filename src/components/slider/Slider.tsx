import "./slider.scss";

type ImageProps = {
  images: string[];
};

const Slider = ({ images }: ImageProps) => {
  const firstImage: string = images[0];
  return (
    <div className="slider">
      <div className="full-slider">
        <div className="arrow">
          <img src="./arrow.png" alt="" />
        </div>
        <div className="image-container">
          <img src={firstImage} alt="" />
        </div>
        <div className="arrow">
          <img src="./arrow.png" className="right" alt="" />
        </div>
        <div className="close">X</div>
      </div>
      <div className="big-image">
        <img src={firstImage} alt="" />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};
export default Slider;
