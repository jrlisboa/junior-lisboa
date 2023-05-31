import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Footer from '../footer'
import {
    container,
    title,
    subtitle
} from './layout.module.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <Link to="/" className={title}>
                <header>{data.site.siteMetadata.title}</header>
            </Link>
            <h2 className={subtitle}>welcome to my place on the internet</h2>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout