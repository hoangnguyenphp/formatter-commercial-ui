export const JsonFormatter = {
  minify: (input) => JSON.stringify(JSON.parse(input)),
  beautify: (input) => JSON.stringify(JSON.parse(input), null, 2),
  verify: (input) => {
    try {
      JSON.parse(input);
      return "Valid JSON";
    } catch (e) {
      return `Invalid JSON: ${e.message}`;
    }
  },
};
