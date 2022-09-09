import axios from 'axios';

const nodeEnv = process.env.NODE_ENV ?? 'development';

export const apiClient = axios.create({
  baseURL:
    nodeEnv === 'production'
      ? 'https://git.heroku.com/nest-next-template.git'
      : 'http://localhost:3000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
