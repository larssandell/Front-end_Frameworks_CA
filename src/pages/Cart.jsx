import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, totalPrice, totalItems } = useSelector(
        (store) => store.cart
    );

    if (cartItems < 1) {
        return (
            <div className="cart__wrapper">
                <h2>Your cart:</h2>
                <div className="cart__items">
                    <h4>Your cart is empty</h4>
                </div>
            </div>
        );
    }

    return (
        <div className="cart__wrapper">
            <h3>Your cart:</h3>
            <div className="cart__items">
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
                <CartItem />
                <ul>
                    <li>{cartItems}</li>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </ul>
            </div>
            <div className="cart__info">
                <p>Items: {totalItems}</p>
                <p>Total: {totalPrice}</p>
                <button onClick={() => dispatch(clearCart)}>Clear cart</button>
            </div>
        </div>
    );
}

export default Cart;
