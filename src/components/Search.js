import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import search from '../services/search';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    search(this.state.query)
      .then(results => {
        debugger;
        this.setState({
          results: results.items
        });
      });
  }

  render(){
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          query={this.state.query}
        />
        <SearchResults
          playVideo={this.props.playVideo}
          results={this.state.results}
        />
      </div>
    );
  }
};

Search.propTypes = {
  playVideo: PropTypes.func
};

export default Search;
