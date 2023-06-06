import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Card from '../card'

const Introduction = () => {
    return (
        <Card
            alt="Junior Lisboa"
            title="Some things about me and my career"
            description="
            I work for a digital bank, had worked for a investment broker,
            a robot advisor startup, a giant tech consultant and all
            this environments help me with my current vision about
            architecture and product delivery..."
        >
            <StaticImage
                placeholder="blurred"
                layout="constrained"
                width={150}
                height={150}
                alt="Junior Lisboa"
                src="../../images/junior.jpg" />
        </Card>
    )
}

export default Introduction