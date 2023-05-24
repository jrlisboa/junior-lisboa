import React from "react";
import { getImage } from "gatsby-plugin-image";

import SocialButton from "./social-button";
import useSocialIcons from "./useSocialIcons";

import {
    container,
} from './social.module.css'

const Social = () => {
    const icons = useSocialIcons()

    return (
        <div className={container}>
            {icons.map(icon => (
                <SocialButton
                    link="google.com"
                    image={getImage(icon)}
                    title={icon.name}
                />
            ))}
        </div>
    )
}

export default Social