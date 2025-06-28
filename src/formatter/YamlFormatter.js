import { formatterApiCall } from '../utils/apiCall';

export const YamlFormatter = {
  minify: async (input) => await formatterApiCall('yaml', 'minify', input),
  beautify: async (input) => await formatterApiCall('yaml', 'beautify', input),
  verify: async (input) => await formatterApiCall('yaml', 'verify', input),
};
