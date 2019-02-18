const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});
const allStates = str => ({ [`${str}_START`]: 0, [`${str}_SUCCESS`]: 0, [`${str}_FAIL`]: 0 });

export default keyMirror({
  ...allStates('PING_REQUEST'),
  PING_RESET: 0,
  ...allStates('FETCH_PROJECTS'),
  ...allStates('FETCH_MEMBERS'),
  ...allStates('CHANGE_PASSWORD'),
  ...allStates('CHANGE_INFORMATION'),
});
