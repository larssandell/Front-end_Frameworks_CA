import { useParams } from 'react-router-dom';
import { siteUrl } from '../components/url';
import useFetch from '../components/useFetch';
import Spinner from '../components/Loading';

function Product() {
    const params = useParams();
    const {
        data: item,
        isLoading,
        isError,
        responseOk,
    } = useFetch(`${siteUrl}/${params.id}`);
    if (isLoading) {
        return (
            <div className="loader">
                <Spinner />
            </div>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div>
            <div className="product">
                <div>
                    <h3>{item.title}</h3>
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        style={{ width: 400 }}
                    />
                    <p>{item.description}</p>
                    <p>
                        {item.discountedPrice >= item.price
                            ? `On Sale $${item.discountedPrice}`
                            : `$${item.discountedPrice}`}
                    </p>
                    <button onClick={() => {}}>Add to cart</button>
                    <p>{item.rating}</p>
                    <div>
                        <p>Tags: {item.tags}</p>
                    </div>
                    <div>
                        <h4>Reviews:</h4>
                        {item.reviews.map((review) => (
                            <div key={review.id}>
                                <p>User: {review.username}</p>
                                <p>Rating: {review.rating}</p>
                                <p>description: {review.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
