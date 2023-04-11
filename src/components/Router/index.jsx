import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Product from '../../pages/Product';
import Layout from './Layout';
import Error from '../Error';
import Contact from '../../pages/Contact';
import CheckoutSuccess from '../../pages/CheckoutSuccess';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/complete" element={<CheckoutSuccess />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}

export default Router;
