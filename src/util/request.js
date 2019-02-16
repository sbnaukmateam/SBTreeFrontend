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
  const body = await response.json();
  const { result, error, token } = body;
  return {
    status, statusText, result, error, token,
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

const handleErrors = ({ status, statusText, error }) => {
  if (status >= 400 || error) {
    throw new Error(error || statusText || status);
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
