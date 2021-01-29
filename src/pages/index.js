import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import YouTube from "react-youtube"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Hero = () => (
  <div class="mb-10">
    <div class="relative overflow-hidden">
      <main>
        <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <a
                    href="https://space.hackability.it"
                    target="_blank"
                    class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-500 rounded-full">
                      beta
                    </span>
                    <span class="ml-4 text-sm">Visita Space Hackability</span>
                    <svg
                      class="ml-2 w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Costruiamo insieme</span>
                    <span class="block text-green-400">Space Hackability</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Sei un programmatore, un nerd, uno smanettone? Abbiamo più
                    di 120 progetti in open source e un portale per documentarli
                    e metterli a disposizione di tutti che funziona meno bene di
                    quanto vorremmo.
                  </p>

                  <div class="mt-10 sm:mt-12">
                    <div class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <a
                          href="https://forms.gle/Pam4YXcAB21M9Egx5"
                          class="block text-center w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 focus:ring-offset-gray-900"
                        >
                          Voglio dare una mano!
                        </a>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
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

const Footer = () => (
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {/* <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            About
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Blog
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Jobs
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Press
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Accessibility
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Partners
          </a>
        </div> */}
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/hackability-dev"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        hackability.dev è un progetto aperto di{" "}
        <a className="font-bold underline" href="http://www.hackability.it">
          Hackability NPO
        </a>
        .
      </p>
    </div>
  </footer>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="🆘 SOS Supporto dev! 🆘" />
    <Hero />
    <div className="max-w-prose md:m-auto prose m-2">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query PostPage {
    mdx(slug: { eq: "md/help" }) {
      body
    }
  }
`
