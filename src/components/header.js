import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const { site, android, ios } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }

        android: allData(filter: {config: {eq: "app_url_android"}}) {
          nodes {
            name
            value
            config
          }
        }
        
        ios: allData(filter: {config: {eq: "app_url_ios"}}) {
          nodes {
            name
            value
            config
          }
        }
      }
    `
  )

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto container">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
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

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Job Portal designed</span>
                  <span className="block text-teal-400 xl:inline">
                    {" "}
                    for you
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <a href={ios.nodes[0].value} target="_blank" className="mr-6">
                    <div class="flex mt-3 w-48 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center">
                      <div class="mr-3">
                        <svg viewBox="0 0 384 512" width="30">
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">Download on the</div>
                        <div class="text-2xl font-semibold font-sans -mt-1">
                          App Store
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href={android.nodes[0].value} target="_blank">
                    <div class="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                      <div class="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                          <path
                            fill="#FFD400"
                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                          />
                          <path
                            fill="#FF3333"
                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                          />
                          <path
                            fill="#48FF48"
                            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                          />
                          <path
                            fill="#3BCCFF"
                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="text-xl font-semibold font-sans -mt-1">
                          Google Play
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://via.placeholder.com/1470x980"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Header
