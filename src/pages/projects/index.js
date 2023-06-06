import * as React from 'react'
import { Link, graphql } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Card from '../../components/card'
import Social from '../../components/social'

const Projects = ({ data }) => {
  const articles = data.allMdx.nodes
  return (
    <Layout pageTitle="Things I created">
      <Social />
      <h2>
          Things I created
      </h2>
      {articles.map(article => (
          <Card
              id={article.id}
              title={article.frontmatter.title}
              description={article.excerpt}
              route={`/articles/${article.frontmatter.slug}`}
              tags={[article.frontmatter.category, article.frontmatter.stack]}>
              <GatsbyImage
                  image={getImage(article.frontmatter.hero_image)}
                  alt={article.frontmatter.title}
              />
          </Card>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}, filter: {frontmatter: {type: {eq: "project"}}}) {
        nodes {
            frontmatter {
                title
                slug
                category
                stack
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED,
                            formats: [AUTO, WEBP],
                            layout: CONSTRAINED,
                            width: 150,
                            height: 150,
                            transformOptions: {fit: COVER, cropFocus: ATTENTION}
                        )
                    }
                }
            }
            id
            excerpt
        }
    }
  }
`

export const Head = () => <Seo title="Things I created" />

export default Projects