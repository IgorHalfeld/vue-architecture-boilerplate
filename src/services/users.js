import { HTTPClient } from '../utils/request';

export default {
  create: ({ payload }) => HTTPClient.post('/users', payload),
};
