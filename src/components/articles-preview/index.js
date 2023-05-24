import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby'

import Card from "../card";

import {
    title,
    container
} from './articles-preview.module.css'

const ArticlesPreview = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC }}, filter: {frontmatter: {type: {eq: "article"}}}) {
                nodes {
                    frontmatter {
                        title
                        slug
                        category
                        lang
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
    `)

    const articles = data.allMdx.nodes

    return (
        <div className={container}>
            <h2 className={title}>
                Things I wrote
            </h2>

            {articles.map(article => (
                <Card
                    id={article.id}
                    title={article.frontmatter.title}
                    description={article.excerpt}
                    route={`/articles/${article.frontmatter.slug}`}
                    tags={[article.frontmatter.category, article.frontmatter.lang]}>
                    <GatsbyImage
                        image={getImage(article.frontmatter.hero_image)}
                        alt={article.frontmatter.title}
                    />
                </Card>
            ))}
        </div>
    )
}

export default ArticlesPreview