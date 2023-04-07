import { useState } from 'react';

function CheckoutSucc() {
    const checkSuccess = useState((state) => state.cart);

    return <div className="checkOutSuccess"></div>;
}

export default CheckoutSucc;
