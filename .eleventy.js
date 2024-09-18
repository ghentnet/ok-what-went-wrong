const markdownIt = require("markdown-it")
const { DateTime } = require('luxon')


module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  })
  
  eleventyConfig.addLayoutAlias('page', 'layouts/page')
  eleventyConfig.addLayoutAlias('post', 'layouts/post')
  
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode("appVer", () => `v${process.env.APP_VERSION || '0.0.0'}`)

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).setLocale('en').toLocaleString(DateTime.DATETIME_SHORT)
  })

  /* Creating a collection of blog posts by filtering based on folder and filetype */
  eleventyConfig.addCollection('blog', (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob('./src/posts/*.md')
    .filter(process.env.ELEVENTY_RUN_MODE !== "serve" ? item => !item.data.draft : item => item.data).reverse()
    return posts
  })


  eleventyConfig.addGlobalData("env", process.env);

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
