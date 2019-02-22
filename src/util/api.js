import { Projects, Members } from './mock';
import { request } from './request';

const ping = () => request('/ping/v1/ping');

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
  ping, getProjectsMock, getMembersMock, changePasswordMock, changeInfoMock,
};
