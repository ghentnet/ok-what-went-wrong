const markdownIt = require("markdown-it")
const markdownItFootnote = require("markdown-it-footnote");
const markdownItEleventyImg = require("markdown-it-eleventy-img");  
const { DateTime } = require('luxon')


module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ 
      html: true, // Enable HTML tags in source
      breaks: true,  // Convert '\n' in paragraphs into <br>
      linkify: true // Autoconvert URL-like text to links
     }).use(markdownItEleventyImg).render(content);
  })
  
  eleventyConfig.addLayoutAlias('page', 'layouts/page')
  eleventyConfig.addLayoutAlias('post', 'layouts/post')

  eleventyConfig.addPassthroughCopy("src/img");
  
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
    .filter(process.env.ELEVENTY_RUN_MODE !== "serve" ? item => !item.data.draft : item => item.data)
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
