import React from "react";
import { useWishlist } from "./WishlistContext";

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishlist();

    return (
        <div>
            <div className="heads">
                <h1>MY WISHLIST ({wishlist.length})</h1>
                <p>All your favorite saved items in one place.</p>
            </div>

            {wishlist.length === 0 ? (
                <p style={{ textAlign: "center", margin: "50px 0", fontSize: "18px" }}>
                    Your wishlist is currently empty!
                </p>
            ) : (
                <div className="cards-one">
                    {wishlist.map((item) => (
                        <div className="cards" key={item.id}>
                            <div className="upper">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="lower">
                                <h3>
                                    {item.name}{" "}
                                    <i
                                        className="fa-solid fa-heart"
                                        style={{ marginLeft: item.margin || "200px", color: "red", cursor: "pointer" }}
                                        onClick={() => toggleWishlist(item)}
                                    ></i>
                                </h3>
                                <h2>&#8377;{item.price.toLocaleString("en-IN")}</h2>
                                <p className="cut">&#8377;{item.cutPrice.toLocaleString("en-IN")}</p>
                                <p className="off">{item.discount}</p>
                                <br /><br />
                                <button type="submit">Buy Now</button>
                                <button type="submit" onClick={() => toggleWishlist(item)}>
                                    Remove
                                </button>
                                <button type="submit">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;