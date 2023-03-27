import useFetch from '../components/useFetch';
import siteUrl from '../components/url';

console.log(siteUrl);

function Home() {
    const {
        data: products,
        isError,
        isLoading,
        responseOk,
    } = useFetch(siteUrl);
    console.log(products);
    return (
        <div>
            <h1>Home</h1>
            {products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    );
}

export default Home;
