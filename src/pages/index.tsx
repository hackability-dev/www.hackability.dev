import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Events } from "../components/events"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Team } from "../components/team"
import { Footer } from "../components/footer"

const Hero = () => (
  <div className="mb-10">
    <div className="relative overflow-hidden">
      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="https://space.hackability.it"
                    target="_blank"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-500 rounded-full">
                      beta
                    </span>
                    <span className="ml-4 text-sm">
                      Visita Space Hackability
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Costruiamo insieme</span>
                    <span className="block text-green-400">
                      Space Hackability
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Sei un programmatore, un nerd, uno smanettone? Abbiamo più
                    di 120 progetti in open source e un portale per documentarli
                    e metterli a disposizione di tutti che funziona meno bene di
                    quanto vorremmo.
                  </p>

                  <div className="mt-10 sm:mt-12">
                    <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <a
                          href="https://forms.gle/Pam4YXcAB21M9Egx5"
                          className="block text-center w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 focus:ring-offset-gray-900"
                        >
                          Voglio dare una mano!
                        </a>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Costruiamo insieme Space Hackability"
      description="Sei un programmatore, un nerd, uno smanettone? Abbiamo più di 120 progetti in open source e un portale per documentarli e metterli a disposizione di tutti che funziona meno bene di quanto vorremmo."
    />
    <Hero />
    <Events events={data.events.nodes} />
    <Team members={data.team.edges.map(e => e.node)} />

    <div className="max-w-prose md:m-auto prose m-2">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    mdx(slug: { eq: "md/help" }) {
      body
    }
    events: allMdx(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
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
            id
            name
            image {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    team: allGuestsYaml {
      edges {
        node {
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
