import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.css"
import Footer from "./footer"

const InnerLayout = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto container">
          <div className="relative z-10 bg-white pb-4 sm:pb-6 md:pb-12 lg:w-full lg:max-w-2xl">
            <div>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8 hidden md:block">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                      <Link to="/">
                        <StaticImage
                          style={{ width: "100px" }}
                          placeholder="blurred"
                          alt={site.siteMetadata?.title}
                          className="h-8 w-auto sm:h-10"
                          src="../images/logo.png"
                          objectFit="contain"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:flex items-center md:space-x-8 md:pr-4">
                    <Link
                      to="/blog"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/about-us"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact-us"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
              </div>

              <div className="block inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex w-full items-center justify-between md:w-auto">
                      <Link to="/" className="mx-auto">
                        <StaticImage
                          style={{ width: "100px" }}
                          placeholder="blurred"
                          alt={site.siteMetadata?.title}
                          className="h-8 w-auto sm:h-10"
                          src="../images/logo.png"
                          objectFit="contain"
                        />
                      </Link>
                    </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Blog
                    </a>

                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      About
                    </a>

                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mt-12">{props.title}</h2>
          </div>
        </div>
      </div>
      <div>
        <main className="bg-white lg:w-full lg:max-w-[95rem] mx-auto">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default InnerLayout
