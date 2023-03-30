import { NavLink, Link } from 'react-router-dom';
import Cart from '../../icons';
function Header() {
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
                </Link>
            </div>
        </header>
    );
}

export default Header;
