const QUICKSEARCH_FIELDS = ['name', 'surname', 'nickName'];

export const createQuery = (values) => {
  const query = {};
  const { quicksearch, birthday, status } = values;
  if (quicksearch) {
    const quicksearchRegex = new RegExp(quicksearch, 'i');
    Object.assign(
      query,
      { $or: QUICKSEARCH_FIELDS.map(item => ({ [item]: { $regex: quicksearchRegex } })) },
    );
  }
  if (birthday) {
    Object.assign(query, { birthday });
  }
  if (status) {
    Object.assign(query, { status });
  }
  return query;
};
