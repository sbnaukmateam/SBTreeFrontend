export const selectorMembers = state => state.members.result;
export const selectorProfileById = (state, id) => selectorMembers(state).find(x => x.id === id);
export const selectorPatron = (state, childId) => {
  const id = selectorMembers(state).find(x => x.id === childId).patron;
  return selectorMembers(state).find(x => x.id === id);
};
