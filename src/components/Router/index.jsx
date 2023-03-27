import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import SingleProduct from '../../pages/SingleProduct';
import Layout from './Layout';
import Error from '../Error';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/singleProduct" element={<SingleProduct />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}

export default Router;
