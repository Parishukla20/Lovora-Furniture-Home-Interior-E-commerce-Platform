import React from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import img1 from "../assets/IMAGES/Storage1.jpg";
import img2 from "../assets/IMAGES/Storage2.jpg";
import img3 from "../assets/IMAGES/Storage3.jpg";
import img4 from "../assets/IMAGES/Storage4.jpg";
import img5 from "../assets/IMAGES/Storage5.jpg";
import img6 from "../assets/IMAGES/Storage6.png";
import img7 from "../assets/IMAGES/Storage7.jpg";
import img8 from "../assets/IMAGES/Storage8.jpg";
import img9 from "../assets/IMAGES/Storage9.jpg";
import img10 from "../assets/IMAGES/Storage10.webp";
import img11 from "../assets/IMAGES/Storage11.jpg";
import img12 from "../assets/IMAGES/Storage12.jpg";
import img13 from "../assets/IMAGES/Storage13.jpg";
import img14 from "../assets/IMAGES/Storage14.webp";
import img15 from "../assets/IMAGES/Storage15.avif";

const StorageSection = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const p1 = { id: 21, name: "Modern Sliding Wardrobe", img: img1, price: 54999, cutPrice: 61999, discount: "11% OFF" };
  const p2 = { id: 22, name: "Minimalist Double Door Wardrobe", img: img2, price: 64999, cutPrice: 72999, discount: "11% OFF" };
  const p3 = { id: 23, name: "Luxury Glass Door Wardrobe", img: img3, price: 89999, cutPrice: 99999, discount: "10% OFF" };
  const p4 = { id: 24, name: "Elite Walk-In Wardrobe", img: img4, price: 124999, cutPrice: 139999, discount: "11% OFF" };
  const p5 = { id: 25, name: "Wooden Wardrobe with Dresser", img: img5, price: 74999, cutPrice: 84999, discount: "12% OFF" };
  const p6 = { id: 26, name: "Urban Matte Wardrobe", img: img6, price: 69999, cutPrice: 78999, discount: "11% OFF" };
  const p7 = { id: 27, name: "Walnut Kitchen Display Cabinet", img: img7, price: 38999, cutPrice: 44999, discount: "13% OFF" };
  const p8 = { id: 28, name: "Modern Geometric Display Shelf", img: img8, price: 17999, cutPrice: 21999, discount: "18% OFF" };
  const p9 = { id: 29, name: "Luxury Home Bar Display Cabinet", img: img9, price: 29999, cutPrice: 34999, discount: "14% OFF" };
  const p10 = { id: 30, name: "Kitchen Pantry Cabinet", img: img10, price: 18999, cutPrice: 22999, discount: "17% OFF" };
  const p11 = { id: 31, name: "Boho Rattan Display Shelf", img: img11, price: 14999, cutPrice: 17999, discount: "17% OFF" };
  const p12 = { id: 32, name: "Walnut Glass Display Cabinet", img: img12, price: 29999, cutPrice: 34999, discount: "14% OFF" };
  const p13 = { id: 33, name: "Modern Shoe Storage Cabinet", img: img13, price: 21999, cutPrice: 25999, discount: "15% OFF" };
  const p14 = { id: 34, name: "Vanity Dressing Table with Mirror", img: img14, price: 18999, cutPrice: 22999, discount: "17% OFF" };
  const p15 = { id: 35, name: "Workstation Storage & PC Desk", img: img15, price: 27999, cutPrice: 32999, discount: "15% OFF" };
  return (
    <div>
      <div className="heads">
        <h1>STORAGE COLLECTION</h1>
        <p>Explore Our Smart Storage Solutions – Discover stylish, space-saving cabinets, shelves, and organizers designed to keep your home tidy.</p>
      </div>
      <div className="cards-one">

        <div className="cards">
          <div className="upper">
            <img src={img1} alt="img loading" />
          </div>
          <div className="lower">
            <h3>Modern Sliding Wardrobe <i
              className={isWishlisted(p1.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "180px", color: isWishlisted(p1.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p1)}
            ></i></h3>
            <h2>&#8377;54,999</h2>
            <p className="cut">&#8377;61,999</p>
            <p className="off">11% OFF</p>
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
            <h3>Minimalist Double Door Wardrobe <i
              className={isWishlisted(p2.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "110px", color: isWishlisted(p2.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p2)}
            ></i></h3>
            <h2>&#8377;64,999</h2>
            <p className="cut">&#8377;72,999</p>
            <p className="off">11% OFF</p>
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
            <h3>Luxury Glass Door Wardrobe <i
              className={isWishlisted(p3.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "150px", color: isWishlisted(p3.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p3)}
            ></i></h3>
            <h2>&#8377;89,999</h2>
            <p className="cut">&#8377;99,999</p>
            <p className="off">10% OFF</p>
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
            <h3>Elite Walk-In Wardrobe <i
              className={isWishlisted(p4.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "200px", color: isWishlisted(p4.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p4)}
            ></i></h3>
            <h2>&#8377;1,24,999</h2>
            <p className="cut">&#8377;1,39,999</p>
            <p className="off">11% OFF</p>
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
            <h3>Wooden Wardrobe with Dresser <i
              className={isWishlisted(p5.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p5.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p5)}
            ></i></h3>
            <h2>&#8377;74,999</h2>
            <p className="cut">&#8377;84,999</p>
            <p className="off">12% OFF</p>
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
            <h3>Urban Matte Wardrobe <i
              className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "205px", color: isWishlisted(p6.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p6)}
            ></i></h3>
            <h2>&#8377;69,999</h2>
            <p className="cut">&#8377;78,999</p>
            <p className="off">11% OFF</p>
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
            <h3>Walnut Kitchen Display Cabinet <i
              className={isWishlisted(p7.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p7.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p7)}
            ></i></h3>
            <h2>&#8377;38,999</h2>
            <p className="cut">&#8377;44,999</p>
            <p className="off">13% OFF</p>
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
            <h3>Modern Geometric Display Shelf <i
              className={isWishlisted(p6.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p8.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p8)}
            ></i></h3>
            <h2>&#8377;17,999</h2>
            <p className="cut">&#8377;21,999</p>
            <p className="off">18% OFF</p>
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
            <h3>Luxury Home Bar Display Cabinet <i
              className={isWishlisted(p9.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "120px", color: isWishlisted(p9.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p9)}
            ></i></h3>
            <h2>&#8377;29,999</h2>
            <p className="cut">&#8377;34,999</p>
            <p className="off">14% OFF</p>
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
            <h3>Kitchen Pantry Cabinet <i
              className={isWishlisted(p10.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "210px", color: isWishlisted(p10.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p10)}
            ></i></h3>
            <h2>&#8377;18,999</h2>
            <p className="cut">&#8377;22,999</p>
            <p className="off">17% OFF</p>
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
            <h3>Boho Rattan Display Shelf <i
              className={isWishlisted(p11.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "190px", color: isWishlisted(p11.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p11)}
            ></i></h3>
            <h2>&#8377;14,999</h2>
            <p className="cut">&#8377;17,999</p>
            <p className="off">17% OFF</p>
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
            <h3>Walnut Glass Display Cabinet <i
              className={isWishlisted(p12.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p12.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p12)}
            ></i></h3>
            <h2>&#8377;29,999</h2>
            <p className="cut">&#8377;34,999</p>
            <p className="off">14% OFF</p>
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
            <h3>Modern Shoe Storage Cabinet <i
              className={isWishlisted(p13.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "160px", color: isWishlisted(p13.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p13)}
            ></i></h3>
            <h2>&#8377;21,999</h2>
            <p className="cut">&#8377;25,999</p>
            <p className="off">15% OFF</p>
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
            <h3>Vanity Dressing Table with Mirror <i
              className={isWishlisted(p14.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "125px", color: isWishlisted(p14.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p14)}
            ></i></h3>
            <h2>&#8377;18,999</h2>
            <p className="cut">&#8377;22,999</p>
            <p className="off">17% OFF</p>
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
            <h3>Workstation Storage & PC Desk <i
              className={isWishlisted(p15.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={{ marginLeft: "140px", color: isWishlisted(p15.id) ? "red" : "inherit", cursor: "pointer" }}
              onClick={() => toggleWishlist(p15)}
            ></i></h3>
            <h2>&#8377;27,999</h2>
            <p className="cut">&#8377;32,999</p>
            <p className="off">15% OFF</p>
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

export default StorageSection