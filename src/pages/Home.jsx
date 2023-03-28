import useFetch from '../components/useFetch';
import { Link } from 'react-router-dom';
import { siteUrl } from '../components/url';

function Home() {
    const {
        data: products,
        isError,
        isLoading,
        responseOk,
    } = useFetch(siteUrl);
    if (isError) {
        return <div>error : {responseOk.code}</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="main__container">
            <h1>Home</h1>
            <div className="products__list">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <h3>{product.title}</h3>
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            style={{ width: 120 }}
                        />
                        <Link
                            className="link__btn"
                            to={`/product/${product.id}`}
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
