import { formatterApiCall } from '../utils/apiCall';

export const MarkdownFormatter = {
  minify: async (input) => await formatterApiCall('md', 'minify', input),
  beautify: async (input) => await formatterApiCall('md', 'beautify', input),
  verify: async (input) => await formatterApiCall('md', 'verify', input),
};
