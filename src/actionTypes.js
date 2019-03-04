const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});
const makeActionTypes = str => ({ [`${str}_START`]: 0, [`${str}_SUCCESS`]: 0, [`${str}_FAIL`]: 0 });

export default keyMirror({
  ...makeActionTypes('PING_REQUEST'),
  PING_RESET: 0,
  ...makeActionTypes('FETCH_PROJECTS'),
  ...makeActionTypes('FETCH_MEMBERS'),
  ...makeActionTypes('CHANGE_PASSWORD'),
  ...makeActionTypes('CHANGE_INFORMATION'),
  ...makeActionTypes('AUTH_VERIFY'),
  ...makeActionTypes('AUTH_LOGIN'),
  ...makeActionTypes('AUTH_SIGNUP'),
  ...makeActionTypes('AUTH_LOGOUT'),
  ...makeActionTypes('MODAL_LOGIN'),
  ...makeActionTypes('MODAL_SIGNUP'),
  ...makeActionTypes('MODAL_CLOSE'),
});
