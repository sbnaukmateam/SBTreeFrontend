const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});
const makeActionTypes = str => ({ [`${str}_START`]: 0, [`${str}_SUCCESS`]: 0, [`${str}_FAIL`]: 0 });

export default keyMirror({
  ...makeActionTypes('PING_REQUEST'),
  PING_RESET: 0,
  ...makeActionTypes('FETCH_PROJECTS'),
  ...makeActionTypes('FETCH_MEMBERS'),
  ...makeActionTypes('ADD_MEMBER'),
  ...makeActionTypes('NEDB_INIT'),
  ...makeActionTypes('NEDB_QUERY_MEMBERS'),
  ...makeActionTypes('NEDB_GET_MEMBER'),
  ...makeActionTypes('NEDB_UPDATE_MEMBER'),
  ...makeActionTypes('CHANGE_PASSWORD'),
  ...makeActionTypes('CHANGE_INFORMATION'),
  ...makeActionTypes('AUTH_VERIFY'),
  ...makeActionTypes('AUTH_LOGIN'),
  ...makeActionTypes('AUTH_SIGNUP'),
  ...makeActionTypes('AUTH_LOGOUT'),
  ...makeActionTypes('FORGOT_PASSWORD'),
  ...makeActionTypes('CHANGE_PASSWORD'),
  MODAL_OPEN: 0,
  MODAL_CLOSE: 0,
  SET_AUTH: 0,
  SET_RESET: 0,
});
