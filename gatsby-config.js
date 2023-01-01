const { data } = require('autoprefixer')

require("dotenv").config({
  path: `.env`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CodaJobs`,
    description: `Job Finder Application for Flutter.`,
    author: `@beamcoda`,
    siteUrl: `https://codajobs.beamcoda.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beamcoda-jobs-web`,
        short_name: `bcj-web`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.GATSBY_ADMIN_SITE_URL}/api/settings/general`,
        headers: {
          Accept: 'application/json'
        },
        rootKey: "data",
        schemas: {
          data: `
            config: String,
            name: String,
            value: String,
            setting: String
          `,
        }
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.GATSBY_ADMIN_SITE_URL}/api/blogposts/all`,
        headers: {
          Accept: 'application/json'
        },
        rootKey: "posts",
        schemas: {
          posts: `
            title: String,
            slug: String,
            featured_image: String,
            author: author,
            published: Boolean,
            published_date: String,
            modified_date: String,
            excerpt: String,
            body: String,
            links: links,
            meta: meta
          `,
          author: `
            name: String,
            email: String,
            profile_picture: String
          `,
          links: `
            first: String,
            last: String,
            prev: String,
            next: String
          `,
          meta: `
            current_page: Int,
            from: Int,
            last_page: Int,
            path: String,
            per_page: Int,
            to: Int,
            total: Int
          `
        }
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `${process.env.GATSBY_ADMIN_SITE_URL}/api/webpages/all`,
        headers: {
          Accept: 'application/json'
        },
        rootKey: "pages",
        schemas: {
          pages: `
            title: String,
            slug: String,
            body: String,
            published: Boolean,
            published_date: String,
            modified_date: String,
            status: String
          `,
          links: `
            first: String,
            last: String,
            prev: String,
            next: String
          `,
          meta: `
            current_page: Int,
            from: Int,
            last_page: Int,
            path: String,
            per_page: Int,
            to: Int,
            total: Int
          `
        }
      },
    },
  ],
}
