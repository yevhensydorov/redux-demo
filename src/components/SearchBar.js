import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({handleChange, handleSubmit}) => {
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={event => handleSubmit(event)}
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={event => handleChange(event)}
        />
        <button type="submit">Search</button>
      </form>
    );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default SearchBar;
