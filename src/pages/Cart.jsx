import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { getTotals } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const myCart = useSelector((state) => state.cart);
    return (
        <div className="cart__wrapper">
            <h2>Shopping Cart</h2>
            {myCart.cartItems.length === 0 ? (
                <div className="empty__cart">
                    <p>Your cart is empty</p>
                    <div className="go__shop">
                        <Link to="/">Start Shopping</Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>total</h3>
                    </div>
                    <div className="cart-items">
                        {myCart.cartItems?.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart__product">
                                    <img
                                        className="cart__img"
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />
                                    <div>{item.title}</div>
                                    <p>{item.description}</p>
                                    <button>Remove</button>
                                </div>
                                <div className="product__price">
                                    ${item.discountedPrice}
                                </div>
                                <div className="cart__quantity">
                                    <button>-</button>
                                    <div className="count">
                                        {item.productQuantity}
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="cart__total">
                                    total:
                                    {item.discountedPrice *
                                        item.productQuantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart__summary">
                        <button>Clear Cart</button>
                        <div className="cart__checkout">
                            <div className="subtotal">
                                <span>Total:</span>
                                <span>$ {myCart.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    // const cart = useSelector((state) => state.Cart);
    // useEffect(() => {
    //     dispatch(getTotals);
    // }, [cart]);
    // const dispatch = useDispatch();
    // const { cartItems, totalPrice, totalItems } = useSelector((store) => {
    //     return store.cart;
    // });

    // if (cartItems < 1) {
    //     return (
    //         <div className="cart__wrapper">
    //             <h2>Your cart:</h2>
    //             <div className="cart__items">
    //                 <h4>Your cart is empty</h4>
    //             </div>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="cart__wrapper">
    //         <h3>Your cart:</h3>
    //         <div className="cart__items">
    //             {cartItems?.map((item) => {
    //                 return <CartItem key={item.product.id} {...item} />;
    //             })}
    //             <CartItem />
    //             <ul>
    //                 <li>{cartItems}</li>
    //                 <button>+</button>
    //                 <p>0</p>
    //                 <button>-</button>
    //             </ul>
    //         </div>
    //         <div className="cart__info">
    //             <p>Items: {totalItems}</p>
    //             <p>Total: {totalPrice}</p>
    //             <button onClick={() => dispatch(clearCart)}>Clear cart</button>
    //         </div>
    //     </div>
    // );
}

export default Cart;
