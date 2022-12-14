import axios from 'axios';

const nodeEnv = process.env.NODE_ENV ?? 'development';

export const apiClient = axios.create({
  baseURL:
    nodeEnv === 'production'
      ? 'https://nest-next-template.herokuapp.com/'
      : 'http://localhost:3000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
