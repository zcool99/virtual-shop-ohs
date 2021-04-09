import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Link } from "react-router-dom";

const Cart = ({ items, subTotal, total, currency, removeFromCart, onClick }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div>
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>

                                <div className="cart__subTotal">Subtotal: ${subTotal} {currency}</div>
                                <div className="cart__total">Total with tax (16%): ${total.toFixed(2)} {currency}</div>
                                <div className="text-right">
                                    <Link className="btn btn-success" to="/confirm">Shop now!</Link>
                                </div>
                            </div>

                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    subTotal: PropTypes.number,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
