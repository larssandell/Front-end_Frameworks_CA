import useFetch from '../components/useFetch';
import { Link } from 'react-router-dom';
import { siteUrl } from '../components/url';
import Spinner from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import MySearch from '../components/SearchBar/search';

function Home() {
    const [search, setSearch] = useState('');
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
        return (
            <div className="loader">
                <Spinner />
            </div>
        );
    }
    return (
        <div className="main__container">
            <h1>Home</h1>
            {/* <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">search</button>
            </form> */}
            <MySearch placeholder="Search..." data={products} />
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

// return (
//     <div className="main__container">
//         <h1>Home</h1>
//         <SearchBar />
//         <div className="products__list">
//             {products
//                 .filter((item) => {
//                     return search.toLowerCase() === ''
//                         ? item
//                         : item.title.toLowerCase().includes(search);
//                 })
// .map((product) => (
//     <div className="card" key={product.id}>
//         <h3>{product.title}</h3>
//         <img
//             src={product.imageUrl}
//             alt={product.title}
//             style={{ width: 120 }}
//         />
//         <Link
//             className="link__btn"
//             to={`/product/${product.id}`}
//         >
//             View
//         </Link>
//     </div>
// ))}
//         </div>
//     </div>
// );
// }

// function Home() {
//     const [search, setSearch] = useState('');
//     const {
//         data: products,
//         isError,
//         isLoading,
//         responseOk,
//     } = useFetch(siteUrl);
//     if (isError) {
//         return <div>error : {responseOk.code}</div>;
//     }
//     if (isLoading) {
//         return (
//             <div className="loader">
//                 <Spinner />
//             </div>
//         );
//     }
//     return (
//         <div className="main__container">
//             <h1>Home</h1>
//             <form>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button type="submit">search</button>
//             </form>
//             <MySearch placeholder="Search..." data={products} />
//             <div className="products__list">
//                 {products
//                     .filter((item) => {
//                         return search.toLowerCase() === ''
//                             ? item
//                             : item.title.toLowerCase().includes(search);
//                     })
//                     .map((item) => (
//                         <div className="card" key={item.id}>
//                             <h3>{item.title}</h3>
//                             <img
//                                 src={item.imageUrl}
//                                 alt={item.title}
//                                 style={{ width: 120 }}
//                             />
//                             <Link
//                                 className="link__btn"
//                                 to={`/product/${item.id}`}
//                             >
//                                 View
//                             </Link>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// }
