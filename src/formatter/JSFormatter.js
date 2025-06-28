import { js as beautifyJs } from 'js-beautify';
import { minify as terserMinify } from 'terser';

export const JSFormatter = {
  minify: async (input) => {
    try {
      const result = await terserMinify(input, {
        compress: true,
        mangle: true,
        format: {
          beautify: false,
        },
      });

      if (result.error) {
        throw result.error;
      }

      return result.code;
    } catch (e) {
      throw new Error('Minify failed: ' + e.message);
    }
  },

  beautify: async (input) =>
    beautifyJs(input, {
      indent_size: 2,
      space_in_empty_paren: true,
    }),

  verify: async (input) => {
    try {
      new Function(input); // Kiểm tra cú pháp
      return 'Valid JavaScript';
    } catch (e) {
      throw new Error('Invalid JavaScript: ' + e.message);
    }
  },
};
