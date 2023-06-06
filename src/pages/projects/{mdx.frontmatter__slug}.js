import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

import { content, title, mainImage, date, link } from '../articles/article.module.css'

const Project = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Link className={link} to="/projects">All projects</Link>
      <p className={date}>{data.mdx.frontmatter.date}</p>
      <h2 className={title}>{data.mdx.frontmatter.title}</h2>
      <div className={mainImage}>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />  
      </div>
      <div className={content}>
        {children}
      </div>
      <Link className={link} to="/projects">All projects</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Project