import React from "react";
import { useWishlist } from "./WishlistContext";
import img1 from "../assets/IMAGES/Chair2.avif";
import img2 from "../assets/IMAGES/Chair3.jpg";
import img3 from "../assets/IMAGES/Chair1.jpg";
import img4 from "../assets/IMAGES/Chair4.jpg";
import img5 from "../assets/IMAGES/Chair5.webp";
import img6 from "../assets/IMAGES/Chair7.jpg";
import img7 from "../assets/IMAGES/Chair8.jpg";
import img8 from "../assets/IMAGES/Chair6.jpg";
import img9 from "../assets/IMAGES/Chair9.jpg";
import img10 from "../assets/IMAGES/Chair10.jpg";
import img11 from  "../assets/IMAGES/Chair11.jpg";
import img12 from "../assets/IMAGES/Chair12.jpg";
import img13 from "../assets/IMAGES/Chair13.jpg";
import img14 from "../assets/IMAGES/Chair14.jpg";
import img15 from "../assets/IMAGES/Chair15.jpg";

const ChairSection = () => {
    const { toggleWishlist, isWishlisted } = useWishlist();

    const p1 = { id: 101, name: "Jensen Dining Table Set", img: img1, price: 15000, cutPrice: 18000, discount: "17% OFF" };
    const p2 = { id: 102, name: "Dining Room Table Set", img: img2, price: 20000, cutPrice: 23000, discount: "13% OFF" };
    const p3 = { id: 103, name: "Luxe Round Glass Dining Set", img: img3, price: 35000, cutPrice: 38000, discount: "8% OFF" };
    const p4 = { id: 104, name: "Outdoor Patio Dining Table Set", img: img4, price: 43000, cutPrice: 46000, discount: "7% OFF" };
    const p5 = { id: 105, name: "Premium Kitchen Table Set", img: img5, price: 54000, cutPrice: 57000, discount: "5% OFF" };
    const p6 = { id: 106, name: "Luxury Room Chairs", img: img6, price: 71000, cutPrice: 74000, discount: "4% OFF" };
    const p7 = { id: 107, name: "Grey Modern Chairs", img: img7, price: 61000, cutPrice: 64000, discount: "5% OFF" };
    const p8 = { id: 108, name: "Classic Dining Chair Set", img: img8, price: 38000, cutPrice: 41000, discount: "7% OFF" };
    const p9 = { id: 109, name: "Casa Padrino Luxus Dining Set", img: img9, price: 44000, cutPrice: 47000, discount: "6% OFF" };
    const p10 = { id: 110, name: "Quilted Modern Bistro Set", img: img10, price: 13000, cutPrice: 16000, discount: "19% OFF" };
    const p11 = { id: 111, name: "Al Fresco 8-Seater Patio Set", img: img11, price: 32000, cutPrice: 35000, discount: "9% OFF" };
    const p12 = { id: 112, name: "Luxe Braided Bar Stool Set", img: img12, price: 16000, cutPrice: 19000, discount: "16% OFF" };
    const p13 = { id: 113, name: "Imperial Marble Dining Set", img: img13, price: 34000, cutPrice: 37000, discount: "8% OFF" };
    const p14 = { id: 114, name: "Office Premium Comfy Set", img: img14, price: 62000, cutPrice: 65000, discount: "5% OFF" };
    const p15 = { id: 115, name: "Blueish Clinic Chair Set", img: img15, price: 29000, cutPrice: 32000, discount: "9% OFF" };

    return (
        <div>
            <div className="heads">
                <h1>CHAIR COLLECTION</h1>
                <p>Explore Our Premium Chair Collection – Discover stylish, comfortable, and expertly crafted chairs designed to complement every home and lifestyle.</p>
            </div>

            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Jensen Dining Table Set 
                            <i 
                                className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "200px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p1)}
                            ></i>
                        </h3>
                        <h2>&#8377;15,000</h2>
                        <p className="cut">&#8377;18,000</p>
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
                        <h3>Dining Room Table Set 
                            <i 
                                className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "210px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p2)}
                            ></i>
                        </h3>
                        <h2>&#8377;20,000</h2>
                        <p className="cut">&#8377;23,000</p>
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
                        <h3>Luxe Round Glass Dining Set 
                            <i 
                                className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "160px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p3)}
                            ></i>
                        </h3>
                        <h2>&#8377;35,000</h2>
                        <p className="cut">&#8377;38,000</p>
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

            {/* Row 2 */}
            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img4} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Outdoor Patio Dining Table Set 
                            <i 
                                className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "140px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p4)}
                            ></i>
                        </h3>
                        <h2>&#8377;43,000</h2>
                        <p className="cut">&#8377;46,000</p>
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
                        <h3>Premium Kitchen Table Set 
                            <i 
                                className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "170px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p5)}
                            ></i>
                        </h3>
                        <h2>&#8377;54,000</h2>
                        <p className="cut">&#8377;57,000</p>
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
                        <h3>Luxury Room Chairs 
                            <i 
                                className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "220px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p6)}
                            ></i>
                        </h3>
                        <h2>&#8377;71,000</h2>
                        <p className="cut">&#8377;74,000</p>
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

            {/* Row 3 */}
            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img7} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Grey Modern Chairs 
                            <i 
                                className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "230px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p7)}
                            ></i>
                        </h3>
                        <h2>&#8377;61,000</h2>
                        <p className="cut">&#8377;64,000</p>
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
                        <h3>Classic Dining Chair Set 
                            <i 
                                className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "200px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p8)}
                            ></i>
                        </h3>
                        <h2>&#8377;38,000</h2>
                        <p className="cut">&#8377;41,000</p>
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
                        <h3>Casa Padrino Luxus Dining Set
                            <i 
                                className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "150px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p9)}
                            ></i>
                        </h3>
                        <h2>&#8377;44,000</h2>
                        <p className="cut">&#8377;47,000</p>
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

            {/* Row 4 */}
            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img10} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Quilted Modern Bistro Set 
                            <i 
                                className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "180px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p10)}
                            ></i>
                        </h3>
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
                        <h3>Al Fresco 8-Seater Patio Set 
                            <i 
                                className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "170px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p11)}
                            ></i>
                        </h3>
                        <h2>&#8377;32,000</h2>
                        <p className="cut">&#8377;35,000</p>
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
                        <h3>Luxe Braided Bar Stool Set 
                            <i 
                                className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "170px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p12)}
                            ></i>
                        </h3>
                        <h2>&#8377;16,000</h2>
                        <p className="cut">&#8377;19,000</p>
                        <p className="off">16% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p12)}>
                            {isWishlisted(p12.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button type="submit">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Row 5 */}
            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img13} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Imperial Marble Dining Set 
                            <i 
                                className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "170px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p13)}
                            ></i>
                        </h3>
                        <h2>&#8377;34,000</h2>
                        <p className="cut">&#8377;37,000</p>
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
                        <h3>Office Premium Comfy Set 
                            <i 
                                className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "180px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p14)}
                            ></i>
                        </h3>
                        <h2>&#8377;62,000</h2>
                        <p className="cut">&#8377;65,000</p>
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
                        <h3>Blueish Clinic Chair Set 
                            <i 
                                className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} 
                                style={{ marginLeft: "200px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p15)}
                            ></i>
                        </h3>
                        <h2>&#8377;29,000</h2>
                        <p className="cut">&#8377;32,000</p>
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
    );
};

export default ChairSection;