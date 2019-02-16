import { request } from './request';

const ping = () => request('/ping/v1/ping');

export const api = { ping };
