import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Introduction from '../components/introduction'
import ArticlesPreview from '../components/articles-preview'
import ProjectsPreview from '../components/projects-preview'
import Social from '../components/social'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Social />
      <Introduction />
      <ProjectsPreview />
      <ArticlesPreview />
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage