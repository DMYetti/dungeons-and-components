module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/jest.*',
    '/utils-*',
  ],
  coverageDirectory: '_coverage',
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: -10,
  //   },
  // },
  moduleNameMapper: {
    '^~(/.+)?$': `${__dirname}/src$1`,
    '\\.(jpg|png|otf|woff|woff2)$': `${__dirname}/jest.assets.js`,
  },
};
