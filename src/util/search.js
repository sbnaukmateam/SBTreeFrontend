const QUICKSEARCH_FIELDS = ['name', 'surname', 'nickName'];

const L_OR_N = '[A-ZА-ЯҐЄІЇ0-9]'; // letter or number
const L_OR_N_OR_A = '[A-ZА-ЯҐЄІЇ0-9\'"`’ʼ]'; // letter or number or apostrophe
const WORD_REGEX = new RegExp(`${L_OR_N}${L_OR_N_OR_A}*${L_OR_N}|${L_OR_N}`, 'ig');

const tokenize = str => Array.from((str && str.match(WORD_REGEX)) || []);

const createRegexp = str => str && new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

const isEmptyQuery = key => ({
  $or: [
    { [key]: null },
    { [key]: { $exists: false } },
  ],
});

export const createQuery = (values) => {
  const query = [];
  const {
    quicksearch, birthday, status, email, phone, profile, avatar, faculty, speciality,
  } = values;
  if (quicksearch) {
    const tokens = tokenize(quicksearch);
    query.push({
      $and: tokens.map(token => ({
        $or: QUICKSEARCH_FIELDS.map(item => ({ [item]: { $regex: createRegexp(token) } })),
      })),
    });
  }
  if (birthday) {
    query.push({ birthday });
  }
  if (status) {
    query.push({ status });
  }
  if (email) {
    query.push({ emails: { $elemMatch: createRegexp(email) } });
  }
  if (phone) {
    query.push({ phones: { $elemMatch: createRegexp(phone) } });
  }
  if (profile) {
    query.push({ profiles: { $elemMatch: createRegexp(profile) } });
  }
  if (avatar) {
    const isEmpty = avatar !== 'true';
    const emptyQuery = isEmptyQuery('avatar');
    query.push(isEmpty ? emptyQuery : { $not: emptyQuery });
  }
  if (faculty) {
    query.push({ 'degrees.facultyId': faculty });
  }
  if (speciality) {
    query.push({ 'degrees.specialityId': speciality });
  }
  return { $and: query };
};
