import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

class Search extends React.Component {
  render(){
    return (
      <div>
        <SearchBarContainer />
        <SearchResultsContainer />
      </div>
    );
  }
};

export default Search;
