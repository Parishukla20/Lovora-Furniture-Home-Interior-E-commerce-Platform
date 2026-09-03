import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/Crockery1.webp";
import img2 from "../assets/IMAGES/Crockery2.jpg";
import img3 from "../assets/IMAGES/Crockery3.jpg";
import img4 from "../assets/IMAGES/Crockery4.jpg";
import img5 from "../assets/IMAGES/Crockery5.jpg";
import img6 from "../assets/IMAGES/Crockery6.jpg";
import img7 from "../assets/IMAGES/Crockery7.webp";
import img8 from "../assets/IMAGES/Crockery8.jpg";
import img9 from "../assets/IMAGES/Crockery9.webp";
import img10 from "../assets/IMAGES/Crockery10.avif";
import img11 from "../assets/IMAGES/Crockery12.webp";
import img12 from "../assets/IMAGES/Crockery11.webp";
import img13 from "../assets/IMAGES/Crockery13.webp";
import img14 from "../assets/IMAGES/Crockery14.webp";
import img15 from "../assets/IMAGES/Crockery15.jpg";

const CrockerySection = () => {
        const { toggleWishlist, isWishlisted } = useWishlist();
        const { addToCart, removeFromCart, isInCart } = useCart();
        const p1 = { id: 71, name: "Blue Floral Opalware Dinner Set", img: img1, price: 3319, cutPrice: 3999, discount: "17% OFF" };
        const p2 = { id: 72, name: "Water Pitcher with Glasses Set", img: img2, price: 2174, cutPrice: 2499, discount: "13% OFF" };
        const p3 = { id: 73, name: "Royal Gold China Dinnerware Set", img: img3, price: 4139, cutPrice: 4139, discount: "8% OFF" };
        const p4 = { id: 74, name: "Airtight Fridge Storage Container Set", img: img4, price: 1208, cutPrice: 1299, discount: "7% OFF" };
        const p5 = { id: 75, name: "Floral Ceramic Dinner Plate Set", img: img5, price: 4749, cutPrice: 4999, discount: "5% OFF" };
        const p6 = { id: 76, name: "Pull-Out Cabinet Plate Organizer", img: img6, price: 4799, cutPrice: 4999, discount: "4% OFF" };
        const p7 = { id: 77, name: "Pastel Floral Ceramic Mugs", img: img7, price: 2374, cutPrice: 2499, discount: "5% OFF" };
        const p8 = { id: 78, name: "Crystal Glass Champagne Set", img: img8, price: 3254, cutPrice: 3499, discount: "7% OFF" };
        const p9 = { id: 79, name: "Premium Stainless Steel Fork Set", img: img9, price: 1879, cutPrice: 1999, discount: "6% OFF" };
        const p10 = { id: 80, name: "Floral Print Ceramic Bowls", img: img10, price: 2429, cutPrice: 2999, discount: "19% OFF" };
        const p11 = { id: 81, name: "Stainless Steel Grinder Jars Set", img: img11, price: 4549, cutPrice: 4999, discount: "9% OFF" };
        const p12 = { id: 82, name: "White Ceramic Teapot & Cup Set", img: img12, price: 2849, cutPrice: 2999, discount: "5% OFF" };
        const p13 = { id: 83, name: "Royal Blue & Gold Porcelain Dinner Set", img: img13, price: 22999, cutPrice: 24999, discount: "8% OFF" };
        const p14 = { id: 84, name: "Premium Crystal Wine Glass Set", img: img14, price: 6649, cutPrice: 6999, discount: "5% OFF" };
        const p15 = { id: 85, name: "Luxury Embossed White Dinnerware Set", img: img15, price: 14559, cutPrice: 15999, discount: "9% OFF" };
    return (
        <div>
            <div className="heads">
                <h1>CROCKERY COLLECTION</h1>
                <p>Premium dinnerware sets crafted for elegant hosting and everyday fine dining.</p>
            </div>
            <div className="cards-one">

                <div className="cards">
                    <div className="upper">
                        <img src={img1} alt="img loading" />
                    </div>
                    <div className="lower">
                        <h3>Blue Floral Opalware Dinner Set <i
                            className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
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
                        <h3>Water Pitcher with Glasses Set <i
                            className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "150px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p2)}
                        ></i></h3>
                        <h2>&#8377;2,174</h2>
                        <p className="cut">&#8377;2,499</p>
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
                        <h3>Royal Gold China Dinnerware Set <i
                            className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "120px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p3)}
                        ></i></h3>
                        <h2>&#8377;4,139</h2>
                        <p className="cut">&#8377;4,499</p>
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
                        <h3>Airtight Fridge Storage Container Set <i
                            className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "90px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p4)}
                        ></i></h3>
                        <h2>&#8377;1,208</h2>
                        <p className="cut">&#8377;1,299</p>
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
                        <h3>Floral Ceramic Dinner Plate Set <i
                            className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "135px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p5)}
                        ></i></h3>
                        <h2>&#8377;4,749</h2>
                        <p className="cut">&#8377;4,999</p>
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
                        <h3>Pull-Out Cabinet Plate Organizer <i
                            className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "120px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p6)}
                        ></i></h3>
                        <h2>&#8377;4,799</h2>
                        <p className="cut">&#8377;4,999</p>
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
                        <h3>Pastel Floral Ceramic Mugs <i
                            className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "165px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p7)}
                        ></i></h3>
                        <h2>&#8377;2,374</h2>
                        <p className="cut">&#8377;2,499</p>
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
                        <h3>Crystal Glass Champagne Set <i
                            className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "150px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p8)}
                        ></i></h3>
                        <h2>&#8377;3,254</h2>
                        <p className="cut">&#8377;3,499</p>
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
                        <h3>Premium Stainless Steel Fork Set <i
                            className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "120px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p9)}
                        ></i></h3>
                        <h2>&#8377;1,879</h2>
                        <p className="cut">&#8377;1,999</p>
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
                        <h3>Floral Print Ceramic Bowls <i
                            className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "170px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p10)}
                        ></i></h3>
                        <h2>&#8377;2,429</h2>
                        <p className="cut">&#8377;2,999</p>
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
                        <h3>Stainless Steel Grinder Jars Set <i
                            className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "140px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p11)}
                        ></i></h3>
                        <h2>&#8377;4,549</h2>
                        <p className="cut">&#8377;4,999</p>
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
                        <h3>White Ceramic Teapot & Cup Set <i
                            className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "120px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p12)}
                        ></i></h3>
                        <h2>&#8377;2,849</h2>
                        <p className="cut">&#8377;2,999</p>
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
                        <h3>Royal Blue & Gold Porcelain Dinner Set <i
                            className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "70px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p13)}
                        ></i></h3>
                        <h2>&#8377;22,999</h2>
                        <p className="cut">&#8377;24,999</p>
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
                        <h3>Premium Crystal Wine Glass Set <i
                            className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "130px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p14)}
                        ></i></h3>
                        <h2>&#8377;6,649</h2>
                        <p className="cut">&#8377;6,999</p>
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
                        <h3>Luxury Embossed White Dinnerware Set <i
                            className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            style={{ marginLeft: "60px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
                            onClick={() => toggleWishlist(p15)}
                        ></i></h3>
                        <h2>&#8377;14,559</h2>
                        <p className="cut">&#8377;15,999</p>
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

export default CrockerySection