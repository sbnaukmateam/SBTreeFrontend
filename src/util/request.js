import 'whatwg-fetch';

const apiUrl = process.env.API_URL;

const prepareOptions = (method, data, options) => ({
  ...options,
  method,
  body: JSON.stringify(data),
});

export const getAuth = () => localStorage.getItem('token');

export const setAuth = token => localStorage.setItem('token', token);

const addBearerAuth = (options, auth) => ({
  ...options,
  headers: { ...options.headers, Authorization: `Bearer ${auth}` },
});

const prepareJSON = async (response) => {
  const { status, statusText } = response;
  let body;
  let parsingError;
  try {
    body = await response.json();
  } catch (err) {
    parsingError = err.toString();
  }
  const { result, error, token } = body || {};
  return {
    status, statusText, result, error, token, parsingError,
  };
};

const handleErrors = ({
  status, statusText, error, parsingError,
}) => {
  const statusError = status >= 400 && (statusText || status);
  const errorMessage = error || statusError || parsingError;
  if (errorMessage) {
    throw new Error(errorMessage);
  }
};

export const request = async (url, method = 'GET', data, options = {}, token = '') => {
  const fullUrl = apiUrl + url;
  const auth = token || getAuth();
  const fullOptions = addBearerAuth(prepareOptions(
    method, data, options,
  ), auth);
  const response = await fetch(fullUrl, fullOptions);
  const json = await prepareJSON(response);
  handleErrors(json);
  return json.result;
};
