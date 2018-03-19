const search = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return Object.assign({}, state, {
        query: action.query
      });
    default:
      return state;
  }
};

export default search;
