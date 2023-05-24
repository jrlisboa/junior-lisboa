import React from "react";
import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby'

import Card from "../card";

import {
    title,
    container
} from './projects-preview.module.css'

const ProjectsPreview = () => {
    const data = useStaticQuery(graphql`
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
    `)

    const projects = data.allMdx.nodes

    return (
        <div className={container}>
            <h2 className={title}>
                Things I created
            </h2>

            {projects.map(project => (
                <Card
                    id={project.id}
                    title={project.frontmatter.title}
                    description={project.excerpt}
                    image={getImage(project.frontmatter.hero_image)}
                    alt={project.frontmatter.title}
                    route={`/projects/${project.frontmatter.slug}`}
                    tags={[project.frontmatter.category, project.frontmatter.stack]}
                />
            ))}
        </div>
    )
}

export default ProjectsPreview