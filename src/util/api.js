import { Projects } from './mock';
import { request } from './request';

const ping = () => request('/ping/v1/ping');
const getProjectsMock = () => Projects;

export const api = { ping, getProjectsMock };
