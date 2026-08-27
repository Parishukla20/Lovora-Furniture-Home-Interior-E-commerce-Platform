import React from "react";
import { useWishlist } from "./WishlistContext";
import img1 from "../assets/IMAGES/Interior1.jpeg";
import img2 from "../assets/IMAGES/Interior2.jpg";
import img3 from "../assets/IMAGES/Interior3.jpg";
import img4 from "../assets/IMAGES/Interior4.jpg";
import img5 from "../assets/IMAGES/Interior5.png";
import img6 from "../assets/IMAGES/Interior6.jpg";
import img7 from "../assets/IMAGES/Interior7.jpg";
import img8 from "../assets/IMAGES/Interior8.jpg";
import img9 from "../assets/IMAGES/Interior9.1.jpg";
import img10 from "../assets/IMAGES/Interior10.jpg";
import img11 from "../assets/IMAGES/Interior11.jpg";
import img12 from "../assets/IMAGES/Interior12.jpg";
import img13 from "../assets/IMAGES/Interior13.avif";
import img14 from "../assets/IMAGES/Interior14.jpg";
import img15 from "../assets/IMAGES/Interior15.jpg";

const InteriorSection = () => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const p1 = { id: 51, name: "Minimalist Ceramic Floor Planters Set", img: img1, price: 2974, cutPrice: 3499, discount: "15% OFF" };
    const p2 = { id: 52, name: "Artificial Wildflower Hanging Basket", img: img2, price: 1244, cutPrice: 1499, discount: "17% OFF" };
    const p3 = { id: 53, name: "Honeycomb Geometric Wall Mirror Set", img: img3, price: 2579, cutPrice: 2999, discount: "14% OFF" };
    const p4 = { id: 54, name: "Autumn Tree 5-Panel Wall Canvas Set", img: img4, price: 2124, cutPrice: 2499, discount: "15% OFF" };
    const p5 = { id: 55, name: "Elite Hexagonal Floating Shelves", img: img5, price: 1511, cutPrice: 1799, discount: "16% OFF" };
    const p6 = { id: 56, name: "Hanging Candle Lanterns", img: img6, price: 1847, cutPrice: 2199, discount: "16% OFF" };
    const p7 = { id: 57, name: "Golden Tree Branch Art", img: img7, price: 3359, cutPrice: 3999, discount: "16% OFF" };
    const p8 = { id: 58, name: "Crystal Tulip Flower Lamp", img: img8, price: 1304, cutPrice: 1499, discount: "13% OFF" };
    const p9 = { id: 59, name: "Heart Hanging Wind Chime", img: img9, price: 679, cutPrice: 799, discount: "15% OFF" };
    const p10 = { id: 60, name: "Multi-Circle Cluster Mirrors", img: img10, price: 3319, cutPrice: 3999, discount: "17% OFF" };
    const p11 = { id: 61, name: "Sticky Floral Wall Mandala", img: img11, price: 1019, cutPrice: 1199, discount: "15% OFF" };
    const p12 = { id: 62, name: "Butterfly Crystal Chandelier", img: img12, price: 18699, cutPrice: 21999, discount: "15% OFF" };
    const p13 = { id: 63, name: "Pink Butterfly Floral Installation", img: img13, price: 3219, cutPrice: 3499, discount: "8% OFF" };
    const p14 = { id: 64, name: "Eiffel Tower LED Lamps", img: img14, price: 1234, cutPrice: 1299, discount: "5% OFF" };
    const p15 = { id: 65, name: "Floral Curtain String Lights", img: img15, price: 1364, cutPrice: 1499, discount: "9% OFF" };
    return (
        <div>
            <div className="heads">
                <h1>INTERIOR DECOR COLLECTION</h1>
                <p>Discover beautiful interior décor designed to add style, personality, and a refined touch to your living spaces.</p>
            </div>
            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Minimalist Ceramic Floor Planters Set <i
                            className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "85px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p1)}
                        ></i></h3>
                        <h2>&#8377;2,974</h2>
                        <p className="cut">&#8377;3,499</p>
                        <p className="off">15% OFF</p>
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
                        <h3>Artificial Wildflower Hanging Basket <i
                            className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "100px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p2)}
                        ></i></h3>
                        <h2>&#8377;1,244</h2>
                        <p className="cut">&#8377;1,499</p>
                        <p className="off">17% OFF</p>
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
                        <h3>Honeycomb Geometric Wall Mirror Set <i
                            className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "80px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p3)}
                        ></i></h3>
                        <h2>&#8377;2,579</h2>
                        <p className="cut">&#8377;2,999</p>
                        <p className="off">14% OFF</p>
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
                        <h3>Autumn Tree 5-Panel Wall Canvas Set <i
                            className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "90px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p4)}
                        ></i></h3>
                        <h2>&#8377;2,124</h2>
                        <p className="cut">&#8377;2,499</p>
                        <p className="off">15% OFF</p>
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
                        <h3>Elite Hexagonal Floating Shelves <i
                            className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p5)}
                        ></i></h3>
                        <h2>&#8377;1,511</h2>
                        <p className="cut">&#8377;1,799</p>
                        <p className="off">16% OFF</p>
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
                        <h3>Hanging Candle Lanterns <i
                            className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "185px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p6)}
                        ></i></h3>
                        <h2>&#8377;1,847</h2>
                        <p className="cut">&#8377;2,199</p>
                        <p className="off">16% OFF</p>
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
                        <h3>Golden Tree Branch Art <i
                            className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "200px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p7)}
                        ></i></h3>
                        <h2>&#8377;3,359</h2>
                        <p className="cut">&#8377;3,999</p>
                        <p className="off">16% OFF</p>
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
                        <h3>Crystal Tulip Flower Lamp <i
                            className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p8)}
                        ></i></h3>
                        <h2>&#8377;1,304</h2>
                        <p className="cut">&#8377;1,499</p>
                        <p className="off">13% OFF</p>
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
                        <h3>Heart Hanging Wind Chime <i
                            className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "160px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p9)}
                        ></i></h3>
                        <h2>&#8377;679</h2>
                        <p className="cut">&#8377;799</p>
                        <p className="off">15% OFF</p>
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
                        <h3>Multi-Circle Cluster Mirrors <i
                            className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "160px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p10)}
                        ></i></h3>
                        <h2>&#8377;3,319</h2>
                        <p className="cut">&#8377;3,999</p>
                        <p className="off">17% OFF</p>
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
                        <h3>Sticky Floral Wall Mandala <i
                            className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p11)}
                        ></i></h3>
                        <h2>&#8377;1,019</h2>
                        <p className="cut">&#8377;1,199</p>
                        <p className="off">15% OFF</p>
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
                        <h3>Butterfly Crystal Chandelier <i
                            className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "160px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p12)}
                        ></i></h3>
                        <h2>&#8377;18,699</h2>
                        <p className="cut">&#8377;21,999</p>
                        <p className="off">15% OFF</p>
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
                        <h3>Pink Butterfly Floral Installation <i
                            className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p13)}
                        ></i></h3>
                        <h2>&#8377;3,219</h2>
                        <p className="cut">&#8377;3,499</p>
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
                        <h3>Eiffel Tower LED Lamps <i
                            className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "195px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p14)}
                        ></i></h3>
                        <h2>&#8377;1,234</h2>
                        <p className="cut">&#8377;1,299</p>
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
                        <h3>Floral Curtain String Lights <i
                            className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p15)}
                        ></i></h3>
                        <h2>&#8377;1,364</h2>
                        <p className="cut">&#8377;1,499</p>
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

export default InteriorSection