import { Projects, Members } from './mock';
import { request } from './request';

const ping = () => request('/ping/v1/ping');

const verify = () => request('/auth/v1/verify');

const signIn = (login, password) => request('/auth/v1/login', 'POST', { login, password });

const signUp = (login, password, name) => request('/auth/v1/signup', 'POST', { login, password, name });


// TODO remove mock
const getProjectsMock = () => Projects;
const getMembersMock = () => Members;
const changePasswordMock = (/* newPassword */) => {
  if (Math.random() < 0.5) throw new Error('NO CONNECTION');
  return { status: 'SUCCESS' };
};
const changeInfoMock = (/* data */) => {
  if (Math.random() < 0.5) throw new Error('SOMETHING WENT WRONG');
  return { status: 'SUCCESS' };
};
// -----
export const api = {
  ping,
  getProjectsMock,
  getMembersMock,
  changePasswordMock,
  changeInfoMock,
  verify,
  signIn,
  signUp,
};
