import { useState } from 'react';

function SearchBar(input) {
    console.log(search);
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(input) => setSearch(input.target.value)}
                />
                <button type="submit">search</button>
            </form>
        </>
    );
}

export default SearchBar;
