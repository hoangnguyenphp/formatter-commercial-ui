import { formatterApiCall } from '../utils/apiCall';

export const HtmlFormatter = {
  minify: async (input) => await formatterApiCall('html', 'minify', input),
  beautify: async (input) => await formatterApiCall('html', 'beautify', input),
  verify: async (input) => await formatterApiCall('html', 'verify', input),
};
