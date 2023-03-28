import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Product from '../../pages/Product';
import Layout from './Layout';
import Error from '../Error';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}

export default Router;
