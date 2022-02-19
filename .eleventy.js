module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addFilter('stringify', event => {
    return JSON.stringify(event);
  })

  return {
    dir: {
      includes: "_includes",
      input: "_main",
      output: "_site"
    }
  }
};