import React, { useEffect } from "react";
import { useSiteMetadata } from "./use-site-metadata";

let getAnalytics = () => {};
let app = () => {};

if (typeof window !== "undefined") {
  getAnalytics = require("firebase/analytics").getAnalytics;
  app = require("gatsby-plugin-firebase-v9.0").default;
}

const Seo = ({ title, image, description, pathname, children }) => {
  const analytics = getAnalytics(app);
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  useEffect(() => {
    analytics == null ?? analytics.logEvent("page_view", {
      page_title: seo.title,
      page_location: seo.url,
      page_path: seo.url,
    })
  }, [seo.title, seo.url, analytics]);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default Seo;
