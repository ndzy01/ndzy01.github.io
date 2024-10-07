/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(\\./.*css$)",

    "^react.*",

    "^(\\./.*)",
    "^(\\.\\./.*)",

    "^(\\./components.*)",
    "^(\\./page.*)",
    "^(\\./utils.*)",
    "^(\\./store.*)",

    "^(\\.\\./components.*)",
    "^(\\.\\./page.*)",
    "^(\\.\\./utils.*)",
    "^(\\.\\./store.*)",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}
