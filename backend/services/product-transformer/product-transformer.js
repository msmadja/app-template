const plugins = require('./plugins');


function transform(product, options) {
  const selectedPlugins = plugins.filter(p =>  !options?.value.includes(p)) || plugins;
  return selectedPlugins.reduce((acc, plugin) => {
      return plugin.execute(product);
   }, product)
}

module.exports = {transform};