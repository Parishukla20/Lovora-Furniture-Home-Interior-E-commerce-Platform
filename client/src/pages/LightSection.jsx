import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/Light1.webp";
import img2 from "../assets/IMAGES/Light2.png";
import img3 from "../assets/IMAGES/Light3.webp";
import img4 from "../assets/IMAGES/Light4.webp";
import img5 from "../assets/IMAGES/Light5.jpg";
import img6 from "../assets/IMAGES/Light6.jpg";
import img7 from "../assets/IMAGES/Light7.jpg";
import img8 from "../assets/IMAGES/Light8.jpg";
import img9 from "../assets/IMAGES/Light9.jpg";
import img10 from "../assets/IMAGES/Light10.jpg";
import img11 from "../assets/IMAGES/Light11.jpg";
import img12 from "../assets/IMAGES/Light12.jpg";
import img13 from "../assets/IMAGES/Light13.jpg";
import img14 from "../assets/IMAGES/Light14.jpg";
import img15 from "../assets/IMAGES/Light15.avif";

const LightSection = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const p1 = { id: 11, name: "Classic Lantern Wall Sconce", img: img1, price: 3599, cutPrice: 4499, discount: "20% OFF" };
  const p2 = { id: 12, name: "Frosted Glass Floor Lanterns", img: img2, price: 6399, cutPrice: 7999, discount: "20% OFF" };
  const p3 = { id: 13, name: "Adjustable Gooseneck Desk Lamp", img: img3, price: 2799, cutPrice: 3499, discount: "20% OFF" };
  const p4 = { id: 14, name: "Orange Neon Light Wire", img: img4, price: 2199, cutPrice: 2799, discount: "21% OFF" };
  const p5 = { id: 15, name: "Pink Swirl Mushroom Table Lamp", img: img5, price: 3499, cutPrice: 4299, discount: "19% OFF" };
  const p6 = { id: 16, name: "RGB Ambient Gaming Room Lights", img: img6, price: 5999, cutPrice: 7499, discount: "20% OFF" };
  const p7 = { id: 17, name: "Crystal Flush Mount Ceiling Light", img: img7, price: 18499, cutPrice: 22999, discount: "20% OFF" };
  const p8 = { id: 18, name: "Luxury Cascading Chandelier", img: img8, price: 8999, cutPrice: 11999, discount: "25% OFF" };
  const p9 = { id: 19, name: "Warm Indirect Ceiling Cove Strip Light", img: img9, price: 3299, cutPrice: 4199, discount: "21% OFF" };
  const p10 = { id: 20, name: "Hanging Globe Pendant Light", img: img10, price: 8999, cutPrice: 11499, discount: "22% OFF" };
  const p11 = { id: 21, name: "Faux Ivy Fairy String Lights", img: img11, price: 1499, cutPrice: 1999, discount: "25% OFF" };
  const p12 = { id: 22, name: "Multi-Style Metallic Pendant Light", img: img12, price: 6499, cutPrice: 8499, discount: "24% OFF" };
  const p13 = { id: 23, name: "Modern Bedside Table Lamp", img: img13, price: 4299, cutPrice: 5499, discount: "22% OFF" };
  const p14 = { id: 24, name: "Office Premium Dim Lights", img: img14, price: 12999, cutPrice: 16999, discount: "5% OFF" };
  const p15 = { id: 25, name: "LED Ring Light", img: img15, price: 3999, cutPrice: 4999, discount: "20% OFF" };
  return (
    <div>
      <div className="heads">
        <h1>LIGHT COLLECTION</h1>
        <p>Explore Our Premium Lighting Collection – Discover elegant, ambient, and modern lighting crafted to illuminate every space in your home.</p>
      </div>
      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img1} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Classic Lantern Wall Sconce  <i
              className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "165px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p1)}
            ></i></h3>
            <h2>&#8377;3,599</h2>
            <p className="cut">&#8377;4,499</p>
            <p className="off">20% OFF</p>
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
            <h3>Frosted Glass Floor Lanterns <i
              className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p2)}
            ></i></h3>
            <h2>&#8377;6,399</h2>
            <p className="cut">&#8377;7,999</p>
            <p className="off">20% OFF</p>
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
            <h3>Adjustable Gooseneck Desk Lamp <i
              className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "120px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p3)}
            ></i></h3>
            <h2>&#8377;2,799</h2>
            <p className="cut">&#8377;3,499</p>
            <p className="off">20% OFF</p>
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

      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img4} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Orange Neon Light Wire <i
              className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "190px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p4)}
            ></i></h3>
            <h2>&#8377;2,199</h2>
            <p className="cut">&#8377;2,799</p>
            <p className="off">21% OFF</p>
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
            <h3>Pink Swirl Mushroom Table Lamp <i
              className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "110px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p5)}
            ></i></h3>
            <h2>&#8377;3,499</h2>
            <p className="cut">&#8377;4,299</p>
            <p className="off">19% OFF</p>
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
            <h3>RGB Ambient Gaming Room Lights <i
              className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "100px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p6)}
            ></i></h3>
            <h2>&#8377;5,999</h2>
            <p className="cut">&#8377;7,499</p>
            <p className="off">20% OFF</p>
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


      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img7} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Crystal Flush Mount Ceiling Light <i
              className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "110px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p7)}
            ></i></h3>
            <h2>&#8377;18,499</h2>
            <p className="cut">&#8377;22,999</p>
            <p className="off">20% OFF</p>
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
            <h3>Luxury Cascading Chandelier <i
              className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "150px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p8)}
            ></i></h3>
            <h2>&#8377;8,999</h2>
            <p className="cut">&#8377;11,999</p>
            <p className="off">25% OFF</p>
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
            <h3>Warm Indirect Ceiling Cove Strip Light <i
              className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "70px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p9)}
            ></i></h3>
            <h2>&#8377;3,299</h2>
            <p className="cut">&#8377;4,199</p>
            <p className="off">21% OFF</p>
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


      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img10} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Hanging Globe Pendant Light <i
              className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "150px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p10)}
            ></i></h3>
            <h2>&#8377;8,999</h2>
            <p className="cut">&#8377;11,499</p>
            <p className="off">22% OFF</p>
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
            <h3>Faux Ivy Fairy String Lights <i
              className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p11)}
            ></i></h3>
            <h2>&#8377;1,499</h2>
            <p className="cut">&#8377;1,999</p>
            <p className="off">25% OFF</p>
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
            <h3>Multi-Style Metallic Pendant Light <i
              className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "110px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p12)}
            ></i></h3>
            <h2>&#8377;6,499</h2>
            <p className="cut">&#8377;8,499</p>
            <p className="off">24% OFF</p>
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



      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img13} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Modern Bedside Table Lamp <i
              className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p13)}
            ></i></h3>
            <h2>&#8377;4,299</h2>
            <p className="cut">&#8377;5,499</p>
            <p className="off">22% OFF</p>
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
            <h3>Office Premium Dim Lights <i
              className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "170px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p14)}
            ></i></h3>
            <h2>&#8377;12,999</h2>
            <p className="cut">&#8377;16,999</p>
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
            <h3>LED Ring Light <i
              className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "260px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p15)}
            ></i></h3>
            <h2>&#8377;3,999</h2>
            <p className="cut">&#8377;4,999</p>
            <p className="off">20% OFF</p>
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
  )
}

export default LightSection