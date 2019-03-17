import { Projects, Members, Roles } from './mock';
import { request } from './request';

const ping = () => request('/ping/v1/ping');

const verify = () => request('/auth/v1/verify');

const signIn = (username, password) => request('/auth/v1/login', 'POST', { username, password });

const signUp = (username, password, name, surname) => request('/auth/v1/signup', 'POST', {
  username, password, name, surname,
});


// TODO remove mock
const sendChangePassMailMock = (/* username */) => ({ status: 'SUCCESS' });
const getProjectsMock = () => Projects;
const getMembersMock = () => Members;
const getRoleMock = (e, p) => Roles.filter(x => x.email[0] === e && x.password[0] === p)[0].role;
const changePasswordMock = (/* newPassword */) => ({ status: 'SUCCESS' });
const changeInfoMock = (/* data */) => {
  if (Math.random() < 0.5) throw new Error('SOMETHING WENT WRONG');
  return { status: 'SUCCESS' };
};
// -----
export const api = {
  ping,
  getProjectsMock,
  getMembersMock,
  getRoleMock,
  changePasswordMock,
  changeInfoMock,
  sendChangePassMailMock,
  verify,
  signIn,
  signUp,
};
