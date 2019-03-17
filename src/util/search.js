const QUICKSEARCH_FIELDS = ['name', 'surname', 'nickName'];

const L_OR_N = '[A-ZА-ЯҐЄІЇ0-9]'; // letter or number
const L_OR_N_OR_A = '[A-ZА-ЯҐЄІЇ0-9\'"`’ʼ]'; // letter or number or apostrophe
const WORD_REGEX = new RegExp(`${L_OR_N}${L_OR_N_OR_A}*${L_OR_N}|${L_OR_N}`, 'ig');

const tokenize = str => Array.from((str && str.match(WORD_REGEX)) || []);

const createRegexp = str => str && new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

export const createQuery = (values) => {
  const query = {};
  const {
    quicksearch, birthday, status, email, phone, profile,
  } = values;
  if (quicksearch) {
    const tokens = tokenize(quicksearch);
    Object.assign(
      query,
      {
        $and: tokens.map(token => ({
          $or: QUICKSEARCH_FIELDS.map(item => ({ [item]: { $regex: createRegexp(token) } })),
        })),
      },
    );
  }
  if (birthday) {
    Object.assign(query, { birthday });
  }
  if (status) {
    Object.assign(query, { status });
  }
  if (email) {
    Object.assign(query, { emails: { $elemMatch: createRegexp(email) } });
  }
  if (phone) {
    Object.assign(query, { phones: { $elemMatch: createRegexp(phone) } });
  }
  if (profile) {
    Object.assign(query, { profiles: { $elemMatch: createRegexp(profile) } });
  }
  return query;
};
