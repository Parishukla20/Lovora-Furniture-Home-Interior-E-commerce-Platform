import React from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <div className="heads">
                <h1>MY CART ({cart.length})</h1>
                <p>All your selected items in one place.</p>
            </div>

            {cart.length === 0 ? (
                <p
                    style={{
                        textAlign: "center",
                        margin: "50px 0",
                        fontSize: "18px",
                    }}
                >
                    Your cart is currently empty!
                </p>
            ) : (
                <>
                    <div className="cards-one">
                        {cart.map((item) => (
                            <div className="cards" key={item.id}>
                                <div className="upper">
                                    <img src={item.img} alt={item.name} />
                                </div>

                                <div className="lower">
                                    <h3>{item.name}</h3>

                                    <h2>
                                        &#8377;
                                        {item.price.toLocaleString("en-IN")}
                                    </h2>

                                    <p className="cut">
                                        &#8377;
                                        {item.cutPrice.toLocaleString("en-IN")}
                                    </p>

                                    <p className="off">{item.discount}</p>


                                    <br />

                                    <button type="button">
                                        Buy Now
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => toggleWishlist(item)}
                                    >
                                        {isWishlisted(item.id)
                                            ? "Remove Wishlist"
                                            : "Wishlist"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;