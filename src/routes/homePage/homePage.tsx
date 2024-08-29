import SearchBar from "../../components/searchBar/SearhBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis hic,
            necessitatibus id, facilis possimus perspiciatis beatae aliquam
            deserunt autem tempora dolores ullam at sequi aliquid non vero
            reiciendis nostrum adipisci!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
export default HomePage;
