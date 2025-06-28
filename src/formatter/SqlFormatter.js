import { formatterApiCall } from '../utils/apiCall';

export const SqlFormatter = {
  minify: async (input) => await formatterApiCall('sql', 'minify', input),
  beautify: async (input) => await formatterApiCall('sql', 'beautify', input),
  verify: async (input) => await formatterApiCall('sql', 'verify', input),
};
