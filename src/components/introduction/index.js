import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Card from "../card";

const Introduction = () => {
  return (
    <Card
      isStatic
      alt="Junior Lisboa"
      title="Long story short"
      description="I am currently a Tech Lead at Klubi, with 8 years of experience in the technology industry. I lead a developer team and implement technology strategies to optimize processes. My career spans diverse industries—a digital bank, an investment broker, a robot advisor startup, and a global tech consultancy."
    >
      <StaticImage
        placeholder="blurred"
        layout="constrained"
        width={110}
        height={110}
        alt="Junior Lisboa"
        src="../../images/junior.jpg"
      />
    </Card>
  );
};

export default Introduction;
