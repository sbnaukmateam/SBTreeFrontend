// TODO use reselect as the only way to compose selectors
// and make all selectors O(1) in time

export const selectorMembers = state => state.members.result;
export const selectorProfileById = (state, id) => selectorMembers(state) && selectorMembers(state).find(x => x.id === id);
export const selectorPatron = (state, childId) => {
  if (!selectorMembers(state)) return null;
  const id = selectorMembers(state).find(x => x.id === childId).patron;
  return selectorMembers(state).find(x => x.id === id);
};
export const selectorProfileName = (state, id) => {
  const me = selectorProfileById(state, id);
  return me && `${me.name} ${me.surname}`;
};
export const selectorProfileAvatar = (state, id) => {
  const me = selectorProfileById(state, id);
  return me && me.avatar;
};
