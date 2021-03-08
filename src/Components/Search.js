import { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (  
        <form className="search">
            <input 
                value={searchValue}
                onChange={handleSearchInput}
                type="text"
                />
            <input onClick={callSearchFunction} type="submit" value="Search"/>
        </form>
    );
}
 
export default Search;