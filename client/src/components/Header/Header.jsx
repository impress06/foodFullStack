import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./styles.css";
import image1 from "../../assets/header_img1.png";
import image2 from "../../assets/burger.png";
import image3 from "../../assets/kahvaltılık.png";
import "./Header.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={70000}
    className="slider"
    mobileTouch={true}
    
  >
    <div data-src={image1}>
      <div className=" header-contents">
        {/* <h2>Have you ever tried our food?</h2> */}
        <p> Şimdi %10 İndirimde</p>
        <p> Ücretsiz Teslimat</p>
      </div>
    </div>
    <div data-src={image2}>
      <div className="header-contents">
        <p> Ücretsiz Teslimat</p>
        <p> Kuponlu Ürün</p>
      </div>
    </div>
    <div data-src={image3}>
      <div className="header-contents">
        <p> Ücretsiz Teslimat</p>
      </div>
    </div>
  </AutoplaySlider>
);

const Header = () => {
  return (
    <div className="header">
      <Slider />
      <div className="header-contents"></div>
    </div>
  );
};

export default Header;
