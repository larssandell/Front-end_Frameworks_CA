import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import Cart from '../../icons';
function Header() {
    const { totalItems } = useSelector((store) => store.cart);

    return (
        <header>
            <div>
                <NavLink to="/">Company logo</NavLink>
            </div>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </nav>
            </div>
            <div>
                <Link to="cart">
                    <BsFillCartFill />
                    <p className="cart__totalItems">{totalItems}</p>
                </Link>
            </div>
        </header>
    );
}

export default Header;
