import React from "react";
import { useLocation } from "react-router-dom";

const BuyProduct = () => {

    const location = useLocation();

    const product = location.state?.product;

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            {/* <h1>Buy Product</h1> */}

            <img
                src={product.img}
                alt={product.name}
                width="300"
            />

            <h2>{product.name}</h2>

            <h3>₹{product.price}</h3>
            <p>
                <del>₹{product.cutPrice}</del>
                {"  "}
                <span>{product.discount}</span>
            </p>
        </div>
    ); 
};

export default BuyProduct;