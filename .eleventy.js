module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addFilter('stringify', event => {
    return JSON.stringify(event);
  })
  eleventyConfig.addPassthroughCopy("_main/img");

  return {
    dir: {
      includes: "_includes",
      input: "_main",
      output: "_site"
    }
  }
};