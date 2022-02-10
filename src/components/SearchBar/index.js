import React from "react";
import "./style.css";
import "./books.json";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";


const SearchBar = (props) => {
    return (
    <div className="Search">
        <span className="SearchSpan">
        <FaSearch />
        </span>
        <input
        className="SearchInput"
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
    </div>
    );
};

SearchBar.propTypes = {
    /**
     *  Function to run when onChange event is triggered
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Text placeholder for the search bar
     */
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;