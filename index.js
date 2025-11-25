/** @type {import('@maneko/prettier-config').Prettier} */
export const prettier = (userConfigs = {}) => {
  return {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    quoteProps: 'consistent',
    ...userConfigs
  };
};

export default prettier();
