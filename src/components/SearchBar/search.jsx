import './SearchBar.css';
import { BsSearch, BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MySearch({ placeholder, data }) {
    const [filteredSearch, setFilteredSearch] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const handleSearch = (e) => {
        const searchInput = e.target.value;
        console.log(searchInput);
        const filterSearch = data.filter((value) => {
            return value.title
                .toLowerCase()
                .includes(searchInput.toLowerCase());
        });

        if (searchInput === '') {
            setFilteredSearch([]);
        } else {
            setFilteredSearch(filterSearch);
        }
    };

    const clearInput = () => {
        setFilteredSearch([]);
        setSearchWord('');
    };
    return (
        <div className="search__wrapper">
            <div className="search">
                <div className="searchInputs">
                    <input
                        type="text"
                        onChange={handleSearch}
                        placeholder={placeholder}
                        value={searchWord}
                    />
                    <div className="searchIcon">
                        {filteredSearch.length === 0 ? (
                            <BsSearch />
                        ) : (
                            <BsXLg id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
                {filteredSearch.length != 0 && (
                    <div className="dataResult">
                        {filteredSearch.slice(0, 10).map((value, key) => {
                            return (
                                <div className="result__wrapper" key={value.id}>
                                    <Link
                                        className="dataItem"
                                        to={`/product/${value.id}`}
                                    >
                                        <div className="dataItem__wrapper">
                                            <h4>{value.title}</h4>
                                            <img
                                                src={value.imageUrl}
                                                alt={value.title}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MySearch;
