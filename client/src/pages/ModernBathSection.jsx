import React from "react";
import { useWishlist } from "./WishlistContext";
import img1 from "../assets/IMAGES/Bath2.jpg";
import img2 from "../assets/IMAGES/Bath3.jpg";
import img3 from "../assets/IMAGES/Bath4.webp";
import img4 from "../assets/IMAGES/Bath5.webp";
import img5 from "../assets/IMAGES/Bath6.png";
import img6 from "../assets/IMAGES/Bath7.jpg";
import img7 from "../assets/IMAGES/Bath8.webp";
import img8 from "../assets/IMAGES/Bath9.jpg";
import img9 from "../assets/IMAGES/Bath10.jpg";
import img10 from "../assets/IMAGES/Bath12.jpg";
import img11 from "../assets/IMAGES/Bath13.webp";
import img12 from "../assets/IMAGES/Bath14.jpg";
import img13 from "../assets/IMAGES/Bath12.avif";
import img14 from "../assets/IMAGES/Bath16.jpg";
import img15 from "../assets/IMAGES/Bath15.avif";

const ModernBathSection = () => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const p1 = { id: 31, name: "Countertop Ceramic Basin Set", img: img1, price: 2904, cutPrice: 3499, discount: "17% OFF" };
    const p2 = { id: 32, name: "Grey Vanity Cabinet", img: img2, price: 10439, cutPrice: 11999, discount: "13% OFF" };
    const p3 = { id: 33, name: "Round Backlit LED Mirror", img: img3, price: 4139, cutPrice: 4499, discount: "8% OFF" };
    const p4 = { id: 34, name: "Digital Shower Panel", img: img4, price: 39989, cutPrice: 42999, discount: "7% OFF" };
    const p5 = { id: 35, name: "Steel Mixer Faucet", img: img5, price: 4749, cutPrice: 4999, discount: "5% OFF" };
    const p6 = { id: 36, name: "Modern Jacuzzi Tub", img: img6, price: 120000, cutPrice: 125000, discount: "4% OFF" };
    const p7 = { id: 37, name: "Sleek Ceramic One-Piece Commode", img: img7, price: 12349, cutPrice: 12999, discount: "5% OFF" };
    const p8 = { id: 38, name: "Backlit Niche Shelf Vanity", img: img8, price: 17669, cutPrice: 18999, discount: "7% OFF" };
    const p9 = { id: 39, name: "Automatic Washing Machine", img: img9, price: 36659, cutPrice: 38999, discount: "6% OFF" };
    const p10 = { id: 40, name: "Washroom Glass Seperater", img: img10, price: 13000, cutPrice: 16000, discount: "19% OFF" };
    const p11 = { id: 41, name: "High-Pressure Overhead Shower", img: img11, price: 7279, cutPrice: 7999, discount: "9% OFF" };
    const p12 = { id: 42, name: "Wall-Mount Corner Caddy Shelf", img: img12, price: 1234, cutPrice: 1299, discount: "5% OFF" };
    const p13 = { id: 43, name: "Multi-Mode Removeable Shower", img: img13, price: 1379, cutPrice: 1499, discount: "8% OFF" };
    const p14 = { id: 44, name: "Frosted Glass Shower Door", img: img14, price: 23749, cutPrice: 24999, discount: "5% OFF" };
    const p15 = { id: 45, name: "Automatic Jet Hand Dryer", img: img15, price: 8189, cutPrice: 8999, discount: "9% OFF" };
    return (
        <div>
            <div className="heads">
                <h1>MODERN BATH COLLECTION</h1>
                <p>Shop premium faucets, minimalist ceramics, and durable bath decor designed to blend effortless style with long-lasting quality.</p>
            </div>
            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Countertop Ceramic Basin Set <i
                            className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "150px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p1)}
                        ></i></h3>
                        <h2>&#8377;2,904</h2>
                        <p className="cut">&#8377;3,499</p>
                        <p className="off">17% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p1)}>
                            {isWishlisted(p1.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img2} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Grey Vanity Cabinet <i
                            className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "230px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p2)}
                        ></i></h3>
                        <h2>&#8377;10,439</h2>
                        <p className="cut">&#8377;11,999</p>
                        <p className="off">13% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p2)}>
                            {isWishlisted(p2.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img3} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Round Backlit LED Mirror <i
                            className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "180px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p3)}
                        ></i></h3>
                        <h2>&#8377;4,139</h2>
                        <p className="cut">&#8377;4,499</p>
                        <p className="off">8% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p3)}>
                            {isWishlisted(p3.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

            </div>

            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img4} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Digital Shower Panel <i
                            className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "225px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p4)}
                        ></i></h3>
                        <h2>&#8377;39,989</h2>
                        <p className="cut">&#8377;42,999</p>
                        <p className="off">7% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p4)}>
                            {isWishlisted(p4.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img5} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Steel Mixer Faucet <i
                            className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "240px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p5)}
                        ></i></h3>
                        <h2>&#8377;4,749</h2>
                        <p className="cut">&#8377;4,999</p>
                        <p className="off">5% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p5)}>
                            {isWishlisted(p5.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img6} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Modern Jacuzzi Tub <i
                            className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "230px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p6)}
                        ></i></h3>
                        <h2>&#8377;1,20,000</h2>
                        <p className="cut">&#8377;1,25,000</p>
                        <p className="off">4% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p6)}>
                            {isWishlisted(p6.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

            </div>


            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img7} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Sleek Ceramic One-Piece Commode <i
                            className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "100px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p7)}
                        ></i></h3>
                        <h2>&#8377;12,349</h2>
                        <p className="cut">&#8377;12,999</p>
                        <p className="off">5% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p7)}>
                            {isWishlisted(p7.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img8} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Backlit Niche Shelf Vanity <i
                            className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "180px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p8)}
                        ></i></h3>
                        <h2>&#8377;17,669</h2>
                        <p className="cut">&#8377;18,999</p>
                        <p className="off">7% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p8)}>
                            {isWishlisted(p8.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img9} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Automatic Washing Machine <i
                            className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "160px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p9)}
                        ></i></h3>
                        <h2>&#8377;36,659</h2>
                        <p className="cut">&#8377;38,999</p>
                        <p className="off">6% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p9)}>
                            {isWishlisted(p9.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

            </div>


            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img10} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Washroom Glass Seperater <i
                            className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p10)}
                        ></i></h3>
                        <h2>&#8377;13,000</h2>
                        <p className="cut">&#8377;16,000</p>
                        <p className="off">19% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p10)}>
                            {isWishlisted(p10.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img11} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>High-Pressure Overhead Shower <i
                            className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p11)}
                        ></i></h3>
                        <h2>&#8377;7,279</h2>
                        <p className="cut">&#8377;7,999</p>
                        <p className="off">9% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p11)}>
                            {isWishlisted(p11.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img12} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Wall-Mount Corner Caddy Shelf <i
                            className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p12)}
                        ></i></h3>
                        <h2>&#8377;1,234</h2>
                        <p className="cut">&#8377;1,299</p>
                        <p className="off">5% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p12)}>
                            {isWishlisted(p12.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

            </div>



            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img13} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Multi-Mode Removeable Shower <i
                            className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "125px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p13)}
                        ></i></h3>
                        <h2>&#8377;1,379</h2>
                        <p className="cut">&#8377;1,499</p>
                        <p className="off">8% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p13)}>
                            {isWishlisted(p13.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img14} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Frosted Glass Shower Door <i
                            className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p14)}
                        ></i></h3>
                        <h2>&#8377;23,749</h2>
                        <p className="cut">&#8377;24,999</p>
                        <p className="off">5% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p14)}>
                            {isWishlisted(p14.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img15} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Automatic Jet Hand Dryer <i
                            className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "175px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p15)}
                        ></i></h3>
                        <h2>&#8377;8,189</h2>
                        <p className="cut">&#8377;8,999</p>
                        <p className="off">9% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p15)}>
                            {isWishlisted(p15.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ModernBathSection