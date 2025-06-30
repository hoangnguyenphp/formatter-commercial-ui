import { html as beautifyHtml } from 'js-beautify';
import { formatterApiCall } from '../utils/apiCall';

export const HtmlFormatter = {
  minify: async (input) => await formatterApiCall('html', 'minify', input),

  beautify: async (input) =>
    beautifyHtml(input, {
      indent_size: 2,
      preserve_newlines: true,
      end_with_newline: true,
    }),

  verify: async (input) => {
    try {
      beautifyHtml(input); // Just a parse check
      return 'Valid HTML (basic structure check)';
    } catch (e) {
      throw new Error('Invalid HTML: ' + e.message);
    }
  },
};
