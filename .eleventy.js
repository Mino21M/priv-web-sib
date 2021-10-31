module.exports = function(eleventyConfig) {

  eleventyConfig.addGlobalData("site", "SIB");
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');

};