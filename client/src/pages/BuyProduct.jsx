import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BuyProduct.css";
import { useCart } from "./CartContext";

const BuyProduct = () => {

    const location = useLocation();
    const { addToCart } = useCart();
    const product = location.state?.product;

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const totalPrice = product.price * quantity;

    return (
        <div className="buy-page">

            <div className="buy-product-card">

                {/* Product Image */}

                <div className="buy-image-section">

                    <img
                        className="buy-product-image"
                        src={product.img}
                        alt={product.name}
                    />

                    <div className="comfort-text">
                        ✨ Bring comfort and elegance to your home
                    </div>

                </div>


                {/* Product Details */}

                <div className="buy-product-details">

                    <span className="discount-badge">
                        {product.discount}
                    </span>

                    <h1>{product.name}</h1>

                    <p className="product-description">
                        A perfect blend of comfort and style.
                        This beautiful furniture piece adds a modern
                        touch to your home and gives you a relaxing
                        experience.
                    </p>


                    {/* Price */}

                    <div className="price-section">

                        <span className="current-price">
                            ₹{totalPrice}
                        </span>

                        <div className="old-price">
                            <del>₹{product.cutPrice}</del>

                            <span className="discount-text">
                                {product.discount}
                            </span>
                        </div>

                    </div>


                    <hr />


                    {/* Quantity */}

                    <div className="quantity-section">

                        <span>Quantity:</span>

                        <div className="quantity-box">

                            <button onClick={decreaseQuantity}>
                                −
                            </button>

                            <span>{quantity}</span>

                            <button onClick={increaseQuantity}>
                                +
                            </button>

                        </div>

                    </div>


                    {/* Buttons */}

                    <div className="buy-buttons">

                        <button
                            className="add-cart-btn"
                            onClick={() => {
                                addToCart(product);
                                alert("Product added to cart");
                            }}
                        >
                            🛒 Add to Cart
                        </button>

                        <button
                            className="buy-now-btn"
                        >
                            ⚡ Buy Now
                        </button>

                    </div>


                    {/* Benefits */}

                    <div className="benefits">

                        <div className="benefit">
                            <span>🚚</span>
                            <strong>Free Shipping</strong>
                            <small>On orders above ₹1999</small>
                        </div>

                        <div className="benefit">
                            <span>🛡️</span>
                            <strong>Secure Payment</strong>
                            <small>100% secure checkout</small>
                        </div>

                        <div className="benefit">
                            <span>↩️</span>
                            <strong>Easy Returns</strong>
                            <small>Within 7 days</small>
                        </div>

                        <div className="benefit">
                            <span>🎧</span>
                            <strong>24/7 Support</strong>
                            <small>We're here to help</small>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BuyProduct;