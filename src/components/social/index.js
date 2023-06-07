import React from "react";
import { getImage } from "gatsby-plugin-image";

import SocialButton from "./social-button";
import useSocialIcons from "./useSocialIcons";

import {
    container,
} from './social.module.css'

const socialLinks = {
    github: 'https://github.com/jrlisboa',
    linkedin: 'https://www.linkedin.com/in/juniorlisboa/',
    twitter: 'https://twitter.com/juniorlisboa29',
    tabnews: 'https://www.tabnews.com.br/juniorlisboa',
}

const Social = () => {
    const icons = useSocialIcons()

    return (
        <div className={container}>
            {icons.map(icon => (
                <SocialButton
                    link={socialLinks[icon.name]}
                    image={getImage(icon)}
                    title={icon.name}
                />
            ))}
        </div>
    )
}

export default Social