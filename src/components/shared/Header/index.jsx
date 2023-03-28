import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>Company logo</div>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
