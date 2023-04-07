import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Cart from '../../icons';
function Header() {
    const { totalItems, totalPrice } = useSelector((store) => store.cart);

    return (
        <header>
            <div>Company logo</div>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </nav>
            </div>
            <div>
                <Link to="cart">
                    <Cart />
                    <p className="cart__totalItems">{totalItems}</p>
                </Link>
            </div>
        </header>
    );
}

export default Header;
