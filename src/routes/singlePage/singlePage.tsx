import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
import "./singlePage.scss";
import { SingleDataProps } from "../../types";

const SinglePage = () => {
  const singleData: SingleDataProps[] = [singlePostData as SingleDataProps];
  return (
    <div className="single-page">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user data" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list-vertical">
            <div className="feature">
              <img src="./utility.png" alt="utility" />
              <div className="feature-text">
                <span>UTILITIES</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="pet" />
              <div className="feature-text">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility.png" alt="utility" />
              <div className="feature-text">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="Size" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" alt="Bed" />
              <span>2 bed</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt="bathroom" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="list-horizontal">
            <div className="feature">
              <img src="./school.png" alt="school" />
              <div className="feature-text">
                <span>School</span>
                <p>250m aways</p>
              </div>
            </div>

            <div className="feature">
              <img src="./pet.png" alt="pet" />
              <div className="feature-text">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="fee" />
              <div className="feature-text">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="map-container">
            <Map items={singleData} />
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="chat icon" />
              Send a Message
            </button>
            <button>
              <img src="./save.png" alt="chat icon" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
