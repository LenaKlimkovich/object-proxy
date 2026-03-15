import eslint from 'eslint';

export default [
  // Applies the built-in recommended rules
  {
    files: ["src/**/*.js"], // Applies these specific rules only to files in the 'src' directory
   rules: {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "space-infix-ops": ["error", { "int32Hint": false }], 
    "eol-last": ["error", "always"],
    "semi": "error", 
    "prefer-const": "warn", 
  }
  },
  {
    ignores: ["dist", "build"] // Globally ignores specific directories
  }
];