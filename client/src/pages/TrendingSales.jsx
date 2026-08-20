import img1 from "../assets/IMAGES/th (1).jpeg";
import img2 from "../assets/IMAGES/Wooden-Furniture-Chair-PNG-Image.png";
import img3 from "../assets/IMAGES/thumb-1920-740968.jpg";
import img4 from "../assets/IMAGES/Desktop-Floor-Pictures.jpg";
import img5 from "../assets/IMAGES/minimalist-green-fabric-sofa-white_1264082-8754.jpg";
import img6 from "../assets/IMAGES/th (3).jpeg";
import img7 from "../assets/IMAGES/th.jpeg";
import img8 from "../assets/IMAGES/th (4).jpeg";

const TrendingSales = () => {
    return (
        <>
            <div className="text">
                <h1 className="trend">TRENDING SALES</h1>
            </div>

            <div id="Trending-Sales">
                <div className="one">
                    <div className="box1">
                        <img src={img1} alt="" />
                        <button >
                            Buy me !
                        </button>
                        <button id="but">Flat 40% OFF</button>
                        <h3>Elegant Rattan Dining Set</h3>
                    </div>
                </div>

                <div className="one">
                    <div className="box1">
                        <img src={img2} alt="" style={{ backgroundColor: "grey" }} />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 50% OFF</button>
                        <h3>Classic Wooden Dining Table</h3>
                    </div>
                </div>

                <div className="one">
                    <div className="box1">
                        <img src={img3} alt="" />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 70% OFF</button>
                        <h3>Modern Luxury Bedroom</h3>
                    </div>
                </div>

                <div className="one">
                    <div className="box1">
                        <img src={img4} alt="" />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 30% OFF</button>
                        <h3>Cozy Comfort Sofa</h3>
                    </div>
                </div>

                <div className="two">
                    <div className="box1">
                        <img src={img5} alt="" />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 29% OFF</button>
                        <h3>Minimalist Green Sofa</h3>
                    </div>
                </div>

                <div className="two">
                    <div className="box1">
                        <img src={img6} alt="" style={{ backgroundColor: "grey" }} />
                        <button >
                            Buy me !
                        </button>
                        <button id="but">Flat 45% OFF</button>
                        <h3>Premium Lounge Armchair</h3>
                    </div>
                </div>

                <div className="two">
                    <div className="box1">
                        <img src={img7} alt="" />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 80% OFF</button>
                        <h3>Decent Living Room Set</h3>
                    </div>
                </div>

                <div className="two">
                    <div className="box1">
                        <img src={img8} alt="" />
                        <button>
                            Buy me !
                        </button>
                        <button id="but">Flat 30% OFF</button>
                        <h3>Luxury Accent Chair Set</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingSales;