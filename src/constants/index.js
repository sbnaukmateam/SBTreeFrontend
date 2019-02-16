const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});

export const ActionTypes = keyMirror({
  SWITCH_MENU: 1,
  EXCEPTION: 1,
  USER_LOGIN: 1,
  USER_LOGIN_SUCCESS: 1,
  USER_LOGIN_FAILURE: 1,
  USER_LOGOUT: 1,
  USER_LOGOUT_SUCCESS: 1,
  USER_LOGOUT_FAILURE: 1,
  GITHUB_GET_REPOS: 1,
  GITHUB_GET_REPOS_SUCCESS: 1,
  GITHUB_GET_REPOS_FAILURE: 1,
  SHOW_ALERT: 1,
  HIDE_ALERT: 1,
});

