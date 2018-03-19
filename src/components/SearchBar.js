import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={event => {
          event.preventDefault();
          this.props.searchRequest(this.props.query);
        }}
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
