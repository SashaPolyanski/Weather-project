import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(config => {
  console.log({ config });
  config.url = `${config.url}&appid=${process.env.REACT_APP_API_KEY}`;
  return config;
});
