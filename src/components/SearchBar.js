import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={this.props.handleSubmit}
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={event => this.props.updateQuery(event.target.value)}
          value={this.props.query}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
};

export default SearchBar;
