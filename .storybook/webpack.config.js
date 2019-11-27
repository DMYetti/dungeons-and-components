module.exports = async ({ config, mode }) => {
  config.resolve.alias['~'] = `${__dirname}/../src`;

  return config;
};
