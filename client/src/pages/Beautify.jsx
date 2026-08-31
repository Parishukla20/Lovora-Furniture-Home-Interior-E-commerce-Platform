import { useNavigate } from "react-router-dom";
import img1 from "../assets/IMAGES/thumb-1920-740968.jpg";
import img2 from "../assets/IMAGES/617220-furniture-interior-design-living-room-living-room.jpg";
import img3 from "../assets/IMAGES/Versace-Home-Medusa-95-sofa_06.jpg";

const Beautify = () => {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="text"
                style={{ overflow: "hidden", marginBottom: "20px" }}
            >
                <h1 className="trend">BEAUTIFY YOUR LIVING SPACES</h1>
            </div>

            <div className="beautify">
                <div className="row-1">
                    <div className="col-1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-2">
                        <h1>Transform Your Living Room</h1>

                        <p>
                            Premium sofas and elegant furniture designed to bring comfort,
                            style, and sophistication to your everyday living.
                        </p>

                        <button onClick={() =>navigate("/bed")}>Explore Collection</button>
                    </div>
                </div>

                <div className="row-2">
                    <div className="col-1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-2">
                        <h1>Modern Interior Design</h1>

                        <p>
                            Create a warm and inviting atmosphere with beautifully crafted
                            furniture that perfectly blends luxury and functionality.
                        </p>

                        <button onClick={()=>navigate("/interior")}>Shop Now</button>
                    </div>
                </div>

                <div className="row-3">
                    <div className="col-1">
                        <img src={img3} alt="" />
                    </div>
                    <div className="col-2">
                        <h1>Luxury Meets Comfort</h1>

                        <p>
                            Discover timeless furniture collections that elevate your home
                            with premium quality, modern design, and lasting elegance.
                        </p>

                        <button onClick={() => navigate("/sofa")}>View Products</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Beautify;