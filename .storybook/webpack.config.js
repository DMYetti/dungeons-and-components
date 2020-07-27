const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias['~'] = path.join(__dirname, '..', 'src', 'shared');

  return config;
};
