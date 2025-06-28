import { formatterApiCall } from '../utils/apiCall';

export const XmlFormatter = {
  minify: async (input) => await formatterApiCall('xml', 'minify', input),
  beautify: async (input) => await formatterApiCall('xml', 'beautify', input),
  verify: async (input) => await formatterApiCall('xml', 'verify', input),
};
