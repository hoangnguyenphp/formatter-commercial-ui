import { css as cssBeautify } from 'js-beautify';

export const CssFormatter = {
  minify: async (input) => {
    // Remove comments and collapse whitespace (simple minifier)
    return input
      .replace(/\/\*[\s\S]*?\*\//g, '')       // remove comments
      .replace(/\s+/g, ' ')                   // collapse whitespace
      .replace(/\s*([{};:,])\s*/g, '$1')      // remove space around symbols
      .trim();
  },

  beautify: async (input) => {
    return cssBeautify(input, {
      indent_size: 2,
      end_with_newline: true,
    });
  },

  verify: async (input) => {
    if (!input || typeof input !== 'string' || !input.includes('{') || !input.includes('}')) {
      throw new Error('Invalid CSS input');
    }
    return 'Valid CSS';
  },
};
