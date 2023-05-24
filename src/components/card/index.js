import React from "react";
import { Link } from "gatsby";

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
    route,
    tags,
    children
}) => {
    return (
        <Link to={route} className={link}>
            <div key={id} className={container}>
                {children}
                <div className={content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={tagsList}>
                        {(tags ?? []).map(tag => (
                            <span>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card