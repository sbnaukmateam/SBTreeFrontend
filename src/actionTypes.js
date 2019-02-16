const keyMirror = obj => Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: key }), {});

export default keyMirror({
  PING_REQUEST_START: 0,
  PING_REQUEST_SUCCESS: 0,
  PING_REQUEST_FAIL: 0,
  PING_RESET: 0,
});
