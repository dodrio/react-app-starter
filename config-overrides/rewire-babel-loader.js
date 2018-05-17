const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

function rewireBabelLoader(config, env, include = []) {
  const rule = config.module.rules.find(rule => {
    return rule.oneOf;
  });

  const babelRule = rule.oneOf[1];
  const customInclude = include.map(i => resolvePath(i));
  babelRule.include = [].concat(babelRule.include, customInclude);

  return config;
}

module.exports = rewireBabelLoader;
