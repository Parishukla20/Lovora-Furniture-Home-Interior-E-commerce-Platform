import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/Clock1.jpg";
import img2 from "../assets/IMAGES/Clock2.jpg";
import img3 from "../assets/IMAGES/Clock3.jpg";
import img4 from "../assets/IMAGES/Clock4.jpg";
import img5 from "../assets/IMAGES/Clock5.jpg";
import img6 from "../assets/IMAGES/Clock6.jpg";
import img7 from "../assets/IMAGES/Clock7.jpg";
import img8 from "../assets/IMAGES/Clock8.jpg";
import img9 from "../assets/IMAGES/Clock9.jpg";
import img10 from "../assets/IMAGES/Clock10.webp";
import img11 from "../assets/IMAGES/Clock11.jpg";
import img12 from "../assets/IMAGES/Clock12.jpg";
import img13 from "../assets/IMAGES/Clock13.jpg";
import img14 from "../assets/IMAGES/Clock14.jpg";
import img15 from "../assets/IMAGES/Clock15.jpg";
const ClockSection = () => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const { addToCart, removeFromCart, isInCart } = useCart();
        const p1 = { id: 61, name: "Gold Mirrored Roman Wall Clock", img: img1, price: 3319, cutPrice: 3999, discount: "17% OFF" };
        const p2 = { id: 62, name: "Digital Wall Clock with Ambient LED", img: img2, price: 3044, cutPrice: 3499, discount: "13% OFF" };
        const p3 = { id: 63, name: "Smart Bedside Display Speaker Clock", img: img3, price: 6439, cutPrice: 6999, discount: "8% OFF" };
        const p4 = { id: 64, name: "Wooden Pendulum Clock", img: img4, price: 35340, cutPrice: 38000, discount: "7% OFF" };
        const p5 = { id: 65, name: "Heavy Brass Mantel Clock", img: img5, price: 20900, cutPrice: 22000, discount: "5% OFF" };
        const p6 = { id: 66, name: "Deer Resin Wall Art Clock", img: img6, price: 17280, cutPrice: 18000, discount: "4% OFF" };
        const p7 = { id: 67, name: "Cute Milk Cartoon Digital Clock", img: img7, price: 2849, cutPrice: 2999, discount: "5% OFF" };
        const p8 = { id: 68, name: "Peacock Metal Art Wall Clock", img: img8, price: 12089, cutPrice: 12999, discount: "7% OFF" };
        const p9 = { id: 69, name: "Duck Silicone Night Light Clock", img: img9, price: 2349, cutPrice: 2499, discount: "6% OFF" };
        const p10 = { id: 70, name: "Crystal Gold Table Clock", img: img10, price: 14580, cutPrice: 18000, discount: "19% OFF" };
        const p11 = { id: 71, name: "Backlit Moon Wall Clock", img: img11, price: 13650, cutPrice: 15000, discount: "9% OFF" };
        const p12 = { id: 72, name: "3D LED Digital Desk Clock", img: img12, price: 3325, cutPrice: 3500, discount: "5% OFF" };
        const p13 = { id: 73, name: "Sunburst Metal Wall Clock", img: img13, price: 9199, cutPrice: 9999, discount: "8% OFF" };
        const p14 = { id: 74, name: "Carved Baroque Gold Clock", img: img14, price: 20900, cutPrice: 22000, discount: "5% OFF" };
        const p15 = { id: 75, name: "Melting Dali Desk Clock", img: img15, price: 4095, cutPrice: 4095, discount: "9% OFF" };
    return (
        <div>
            <div className="heads">
                <h1>PREMIUM CLOCK COLLECTION</h1>
                <p>Elevate your walls with clocks featuring timeless designs crafted for modern interiors.</p>
            </div>
            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Gold Mirrored Roman Wall Clock <i
                            className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "120px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p1)}
                        ></i></h3>
                        <h2>&#8377;3,319</h2>
                        <p className="cut">&#8377;3,999</p>
                        <p className="off">17% OFF</p>
                        <br />
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
                        <h3>Digital Wall Clock with Ambient LED <i
                            className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "90px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p2)}
                        ></i></h3>
                        <h2>&#8377;3,044</h2>
                        <p className="cut">&#8377;3,499</p>
                        <p className="off">13% OFF</p>
                        <br />
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
                        <h3>Smart Bedside Display Speaker Clock <i
                            className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "90px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p3)}
                        ></i></h3>
                        <h2>&#8377;6,439</h2>
                        <p className="cut">&#8377;6,999</p>
                        <p className="off">8% OFF</p>
                        <br />
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

            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img4} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Wooden Pendulum Clock <i
                            className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "190px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p4)}
                        ></i></h3>
                        <h2>&#8377;35,340</h2>
                        <p className="cut">&#8377;38,000</p>
                        <p className="off">7% OFF</p>
                        <br />
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
                        <h3>Heavy Brass Mantel Clock <i
                            className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "180px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p5)}
                        ></i></h3>
                        <h2>&#8377;20,900</h2>
                        <p className="cut">&#8377;22,000</p>
                        <p className="off">5% OFF</p>
                        <br />
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
                        <h3>Deer Resin Wall Art Clock <i
                            className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "180px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p6)}
                        ></i></h3>
                        <h2>&#8377;17,280</h2>
                        <p className="cut">&#8377;18,000</p>
                        <p className="off">4% OFF</p>
                        <br />
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


            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img7} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Cute Milk Cartoon Digital Clock <i
                            className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p7)}
                        ></i></h3>
                        <h2>&#8377;2,849</h2>
                        <p className="cut">&#8377;2,999</p>
                        <p className="off">5% OFF</p>
                        <br />
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
                        <h3>Peacock Metal Art Wall Clock <i
                            className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "150px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p8)}
                        ></i></h3>
                        <h2>&#8377;12,089</h2>
                        <p className="cut">&#8377;12,999</p>
                        <p className="off">7% OFF</p>
                        <br />
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
                        <h3>Duck Silicone Night Light Clock <i
                            className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p9)}
                        ></i></h3>
                        <h2>&#8377;2,349</h2>
                        <p className="cut">&#8377;2,499</p>
                        <p className="off">6% OFF</p>
                        <br />
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


            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img10} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Crystal Gold Table Clock <i
                            className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "190px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p10)}
                        ></i></h3>
                        <h2>&#8377;14,580</h2>
                        <p className="cut">&#8377;18,000</p>
                        <p className="off">19% OFF</p>
                        <br />
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
                        <h3>Backlit Moon Wall Clock <i
                            className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "190px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p11)}
                        ></i></h3>
                        <h2>&#8377;13,650</h2>
                        <p className="cut">&#8377;15,000</p>
                        <p className="off">9% OFF</p>
                        <br />
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
                        <h3>3D LED Digital Desk Clock <i
                            className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p12)}
                        ></i></h3>
                        <h2>&#8377;3,325</h2>
                        <p className="cut">&#8377;3,500</p>
                        <p className="off">5% OFF</p>
                        <br />
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



            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img13} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Sunburst Metal Wall Clock <i
                            className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p13)}
                        ></i></h3>
                        <h2>&#8377;9,199</h2>
                        <p className="cut">&#8377;9,999</p>
                        <p className="off">8% OFF</p>
                        <br />
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
                        <h3>Carved Baroque Gold Clock <i
                            className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "160px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p14)}
                        ></i></h3>
                        <h2>&#8377;20,900</h2>
                        <p className="cut">&#8377;22,000</p>
                        <p className="off">5% OFF</p>
                        <br />
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
                        <h3>Melting Dali Desk Clock <i
                            className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "195px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p15)}
                        ></i></h3>
                        <h2>&#8377;4,095</h2>
                        <p className="cut">&#8377;4,500</p>
                        <p className="off">9% OFF</p>
                        <br />
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
    )
}

export default ClockSection