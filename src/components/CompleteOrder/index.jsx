import { useDispatch } from 'react-redux';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import './CompleteOrder.css';
import { clearCart } from '../../slices/cartSlice';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CompleteOrder() {
    const dispatch = useDispatch();

    const purchase = JSON.parse(localStorage.getItem('cartItem'));
    setTimeout(() => {
        dispatch(clearCart());
    }, '1000');

    return (
        <div>
            <div className="checkOutSuccess">
                <MdOutlineCheckCircleOutline className="complete__icon" />
                <h3>Thank you for your purchase!</h3>
            </div>
            <section>
                <div className="summary">
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                </div>
                {purchase.map((item) => {
                    return (
                        <div className="order" key={item.id}>
                            <div>{item.title}</div>
                            <div>{item.productQuantity}</div>
                            <div>${item.discountedPrice}</div>
                        </div>
                    );
                })}
            </section>
            <section>
                <Link className="btn" to="/">
                    Go back
                </Link>
            </section>
        </div>
    );
}

export default CompleteOrder;
