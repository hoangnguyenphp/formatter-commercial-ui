import { formatterApiCall } from '../utils/apiCall';

export const JavaFormatter = {
  minify: async (input) => await formatterApiCall('java', 'minify', input),
  beautify: async (input) => await formatterApiCall('java', 'beautify', input),
  verify: async (input) => await formatterApiCall('java', 'verify', input),
};
