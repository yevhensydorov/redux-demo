import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchResults from './SearchResults';
import search from '../services/search';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      results: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    search(this.state.query)
      .then(results => {
        this.setState({
          results: results.items
        });
      });
  }

  render(){
    return (
      <div>
        <SearchBarContainer />
        <SearchResults
          playVideo={this.props.playVideo}
          results={this.state.results}
        />
      </div>
    );
  }
};

export default Search;
