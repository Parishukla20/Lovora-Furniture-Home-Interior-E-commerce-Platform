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

            <img
                src={product.img}
                alt={product.name}
                width="50%"
                height="500px"
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