import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {
    link,
    container,
    content,
    tagsList,
} from './card.module.css'

const Card = ({
    id,
    title,
    description,
    image,
    alt,
    route,
    tags,
}) => {
    return (
        <Link to={route} className={link}>
            <div key={id} className={container}>
                <GatsbyImage
                    image={image}
                    alt={alt}
                />
                <div className={content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={tagsList}>
                        {tags.map(tag => (
                            <span>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card