import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import {
    addItem,
    clearCart,
    decrease,
    getTotals,
    removeItem,
} from '../slices/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const myCart = useSelector((state) => state.cart);
    const totals = useDispatch();
    const dispatch = useDispatch();
    useEffect(() => {
        totals(getTotals());
    }, [cart]);

    const handleRemoveFromCart = (item) => {
        dispatch(removeItem(item));
    };
    const handleDecrease = (item) => {
        dispatch(decrease(item));
    };
    const handleIncrease = (item) => {
        dispatch(addItem(item));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleCheckOut = () => {
        console.log('Checked out');
    };

    console.log(myCart.cartItems.length);

    function test(a, b) {
        const sum = a.parseFloat(sum.toFixed(2)) * b.parseFloat(sum.toFixed(2));
        return sum;
    }
    console.log(myCart.cartItems * myCart.cartItems.discountedPrice);

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
                                    <button
                                        onClick={() =>
                                            handleRemoveFromCart(item)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="product__price">
                                    ${item.discountedPrice}
                                </div>
                                <div className="cart__quantity">
                                    <button
                                        onClick={() => handleDecrease(item)}
                                    >
                                        -
                                    </button>
                                    <div className="count">
                                        {item.productQuantity}
                                    </div>
                                    <button
                                        onClick={() => handleIncrease(item)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="cart__total">
                                    {/* må finne en løsning her */}
                                    Sum:
                                    {/* {() =>
                                        test(discountedPrice, productQuantity)
                                    } */}
                                    {parseFloat(
                                        item.discountedPrice.toFixed(2)
                                    ) *
                                        parseFloat(
                                            item.productQuantity.toFixed(2)
                                        )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart__summary">
                        <button onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                        <div className="cart__checkout">
                            <div className="subtotal">
                                <span>Total:</span>
                                <span>$ {myCart.totalPrice}</span>
                                <button onClick={() => handleCheckOut()}>
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
