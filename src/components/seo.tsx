import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface SeoPros {
  description?: string
  lang?: string
  meta?: []
  title: string
  image?: string
}

const SEO: React.FC<SeoPros> = ({
  description,
  lang = "it",
  meta = [],
  title,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteSeoQuery {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  let img: string = image || site.siteMetadata.image
  if (!img.startsWith("http")) {
    img = `${site.siteMetadata.siteUrl}${img}`
  }

  const pageMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: "og:image",
      content: img,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:image`,
      content: img,
    },
    ...meta,
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={pageMeta}
    />
  )
}

export default SEO
