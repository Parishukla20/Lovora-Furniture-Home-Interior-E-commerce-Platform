const Navbar = () => {
  return (
    <div id="nav">

      <div className="web-name">
        <h1 className="head">Lovora </h1>
        <div className="hand">
          <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
      </div>

      <div className="search">
        <img src="src/assets/Images/search.svg" alt="" />
        <input type="text" placeholder="search furniture, decor & more..."/>
      </div>

      <div className="account">
        <div className="likes">
          <i className="fa-regular fa-heart"></i>
          <p>Wishlist</p>
        </div>

        <div className="bag">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </div>

        <div className="acc">
          <i className="fa-solid fa-user"></i>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;