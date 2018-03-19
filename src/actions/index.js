export const updateQuery = query => {
  console.log(query);
  return {
    type: 'UPDATE_QUERY',
    query
  };
};
