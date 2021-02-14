import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <>{children}</>
}

export default Layout
