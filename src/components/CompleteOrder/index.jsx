import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import './CompleteOrder.css';
import { clearCart } from '../../slices/cartSlice';

function CompleteOrder() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    (function () {
        setTimeout(() => {
            dispatch(clearCart());
            console.log('cart clear');
        }, 1000);
    })();
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

                {cart.cartItems.map((item) => {
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
                <button>Go back</button>
            </section>
        </div>
    );
}

export default CompleteOrder;
