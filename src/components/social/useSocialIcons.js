import { graphql, useStaticQuery } from "gatsby";

const useSocialIcons = () => {
    const { photos = {} } = useStaticQuery(graphql`
        query {
            photos: allFile(
                filter: { relativePath: { regex: "/(social)/" } }
            ) {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED,
                            formats: [AUTO, WEBP],
                            layout: CONSTRAINED,
                            width: 28,
                            transformOptions: {fit: CONTAIN, cropFocus: ATTENTION}
                        )
                    }
                }
            }
        }
    `)

    return photos.nodes
}

export default useSocialIcons