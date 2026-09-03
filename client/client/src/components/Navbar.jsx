// import React from "react";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../pages/WishlistContext";
// import img1 from "../assets/IMAGES/search.svg";

// const Navbar = () => {
//   const { wishlist } = useWishlist();

//   return (
//     <div id="nav">
//       <div className="web-name">
//         <h1 className="head">Lovora </h1>
//         <div className="hand">
//           <i className="fa-solid fa-hand-holding-heart"></i>
//         </div>
//       </div>

//       <div className="search">
//         <img src={img1} alt="" />
//         <input type="text" placeholder="search furniture, decor & more..." />
//       </div>

//       <div className="account">
//         <div className="likes">
//           <Link to="/wishlist" style={{ color: "inherit", position: "relative", textDecoration: "none" }}>
//             <i className="fa-regular fa-heart"></i>
//             {wishlist.length > 0 && (
//               <span style={badgeStyle}>
//                 {wishlist.length}
//               </span>
//             )}
//           </Link>
//           <p><Link to="/wishlist" style={{ color: "inherit", textDecoration: "none" }}>Wishlist</Link></p>
//         </div>

//         <div className="bag">
//           <i className="fa-solid fa-cart-shopping"></i>
//           <p>Cart</p>
//         </div>

//         <div className="acc">
//           <i className="fa-solid fa-user"></i>
//           <p>Account</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const badgeStyle = {
//   position: "absolute",
//   top: "-8px",
//   right: "-8px",
//   backgroundColor: "red",
//   color: "white",
//   borderRadius: "50%",
//   padding: "1px 5px",
//   fontSize: "9px",
//   fontWeight: "bold",
//   lineHeight: "1"
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../pages/WishlistContext";
import { useCart } from "../pages/CartContext";
import img1 from "../assets/IMAGES/search.svg";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <div id="nav">
      <div className="web-name">
        <h1 className="head">Lovora </h1>
        <div className="hand">
          <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
      </div>

      <div className="search">
        <img src={img1} alt="" />
        <input type="text" placeholder="search furniture, decor & more..." />
      </div>

      <div className="account">
        <div className="likes">
          <Link
            to="/wishlist"
            style={{
              color: "inherit",
              position: "relative",
              textDecoration: "none",
            }}
          >
            <i className="fa-regular fa-heart"></i>

            {wishlist.length > 0 && (
              <span style={badgeStyle}>{wishlist.length}</span>
            )}
          </Link>

          <p>
            <Link
              to="/wishlist"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Wishlist
            </Link>
          </p>
        </div>

        <div className="bag">
          <Link
            to="/cart"
            style={{
              color: "inherit",
              position: "relative",
              textDecoration: "none",
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>

            {cart.length > 0 && (
              <span style={badgeStyle}>{cart.length}</span>
            )}
          </Link>

          <p>
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Cart
            </Link>
          </p>
        </div>

        <div className="acc">
          <i className="fa-solid fa-user"></i>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

const badgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-8px",
  backgroundColor: "red",
  color: "white",
  borderRadius: "50%",
  padding: "1px 5px",
  fontSize: "9px",
  fontWeight: "bold",
  lineHeight: "1",
};

export default Navbar;