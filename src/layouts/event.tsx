import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"
import { Team } from "../components/team"
import Image from "gatsby-image"
import { Header } from "../components/header"

const EventPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        image={data.mdx.frontmatter.featureImage.childImageSharp.fluid.src}
      />
      <Header />
      <div className="max-w-prose md:m-auto  m-2">
        <div className="prose">
          <h1>{data.mdx.frontmatter.title}</h1>
        </div>
        <div className="my-10">
          <a
            href={`https://youtu.be/${data.mdx.frontmatter.youtube}`}
            target="_blank"
            className="block text-center no-underline bg-green-500 px-3 py-2 text-sm font-bold text-white rounded hover:bg-green-700"
          >
            Guarda su YouTube
          </a>
        </div>
        <div className="prose">
          <p>{data.mdx.frontmatter.description}</p>
          <Image
            fluid={data.mdx.frontmatter.featureImage.childImageSharp.fluid}
          />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
      <Team
        title=""
        subtitle="Chi ha partecipato all'evento?"
        members={data.mdx.frontmatter.guests}
      />
      <Footer />
    </Layout>
  )
}

export default EventPage

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      body
      id
      frontmatter {
        title
        date
        youtube
        featureImage {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        guests {
          bio
          id
          name
          twitter
          linkedin
          youtube
          site
          id
          image {
            childImageSharp {
              fixed(width: 160, height: 160) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
