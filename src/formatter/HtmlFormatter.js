import { html as beautifyHtml } from 'js-beautify';

export const HtmlFormatter = {
  minify: async (input) =>
    beautifyHtml(input, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      preserveLineBreaks: false,
      indent_size: 0,
    }).replace(/\n/g, ''),

  beautify: async (input) =>
    beautifyHtml(input, {
      indent_size: 2,
      preserve_newlines: true,
    }),

  verify: async (input) => {
    try {
      beautifyHtml(input); // If it parses successfully, it's valid.
      return 'Valid HTML';
    } catch (e) {
      throw new Error('Invalid HTML: ' + e.message);
    }
  },
};
