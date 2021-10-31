module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addFilter('stringify', event => {
    return JSON.stringify(event);
  })

};