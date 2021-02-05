import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
    </>
  )
}

export default Layout
