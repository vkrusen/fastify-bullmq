import { envsafe, port, str } from 'envsafe';

export const env = envsafe({
  REDISHOST: str(),
  REDISPORT: port(),
  REDISUSER: str(),
  REDISPASSWORD: str(),
  PORT: port({
    devDefault: 3002,
  }),
  RAILWAY_STATIC_URL: str({
    devDefault: 'http://localhost:3002',
  }),
});
