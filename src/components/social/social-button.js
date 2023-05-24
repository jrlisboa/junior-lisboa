import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import {
    button,
} from './social.module.css'

const SocialButton = ({
    link,
    title,
    image,
}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={button}>
            <GatsbyImage
                image={image}
                alt={`icon for ${title}`}
            />
            <span>{title}</span>
            <StaticImage
                placeholder="blurred"
                layout="constrained"
                height={12}
                src={`../../images/social/arrow-right.png`}
                alt="arrow pointing to the right"
            />
        </a>
    )
}

export default SocialButton