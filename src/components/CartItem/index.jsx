function CartItem({ id, title, price, discountedPrice, imageUrl, quantity }) {
    // if (discountedPrice === price) {
    //     return (
    //         <section>
    //             <img src={imageUrl} alt={title} />
    //             <div>
    //                 <h4>{title}</h4>
    //                 <h4>${price}</h4>
    //             </div>
    //         </section>
    //     );
    // }
    return (
        <section>
            <img src={imageUrl} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4>
                    $
                    {discountedPrice >= price
                        ? `% ${discountedPrice}`
                        : `${discountedPrice}`}
                </h4>
                <button>remove</button>
                <div>
                    <button>+</button>
                    <p>må legge til quantity {quantity}</p>
                    <button>-</button>
                </div>
            </div>
        </section>
    );
}

export default CartItem;
