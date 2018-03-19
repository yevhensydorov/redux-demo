import {connect} from 'react-redux';
import SearchResults from '../components/SearchResults';

const getResults = (state) => {
  return state.search[state.query] || [];
};

const mapStateToProps = state => ({results: getResults(state)});

export default connect(
  mapStateToProps
)(SearchResults);
