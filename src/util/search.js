const QUICKSEARCH_FIELDS = ['name', 'surname', 'nickName'];

export const createQuery = (values) => {
  const query = {};
  const { quicksearch, birthday } = values;
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
  return query;
};
