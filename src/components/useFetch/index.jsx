import { useState, useEffect } from 'react';

// function useFetch(url) {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);
//     const [responseOk, setResponseOk] = useState('');

//     useEffect(() => {
//         async function getData() {
//             try {
//                 const getResponse = await fetch(url);
//                 const json = await getResponse.json();
//                 setResponseOk(getResponse.ok);
//                 setData(json);
//                 setIsLoading(false);
//             } catch (err) {
//                 // console.log(err);
//                 setIsError(true);
//                 setIsLoading(false);
//             }
//         }
//         getData();
//     }, []);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//     if (isError) {
//         return <div>Error fetching the Api</div>;
//     }

//     return { data, isLoading, isError, responseOk };
// }

// export default useFetch;

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [responseOk, setResponseOk] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setIsLoading(false);
                setResponseOk(response.ok);
            } catch (err) {
                console.log(err);
                setIsError(true);
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching the Api</div>;
    }

    return { data, isLoading, isError, responseOk };
}

export default useFetch;
