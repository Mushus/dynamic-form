module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    "react"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    "no-unused-vars": "off",
    "no-undef": "off",
  },
  "parserOptions": {
    "sourceType": "module"
  }
};
