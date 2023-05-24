import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
    text,
    container
} from './introduction.module.css'

const Introduction = () => {
    return (
        <div className={container}>
            <StaticImage
                src="../../images/junior.jpg"
                placeholder="blurred"
                layout="fixed"
                height={150}
                width={150}
                sizes="(max-width: 350px) 100vw, 350px"
                transformOptions={{
                    fit: "cover",
                    cropFocus: "attention"
                }}
            />
            <p className={text}>
                I'm a 23-year-old Brazilian software engineer.
                <br/>I started programming when I was 13
                and needed to earn money with it. I spent a lot of time thinking that I just programmed
                for my paycheck, until I discovered that <strong>writing code and creating things is a part of
                me and who I am.</strong> It also helps me to maintain my mental health.
            </p>
        </div>
    )
}

export default Introduction