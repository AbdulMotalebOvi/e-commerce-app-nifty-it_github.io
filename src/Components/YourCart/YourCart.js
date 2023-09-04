import { useContext } from "react";
import { CartContext } from "../Shared/Context/CartContext/CartProvider";

import Table from "./Table";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CommonSection from "../CommonSection/CommonSection";
import useTitle from "../Hooks/useTitle";

export default function YourCart() {
    useTitle('Your Cart')
    const { cartItems, removeFromCart } = useContext(CartContext);
    const header = 'Your Cart';
    const title = 'Your Cart';
    const linkUp = 'cart'
    const sectionMarkup = CommonSection(header, title, linkUp);

    return (
        <section>
            {sectionMarkup}
            <div className="my-10 max-w-screen-xl mx-auto">
                {cartItems.length > 0 ? (
                    <Table removeFromCart={removeFromCart} products={cartItems} />
                ) : (
                    <div className="text-center">
                        <Link to="/AllProducts" className="text-2xl font-semibold my-3 mx-auto">
                            Add A Product
                        </Link>
                    </div>
                )}

                <div className="flex justify-center my-5">
                    <Link to="/">
                        <Button title="Proceed to Checkout" />
                    </Link>
                </div>
            </div>

        </section>
    );
}
