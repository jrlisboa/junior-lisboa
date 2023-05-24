/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Junior Lisboa`,
    siteUrl: `https://juniorlisboa.com`,
    description: `I'm a 23-year-old Brazilian software engineer. I started programming when I was 13 and needed to earn money with it. I spent a lot of time thinking that I just programmed for my paycheck, until I discovered that writing code and creating things is a part of me and who I am. It also helps me to maintain my mental health.`,
    image: `/images/junior.jpg`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
  ],
}
