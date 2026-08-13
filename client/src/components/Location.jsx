import img1 from "../assets/images/th (6).jpeg";
import img2 from "../assets/images/th (7).jpeg";
import img3 from "../assets/images/th (8).jpeg";
import img4 from "../assets/images/th (9).jpeg";
import img5 from "../assets/images/th (10).jpeg";
import img6 from "../assets/images/th (12).jpeg";
import img7 from "../assets/images/th (11).jpeg";
import img8 from "../assets/images/th (14).jpeg";

const Location = () => {
  return (
    <>
      <div
        className="text"
        style={{ overflow: "hidden", marginBottom: "25px" }}
      >
        <h1 className="trend">LOCATIONS</h1>
      </div>

      <div className="location">
        <div className="half-1">
          <h1>100+</h1>

          <h3>EXPERIENCE STORES</h3>

          <h4>ACCROSS USA</h4>

          <hr
            style={{
              marginTop: "25px",
              marginLeft: "180px",
              marginRight: "180px",
            }}
          />

          <h4 style={{ marginTop: "25px" }}>
            GET EXTRA UPTO
          </h4>

          <h1
            style={{
              color: "rgb(60, 195, 60)",
              textAlign: "center",
              marginTop: "15px",
              height: "30px",
              fontSize: "60px",
              fontWeight: "lighter",
            }}
          >
            10% OFF
          </h1>

          <h5>On Shopping From Your Nearest Store</h5>
        </div>

        <div className="half-2">
          <div className="div-one">
            <img src={img1} alt="" />
            <p>California</p>
          </div>

          <div className="div-one">
            <img src={img2} alt="" />
            <p>Georgia</p>
          </div>

          <div className="div-one">
            <img src={img3} alt="" />
            <p>Los Angeles</p>
          </div>

          <div className="div-one">
            <img src={img4} alt="" />
            <p>Wahington</p>
          </div>

          <div className="div-one">
            <img src={img5} alt="" />
            <p>Florida</p>
          </div>

          <div className="div-one">
            <img src={img6} alt="" />
            <p>Virginia</p>
          </div>

          <div className="div-one">
            <img src={img7} alt="" />
            <p>New York</p>
          </div>

          <div className="div-one">
            <img src={img8} alt="" />
            <p>Alaska</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;