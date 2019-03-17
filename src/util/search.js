const QUICKSEARCH_FIELDS = ['name', 'surname', 'nickName'];

export const createQuery = (values) => {
  const { quicksearch } = values;
  const quicksearchRegex = new RegExp(quicksearch, 'i');
  return {
    $or: QUICKSEARCH_FIELDS.map(item => ({ [item]: { $regex: quicksearchRegex } })),
  };
};
