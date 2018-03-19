import {connect} from 'react-redux';
import {updateQuery} from '../actions';
import SearchBar from '../components/SearchBar';

const getQuery = (state) => {
  return state.query;
};

const mapStateToProps = state => ({query: getQuery(state)});

const mapDispatchToProps = dispatch => ({
  updateQuery: query => dispatch(updateQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
