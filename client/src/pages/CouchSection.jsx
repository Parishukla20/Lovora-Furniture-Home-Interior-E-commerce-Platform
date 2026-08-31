import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/2076143.webp";
import img2 from "../assets/IMAGES/unique-living-room-furniture-2-750x563.jpg";
import img3 from "../assets/IMAGES/813AzaDU-nL.jpg";
import img4 from "../assets/IMAGES/ac3c8180-1915-4c7b-87c9-e70d0d769776.cd01a9a4cafb583826269df09cb3cbe1.avif";
import img5 from "../assets/IMAGES/91NlhIvGJML._AC_SL1500_.jpg";
import img6 from "../assets/IMAGES/cache-classical-luxury-style-handcrafted-french-sofa-set-chennai-(1).jpg";
import img7 from "../assets/IMAGES/convertible-modular-upholstered-sectional.jpg";
import img8 from "../assets/IMAGES/f6f77b4bd4387e5fbb06b5251cbd13e6.jpg";
import img9 from "../assets/IMAGES/unnamed.jpg";
import img10 from "../assets/IMAGES/f976673a689a5f7b9a657e2a8486dc70.png";
import img11 from "../assets/IMAGES/5285b019c33777ee1030c1f218d9dd9f.jpg";
import img12 from "../assets/IMAGES/862a9f105c608ace48c8fcc3956fd44e.jpg";
import img13 from "../assets/IMAGES/9b353c08189a8b9d77945e4cc86369e4.jpg";
import img14 from "../assets/IMAGES/outdoor-furniture.webp";
import img15 from "../assets/IMAGES/Better-Homes-Gardens-River-Oaks-3-Piece-Sofa-Nesting-Table-Set-with-Patio-Cover_972d94d7-cce3-46dd-a463-4fc449bbf8e8_4.45b1caf55978cad7f91e106de4e48411.avif";

const CouchSection = () => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const { addToCart, removeFromCart, isInCart } = useCart();
    const p1 = { id: 1, name: "Cozy Egg Lounge Chair", img: img1, price: 15000, cutPrice: 18000, discount: "17% OFF", margin: "200px" };
    const p2 = { id: 2, name: "Modern Accent Sofa", img: img2, price: 20000, cutPrice: 23000, discount: "13% OFF", margin: "230px" };
    const p3 = { id: 3, name: "Premium Barrel Chair Set", img: img3, price: 35000, cutPrice: 38000, discount: "8% OFF", margin: "180px" };
    const p4 = { id: 4, name: "Sky Blue L-Shaped Sofa", img: img4, price: 43000, cutPrice: 46000, discount: "7% OFF", margin: "200px" };
    const p5 = { id: 5, name: "Urban Corner Sectional Sofa", img: img5, price: 54000, cutPrice: 57000, discount: "5% OFF", margin: "160px" };
    const p6 = { id: 6, name: "Luxe Comfort Sofa Set", img: img6, price: 71000, cutPrice: 74000, discount: "4% OFF", margin: "210px" };
    const p7 = { id: 7, name: "Grey Modern Sofa", img: img7, price: 61000, cutPrice: 64000, discount: "5% OFF", margin: "240px" };
    const p8 = { id: 8, name: "Contemporary Curved Sofa", img: img8, price: 38000, cutPrice: 41000, discount: "7% OFF", margin: "170px" };
    const p9 = { id: 9, name: "Luxury Curved Corner Sofa", img: img9, price: 44000, cutPrice: 47000, discount: "6% OFF", margin: "170px" };
    const p10 = { id: 10, name: "Woven Nest Chair", img: img10, price: 13000, cutPrice: 16000, discount: "19% OFF", margin: "240px" };
    const p11 = { id: 11, name: "Minimal White Sofa", img: img11, price: 32000, cutPrice: 35000, discount: "9% OFF", margin: "230px" };
    const p12 = { id: 12, name: "Kids Cozy Sofa", img: img12, price: 65000, cutPrice: 68000, discount: "5% OFF", margin: "270px" };
    const p13 = { id: 13, name: "Modern Accent Sofa", img: img13, price: 34000, cutPrice: 37000, discount: "8% OFF", margin: "230px" };
    const p14 = { id: 14, name: "Outdoor Patio Sofa Set", img: img14, price: 62000, cutPrice: 65000, discount: "5% OFF", margin: "210px" };
    const p15 = { id: 15, name: "Garden Wicker Sofa", img: img15, price: 29000, cutPrice: 32000, discount: "9% OFF", margin: "220px" };

    return (
        <div>
            <div className="heads">
                <h1>COUCH COLLECTION</h1>
                <p>Explore a wide range of modern, premium-quality couches for every lifestyle and budget.</p>
            </div>

            <div className="cards-one">
                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Cozy Egg Lounge Chair
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p1.id)) {
                                    removeFromCart(p1.id);
                                } else {
                                    addToCart(p1);
                                }
                            }}
                        >
                            {isInCart(p1.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img2} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Modern Accent Sofa
                            <i
                                className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "230px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p2.id)) {
                                    removeFromCart(p2.id);
                                } else {
                                    addToCart(p2);
                                }
                            }}
                        >
                            {isInCart(p2.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img3} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Premium Barrel Chair Set
                            <i
                                className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "180px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p3.id)) {
                                    removeFromCart(p3.id);
                                } else {
                                    addToCart(p3);
                                }
                            }}
                        >
                            {isInCart(p3.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
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
                        <h3>Sky Blue L-Shaped Sofa
                            <i
                                className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "200px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p4.id)) {
                                    removeFromCart(p4.id);
                                } else {
                                    addToCart(p4);
                                }
                            }}
                        >
                            {isInCart(p4.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img5} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Urban Corner Sectional Sofa
                            <i
                                className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "160px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p5.id)) {
                                    removeFromCart(p5.id);
                                } else {
                                    addToCart(p5);
                                }
                            }}
                        >
                            {isInCart(p5.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img6} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Luxe Comfort Sofa Set
                            <i
                                className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "210px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p6.id)) {
                                    removeFromCart(p6.id);
                                } else {
                                    addToCart(p6);
                                }
                            }}
                        >
                            {isInCart(p6.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
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
                        <h3>Grey Modern Sofa
                            <i
                                className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "240px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p7.id)) {
                                    removeFromCart(p7.id);
                                } else {
                                    addToCart(p7);
                                }
                            }}
                        >
                            {isInCart(p7.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img8} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Contemporary Curved Sofa
                            <i
                                className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "170px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p8.id)) {
                                    removeFromCart(p8.id);
                                } else {
                                    addToCart(p8);
                                }
                            }}
                        >
                            {isInCart(p8.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img9} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Luxury Curved Corner Sofa
                            <i
                                className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "165px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p9.id)) {
                                    removeFromCart(p9.id);
                                } else {
                                    addToCart(p9);
                                }
                            }}
                        >
                            {isInCart(p9.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
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
                        <h3>Woven Nest Chair
                            <i
                                className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "240px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p10.id)) {
                                    removeFromCart(p10.id);
                                } else {
                                    addToCart(p10);
                                }
                            }}
                        >
                            {isInCart(p10.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img11} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Minimal White Sofa
                            <i
                                className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "230px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p11.id)) {
                                    removeFromCart(p11.id);
                                } else {
                                    addToCart(p11);
                                }
                            }}
                        >
                            {isInCart(p11.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img12} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Kids Cozy Sofa
                            <i
                                className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "270px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                                onClick={() => toggleWishlist(p12)}
                            ></i>
                        </h3>
                        <h2>&#8377;65,000</h2>
                        <p className="cut">&#8377;68,000</p>
                        <p className="off">5% OFF</p>
                        <br /><br />
                        <button type="submit">Buy Now</button>
                        <button type="button" onClick={() => toggleWishlist(p12)}>
                            {isWishlisted(p12.id) ? "Remove Wishlist" : "Wishlist"}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p12.id)) {
                                    removeFromCart(p12.id);
                                } else {
                                    addToCart(p12);
                                }
                            }}
                        >
                            {isInCart(p12.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
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
                        <h3>Modern Accent Sofa
                            <i
                                className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "230px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p13.id)) {
                                    removeFromCart(p13.id);
                                } else {
                                    addToCart(p13);
                                }
                            }}
                        >
                            {isInCart(p13.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img14} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Outdoor Patio Sofa Set
                            <i
                                className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "210px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p14.id)) {
                                    removeFromCart(p14.id);
                                } else {
                                    addToCart(p14);
                                }
                            }}
                        >
                            {isInCart(p14.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="cards">
                    <div className="upper">
                        <img src={img15} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Garden Wicker Sofa
                            <i
                                className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                style={{ marginLeft: "230px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <button
                            type="button"
                            onClick={() => {
                                if (isInCart(p15.id)) {
                                    removeFromCart(p15.id);
                                } else {
                                    addToCart(p15);
                                }
                            }}
                        >
                            {isInCart(p15.id) ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouchSection;