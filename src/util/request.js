import 'whatwg-fetch';

const apiUrl = process.env.API_URL;

const prepareOptions = (method, data, options) => ({
  ...options,
  method,
  body: JSON.stringify(data),
});

const getAuth = () => localStorage.getItem('token');

const setAuth = token => localStorage.setItem('token', token);

const addBearerAuth = options => ({
  ...options,
  headers: { ...options.headers, Authorization: `Bearer ${getAuth()}` },
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

const handleAuth = ({ status, token }) => {
  if (status === 401) {
    setAuth(null);
    throw new Error('Unauthorized');
  }
  if (token) {
    setAuth(token);
  }
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

export const request = async (url, method = 'GET', data, options = {}) => {
  const fullUrl = apiUrl + url;
  const fullOptions = addBearerAuth(prepareOptions(
    method, data, options,
  ));
  const response = await fetch(fullUrl, fullOptions);
  const json = await prepareJSON(response);
  handleAuth(json);
  handleErrors(json);
  return json.result;
};
