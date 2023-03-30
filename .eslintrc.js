const alias = require("./next-alias");

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: Object.keys(alias).map((key) => [key, alias[`${key}`].replace(__dirname, ".")]),
        extensions: [".js", ".jsx"],
      },
    },
  },
  plugins: ["react", "react-hooks", "sonarjs", "prettier"],
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    "no-console": "warn",
    "import/no-anonymous-default-export": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/no-onchange": "off",
    "react/react-in-jsx-scope": "off",
    "security/detect-object-injection": "off",
  },
};
