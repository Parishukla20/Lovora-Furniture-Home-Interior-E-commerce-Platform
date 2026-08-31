import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/Bed1.jpg";
import img2 from "../assets/IMAGES/Bed2.jpg";
import img3 from "../assets/IMAGES/Bed3.jpg";
import img4 from "../assets/IMAGES/Bed4.jpg";
import img5 from "../assets/IMAGES/thumb-1920-740968.jpg";
import img6 from "../assets/IMAGES/Bed6.jpg";
import img7 from "../assets/IMAGES/Bed7.jpg";
import img8 from "../assets/IMAGES/Bed8.webp";
import img9 from "../assets/IMAGES/Bed9.webp";
import img10 from "../assets/IMAGES/Bed10.jpg";
import img11 from "../assets/IMAGES/Bed11.jpg";
import img12 from "../assets/IMAGES/Bed12.webp";
import img13 from "../assets/IMAGES/Bed13.jpg";
import img14 from "../assets/IMAGES/Bed14.jpg";
import img15 from "../assets/IMAGES/Bed15.jpg";

const BedSection = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const p1 = { id: 41, name: "Aurora Velvet Upholstered Bed", img: img1, price: 32999, cutPrice: 38999, discount: "15% OFF" };
  const p2 = { id: 42, name: "Royal Canopy Luxury Bed", img: img2, price: 74999, cutPrice: 89999, discount: "17% OFF" };
  const p3 = { id: 43, name: "Nova LED Storage Bed", img: img3, price: 48999, cutPrice: 56999, discount: "14% OFF" };
  const p4 = { id: 44, name: "Wave Designer Platform Bed", img: img4, price: 92999, cutPrice: 109999, discount: "15% OFF" };
  const p5 = { id: 45, name: "Elite Tufted Upholstered Bed", img: img5, price: 41999, cutPrice: 49999, discount: "16% OFF" };
  const p6 = { id: 46, name: "Heritage Bookcase Storage Bed", img: img6, price: 79999, cutPrice: 94999, discount: "16% OFF" };
  const p7 = { id: 47, name: "Royal Princess Canopy Bed", img: img7, price: 69999, cutPrice: 82999, discount: "16% OFF" };
  const p8 = { id: 48, name: "Imperial Round Tufted Bed", img: img8, price: 129999, cutPrice: 149999, discount: "13% OFF" };
  const p9 = { id: 49, name: "SweetHeart Kids Bed", img: img9, price: 52999, cutPrice: 61999, discount: "15% OFF" };
  const p10 = { id: 50, name: "DreamNest Baby Crib", img: img10, price: 18999, cutPrice: 22999, discount: "17% OFF" };
  const p11 = { id: 51, name: "Adventure Loft Bunk Bed", img: img11, price: 54999, cutPrice: 64999, discount: "15% OFF" };
  const p12 = { id: 52, name: "Cloud Bunny Kids Bed", img: img12, price: 44999, cutPrice: 52999, discount: "15% OFF" };
  const p13 = { id: 53, name: "Aquarium Bunk Bed", img: img13, price: 34000, cutPrice: 37000, discount: "8% OFF" };
  const p14 = { id: 54, name: "Tufted Luxury King Bed", img: img14, price: 62000, cutPrice: 65000, discount: "5% OFF" };
  const p15 = { id: 55, name: "Outdoor Canopy Swing Bed", img: img15, price: 29000, cutPrice: 32000, discount: "9% OFF" };
  return (
    <div>
      <div className="heads">
        <h1>BED COLLECTION</h1>
        <p>Explore Our Premium Bed Collection – Discover stylish, comfortable, and durable beds crafted for restful sleep and elegant living.</p>
      </div>
      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img1} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Aurora Velvet Upholstered Bed <i
              className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p1)}
            ></i></h3>
            <h2>&#8377;32,999</h2>
            <p className="cut">&#8377;38,999</p>
            <p className="off">15% OFF</p>
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
            <h3>Royal Canopy Luxury Bed <i
              className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "180px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p2)}
            ></i></h3>
            <h2>&#8377;74,999</h2>
            <p className="cut">&#8377;89,999</p>
            <p className="off">17% OFF</p>
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
            <h3>Nova LED Storage Bed <i
              className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "200px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p3)}
            ></i></h3>
            <h2>&#8377;48,999</h2>
            <p className="cut">&#8377;56,999</p>
            <p className="off">14% OFF</p>
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
            <h3>Wave Designer Platform Bed <i
              className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p4)}
            ></i></h3>
            <h2>&#8377;92,999</h2>
            <p className="cut">&#8377;1,09,999</p>
            <p className="off">15% OFF</p>
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
            <h3>Elite Tufted Upholstered Bed <i
              className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p5)}
            ></i></h3>
            <h2>&#8377;41,999</h2>
            <p className="cut">&#8377;49,999</p>
            <p className="off">16% OFF</p>
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
            <h3>Heritage Bookcase Storage Bed <i
              className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p6)}
            ></i></h3>
            <h2>&#8377;79,999</h2>
            <p className="cut">&#8377;94,999</p>
            <p className="off">16% OFF</p>
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
            <h3>Royal Princess Canopy Bed <i
              className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "170px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p7)}
            ></i></h3>
            <h2>&#8377;69,999</h2>
            <p className="cut">&#8377;82,999</p>
            <p className="off">16% OFF</p>
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
            <h3>Imperial Round Tufted Bed <i
              className={isWishlisted(p8.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "170px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p8)}
            ></i></h3>
            <h2>&#8377;1,29,999</h2>
            <p className="cut">&#8377;1,49,999</p>
            <p className="off">13% OFF</p>
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
            <h3>SweetHeart Kids Bed <i
              className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "220px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p9)}
            ></i></h3>
            <h2>&#8377;52,999</h2>
            <p className="cut">&#8377;61,999</p>
            <p className="off">15% OFF</p>
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
            <h3>DreamNest Baby Crib <i
              className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "210px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p10)}
            ></i></h3>
            <h2>&#8377;18,999</h2>
            <p className="cut">&#8377;22,999</p>
            <p className="off">17% OFF</p>
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
            <h3>Adventure Loft Bunk Bed <i
              className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "180px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p11)}
            ></i></h3>
            <h2>&#8377;54,999</h2>
            <p className="cut">&#8377;64,999</p>
            <p className="off">15% OFF</p>
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
            <h3>Cloud Bunny Kids Bed <i
              className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "200px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p12)}
            ></i></h3>
            <h2>&#8377;44,999</h2>
            <p className="cut">&#8377;52,999</p>
            <p className="off">15% OFF</p>
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
            <h3>Aquarium Bunk Bed <i
              className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "220px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p13)}
            ></i></h3>
            <h2>&#8377;34000</h2>
            <p className="cut">&#8377;37000</p>
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
            <h3>Tufted Luxury King Bed <i
              className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "190px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p14)}
            ></i></h3>
            <h2>&#8377;62000</h2>
            <p className="cut">&#8377;65000</p>
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
            <h3>Outdoor Canopy Swing Bed <i
              className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p15)}
            ></i></h3>
            <h2>&#8377;29000</h2>
            <p className="cut">&#8377;32000</p>
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
  )
}

export default BedSection