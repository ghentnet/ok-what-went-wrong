const markdownIt = require("markdown-it")

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  })

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    markdownTemplateEngine: 'njk'
  } 
}
