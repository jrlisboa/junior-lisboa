import React from "react";
import { Link } from "gatsby";

import {
    link,
    staticContainer,
    container,
    content,
    tagsList,
} from './card.module.css'

const Card = ({
    isStatic = false,
    id,
    title,
    description,
    route,
    tags,
    children
}) => {
    return (
        <Link to={route} className={link}>
            <div key={id} className={isStatic ? staticContainer : container}>
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