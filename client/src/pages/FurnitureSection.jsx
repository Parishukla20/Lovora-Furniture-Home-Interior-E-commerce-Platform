import { useNavigate } from "react-router-dom";
import img1 from "../assets/IMAGES/home-interior-hd-8k-wallpaper-stock-photographic-image_853645-40639.avif";
import img2 from "../assets/IMAGES/Custom-Ranch-Modular-Home-Nappanee-Indiana-Interior-19-scaled.jpg";
import img3 from "../assets/IMAGES/813AzaDU-nL.jpg";

const FurnitureSection = () => {
  const navigate = useNavigate();
  return (
    <div id="papa">
      <div id="papaL">

        <div className="icon-box" onClick={() => navigate("/sofa")}>
          <div className="first">
            <i
              className="fa-solid fa-couch"
              style={{
                fontSize: "45px",
                color: "rgb(109, 99, 99)"
              }}
            ></i>
          </div>
          <p>Couch</p>
        </div>


        <div className="icon-box" onClick={() => navigate("/chair")}>
          <div className="first">
            <i
              className="fa-solid fa-chair"
              style={{
                fontSize: "48px",
                color: "rgb(173, 88, 88)"
              }}
            ></i>
          </div>
          <p>Chair</p>
        </div>

        <div className="icon-box" onClick={() => navigate("/light")}>
          <div className="first">
            <i className="fa-solid fa-lightbulb"
              style={{
                fontSize: "50px",
                color: "#f4b400",
              }}></i>
          </div>
          <p>Lights</p>
        </div>

        <div className="icon-box" onClick={() => navigate("/storage")}>
          <div className="first">
            <i
              className="fa-solid fa-building"
              style={{
                fontSize: "48px",
                color: "#555"
              }}
            ></i>
          </div>
          <p>Storage</p>
        </div>

    

        <div className="icon-box" onClick={() =>navigate("/bed")}>
          <div className="first">
            <i
              className="fa-solid fa-bed"
              style={{
                fontSize: "45px",
                color: "rgb(39,82,39)"
              }}
            ></i>
          </div>
          <p>Beds</p>
        </div>


        <div className="icon-box" onClick={()=>navigate("/interior")}>
          <div className="first">
            <i
              className="fa-solid fa-leaf"
              style={{
                fontSize: "48px",
                color: "green"
              }}
            ></i>
          </div>
          <p>Interior Decor</p>
        </div>

        <div className="icon-box" onClick={()=>navigate("/bath")}>
          <div className="first">
            <i
              className="fa-solid fa-bath"
              style={{
                fontSize: "48px",
                color: "rgb(78,78,244)"
              }}
            ></i>
          </div>
          <p>Modern Bath</p>
        </div>


        <div className="icon-box" onClick={()=>navigate("/clock")}>
          <div className="first">
            <i
              className="fa-solid fa-clock"
              style={{
                fontSize: "50px",
                color: "rgb(86,86,175)"
              }}
            ></i>
          </div>
          <p>Clocks</p>
        </div>
        

        <div className="icon-box" onClick={()=>navigate("/crockery")}>
          <div className="first">
            <i
              className="fa-solid fa-mug-saucer"
              style={{
                fontSize: "45px",
                color: "rgba(236,90,92,0.456)"
              }}
            ></i>
          </div>
          <p>Crockery</p>
        </div>
      </div>

      <div id="benefit">
        <div className="free">
          <div className="ic"><i className="fa-regular fa-truck"></i></div>
          <div className="explain">
            <h5>Free Delivery</h5>
            <p>On orders before Rs.999</p>
            <button className="shop-now">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="quality">
          <div className="ic"><i className="fa-solid fa-circle-check"></i></div>
          <div className="explain">
            <h5>Quality Assured</h5>
            <p>Premium quality products</p>
            <button className="LearnMore">Learn More <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="return">
          <div className="ic"><i className="fa-solid fa-rotate-left"></i></div>
          <div className="explain">
            <h5>Easy Returns</h5>
            <p>7 days return policy</p>
            <button className="policy">See Policy <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="support">
          <div className="ic"><i className="fa-solid fa-headset"></i></div>
          <div className="explain">
            <h5>24/7 Support</h5>
            <p>We're here to help you</p>
            <button className="contactUs">Contact Us <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>


      <div id="papaR">
        <div className="side-left">
          <img src={img3} alt="" />
          <h1>SALE 50% OFF</h1>
          <h2>Premium Sofa Set</h2>
          <p>Redefine your home with handcrafted premium sofas.
            <br /> A perfect blend of elegance, comfort, and contemporary craftsmanship.
          </p>
        </div>
        <div className="side-right">
          <div className="side-up">
            <img src={img1} alt="" />
            <h2>Modern Living Room</h2>
            <p>Timeless furniture designed to elevate every corner of your home.</p>
            <button className="explore-more">Explore More <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="side-down">
            <img src={img2} alt="" />
            <h2>Modern Kitchen Essentials</h2>
            <p>Beautiful interiors with smart storage and elegant finishes.</p>
            <button className="shop-now">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;